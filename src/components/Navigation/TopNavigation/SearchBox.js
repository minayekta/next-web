import loadable from '@loadable/component';
import $ from 'jquery';
import { useRouter } from 'next/router';
import { Children, Fragment, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import PopUp, { closePopup } from '../../common/Popup/PopUp';
import TagsPopUp, { openTagsPopup } from '../../product-tags/TagsPopUp';
import { ProductGetAllTags } from '../../Services/TagsServices';
import { currentlanguageCode, isRtl } from './../../../../next.config';
const TagComponent = loadable(() => import('../../product-tags/TagComponent'));
var { text } = require('../../translate-files/' + currentlanguageCode + '.json');
let tagsArray = [];

const SearchBox = (props) => {
    const [searchTerm, setSearchTerm] = useState();
    const router = useRouter();
    const searchRef = useRef(null);
    const [istagPage, setIstagPage] = useState(false);
    const [tags, setTags] = useState();

    const handleSearchSubmit = (e) => {
        if (searchTerm !== '') {
            closePopup();
            router.push(
                {
                    pathname: `/all-products`,
                    query: { searchTerm }
                });
            setSearchTerm('')
            $('.search-input').val('');
        }
        else {
            alert('empty');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearchTag = (e) => {
        setTags(tagsArray.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const getProductTags = async () => {
        let body = {
            text: ''
        }
        const resTags = await ProductGetAllTags(body);
        setTags(resTags?.data?.response);
        tagsArray = resTags?.data?.response;
    }

    useEffect(() => {
        var currentURl = window.location.pathname;
        if (currentURl.includes('/tags/')) {
            setIstagPage(true);
            getProductTags();
        }
        else {
            setIstagPage(false);
        }
    }, [router.asPath])

    return (
        <span className='search-box col-12 col-xl-auto px-0'>
            {isMobile ?
                <div className='col-12 bk-white mobile-search border-bottom pb-0 '>
                    {
                        istagPage ?
                            <Fragment>
                                <div className={'col-6 px-0 text-center '} >
                                    <button onClick={() => { openTagsPopup('tagsBox'); }} className='mb-1 w-100 bk-transparent d-flex justify-content-center align-items-center'>
                                        <svg className={`${isRtl ? 'ml-1' : 'mr-1'}`} xmlns="http://www.w3.org/2000/svg" id="local_offer_black_24dp" width="20" height="20" viewBox="0 0 24 24">
                                            <path id="Path_2980" data-name="Path 2980" d="M0,0H24V24H0Z" fill="none" />
                                            <path id="Path_2981" data-name="Path 2981" d="M21.41,11.58l-9-9A1.987,1.987,0,0,0,11,2H4A2.006,2.006,0,0,0,2,4v7a2,2,0,0,0,.59,1.42l9,9A1.987,1.987,0,0,0,13,22a1.955,1.955,0,0,0,1.41-.59l7-7A1.955,1.955,0,0,0,22,13,2.02,2.02,0,0,0,21.41,11.58ZM13,20.01,4,11V4h7V3.99l9,9Z" />
                                            <circle id="Ellipse_107" data-name="Ellipse 107" cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" />
                                        </svg>
                                        <span className='font-13' >{text.Tags}</span>
                                    </button>
                                </div>
                                <div className={`col-6 px-0  text-center `} >
                                    <button onClick={() => { props.openSerachPopup(), searchRef.current.focus() }} type='submit' className='mb-1 w-100 bk-transparent d-flex justify-content-center align-items-center border-left'>
                                        <i className={`fa fa-search font-18 ${isRtl ? 'ml-1' : 'mr-1'}`}></i>
                                        <span className='font-13' >{text.Search}</span>
                                    </button>
                                    {/* <input onChange={handleChange} onKeyDown={handleKeyDown} placeholder={text.EnterYourSearchTerm} className=' search-input border-none font-13' /> */}
                                </div>
                            </Fragment>
                            :
                            <div className={'col-12 px-0 border-bottom'}>
                                <input onChange={handleChange} onKeyDown={handleKeyDown} placeholder={text.EnterYourSearchTerm} className=' search-input border-none font-13' />
                                <button onClick={handleSearchSubmit} type='submit' className='bk-transparent'>
                                    <i className='fa fa-search font-18 mr-1'></i>
                                </button>
                            </div>
                    }
                </div>
                :
                <span onClick={() => { props.openSerachPopup(), searchRef.current.focus() }} className={'all-transition font-16 ml-4 pb-2 c-black cursor-pointer'}>
                    <i className={`fa fa-search font-18 ${isRtl ? 'ml-1' : 'mr-1'} `}></i>
                    <span className="font-13">{text.Search}</span>
                </span>
            }
            <PopUp id={'serach-box'} className={'col-10 col-md-6 col-xl-4 px-0 serach-box'} popupTitle={text.ProductSearchOnRonixSite}>
                <div className={'py-5 px-2 col-12 text-center d-flex'}>
                    <input ref={searchRef} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={text.EnterYourSearchTerm} className='col-8 offset-1 border-bottom my-4 search-input py-2 col-8 px-0 font-13' />
                    <div className='col-2'>
                        <button onClick={handleSearchSubmit} type='submit' className='bk-red my-4 c-white font-13 py-2 px-3 '>
                            {text.Search}
                        </button>
                    </div>
                </div>
            </PopUp>
            <TagsPopUp id={'tagsBox'} className={'col-10 col-md-6 px-0 serach-box'} popupTitle={'Tags'} >
                <div className='tagsContainer col-12 bk-white offset- mt-3 mb-3 px-3' >
                    <div className='col-12 mt-3 px-0'>
                        {/* <SearchTag handleSearch={handleSearchTag} /> */}
                        <div className="searchTagContainerInPopUp bk-white" >
                            <div className="searchDiv d-flex py-2 px-2">
                                <input className='searchInput ' onChange={handleSearchTag} placeholder={text.SearchForTag} />
                                <i className='fa fa-search'></i>
                            </div>
                        </div>
                    </div>
                    <div className={`tagLabels custome-scroll-bar col-12 mt-4 py-2 mb-4 ${isRtl ? 'rtl' : ''}`}>
                        {Children.toArray(
                            tags?.map(item =>
                                <Fragment>
                                    <TagComponent title={item.title} href={`/tags/${item.permalink}`} />
                                </Fragment>
                            ))}
                    </div>
                </div>
            </TagsPopUp>
        </span>
    );
}
export default SearchBox;
