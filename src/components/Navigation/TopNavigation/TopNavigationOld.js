import $ from 'jquery';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { assetPrefix, currentlanguageCode, internationalAssets, isRtl } from "../../../../next.config";
import LanguageModal from "../../common/LanguageModal";
import { GetMainMenu } from '../../Services/ContactService';
import {
    CategoryGetAllWithChildrenForCategoryMenu,
    CategoryGetAllWithChildsByLang
} from "../../Services/productService";
import SearchBox from './SearchBox';


var { text } = require('../../translate-files/' + currentlanguageCode + '.json');
const TopNavigation = ({ isMobile }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showMainMenu, setShowMainMenu] = useState(false);
    const [showGeneralPages, setShowGeneralPages] = useState(false);
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [categoryForMenu, setCategoryForMenu] = useState([]);
    const [MainMenu, setMainMenu] = useState([]);
    const [otherTopMenu, setOtherTopMenu] = useState([]);
    const MenuItemMock = [
        { name: 'Saws', id: 1, link: '/saws' },
        { name: 'Drills', id: 1, link: '/drills' },
        { name: 'Cordless Tools', id: 1, link: '/cordless-tools' },
        { name: 'Hand Tools', id: 1, link: '/hand-tools' },
        { name: 'Power Tools', id: 1, link: '/power-tools' }
    ];
    const handleShowLanguage = (e) => {
        setShowMenu(false);
        setShowLanguageModal(!showLanguageModal);
        e.stopPropagation();
    };
    const closeallOpenModal = () => {
        setShowLanguageModal(false);
        setShowMenu(false);
    };
    const handleShowSub = (categoryId) => {
        $('#category-' + categoryId + ' .sub-category').slideToggle(300);
        $('#category-' + categoryId + ' .arrow-icon').toggleClass('arrow-icon-open')
    }
    const handleShowMainSub = (categoryId) => {
        $('.childe-' + categoryId).slideToggle(300);
        $('#' + categoryId + '.parent img').toggleClass('hidden');
    }

    const closeHamer = () => {
        setShowMenu(false);
        setShowGeneralPages(false);
    }
    const handleGetMainMenu = async () => {
        const body =
        {
            "text": currentlanguageCode + "WebsiteMenu"
        }
        const res = await GetMainMenu(body);
        setMainMenu(res.data.response[1].subMenus);
        setOtherTopMenu(res.data.response[2].subMenus);
        CallApis();
    }

    async function CallApis() {
        let Data = ''
        if (!isMobile) {
            const categoriesForMenu = await CategoryGetAllWithChildrenForCategoryMenu();

            Data = categoriesForMenu.data.response;
        } else {
            const mobileCategoriesForMenu = await CategoryGetAllWithChildsByLang();
            Data = mobileCategoriesForMenu.data.response;
        }
        setCategoryForMenu(Data);
    }
    let counter = 1
    useEffect(() => {
        setShowLanguageModal(false);

        $(document).click(function (e) {
            setShowLanguageModal(false);
        });
        handleGetMainMenu()
    }, []);
    return (
        <nav className={'top-navigation bk-white'}>
            <div className='col-12 px-0'>
                {isMobile ? <div className='col-12 px-0'>
                    <div className='col-12 px-0 border-bottom mobile-navigation align-items-center d-flex flex-wrap'>
                        <div className={`ronix-logo col-5 text-left `}>
                            <Link href={`/`}>
                                <a>
                                    <img height={'40'} src={`${internationalAssets}/img/general-img/Ronix-Logo.png`} />
                                </a>

                            </Link>
                        </div>
                        <div className={`categories col-4 pr-0 ${isRtl ? 'text-center' : 'text-left'}`}>
                            <button onClick={() => { setShowMenu(true) }} className='bk-transparent py-2'>
                                <img src={`${internationalAssets}/img/icon/drill.svg`} />
                                <span className='font-13 pl-1'>{text.product}</span>
                            </button>
                            <div className={`${showMenu === true ? `show` : ``} hamer-menu-box text-left category-items`}>
                                <div className='col-12 px-0 overflow-s-y list-items '>
                                    {Children.toArray(
                                        categoryForMenu.map((content, index) => {
                                            return (
                                                <div id={`category-${content.id}`} className={`col-12 py-1 px-0 my-1 ${isRtl ? 'text-right' : ''}`} key={index}>
                                                    <span onClick={() => handleShowSub(content.id)} className='parent-name col-12 py-1 px-3 font-14 d-block'>
                                                        {content.productCategoryAttributes[0].title}
                                                        <span className='arrow-icon'>
                                                            <i className={'fa fa-chevron-down font-13 all-transition'}></i>
                                                        </span>
                                                    </span>
                                                    <div className='sub-category px-3 bk-grayA' style={{ display: 'none' }}>
                                                        {content.childs.map((childContent, index) => {
                                                            return (
                                                                <Link href={'/product-category/[categoryid]'} as={`/product-category/${childContent.productCategoryAttributes[0].permalink}`}>
                                                                    <a onClick={() => setShowMenu(false)}>
                                                                        <span className='col-12 d-block font-13 py-2 c-grayD' key={index}>{childContent.productCategoryAttributes[0].title}</span>
                                                                    </a>
                                                                </Link>

                                                            );
                                                        })}

                                                        <Link href={`/product-category/${content.productCategoryAttributes[0].permalink}`}>
                                                            <a onClick={() => setShowMenu(false)}>
                                                                <span className='col-12 d-block font-13 py-2 c-grayD' key={index}>
                                                                    <i className={`${isRtl ? ' mr-1' : ' mr-1'} fa fa-circle font-14`}></i>
                                                                    {text.ViewAllProducts}</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={`article-general-pages col-3 text-right `}>
                            <button onClick={() => { setShowGeneralPages(true) }} className='bk-transparent pl-4 py-2'>
                                <img src={`${internationalAssets}/img/icon/hamber-munu.svg`} />
                            </button>
                            <div className={`${showGeneralPages === true ? `show` : ``} hamer-menu-box general-article-items`}>
                                <div className='article-menu-mobile col-12 text-center list-items overflow-s-y px-0 py-4 bk-grayC'>
                                    <ul className='mb-5 col-12 px-0'>
                                        <li>
                                            <span className='d-block c-red font-14 font-weight-bold mb-3'>{text.MainMenu}</span>
                                            <menu>
                                                <div className='col-12 px-0'>
                                                    {Children.toArray(

                                                        MainMenu.map((subMenuItem, i) => {
                                                            if (subMenuItem.isParent === true) {
                                                                counter += 1;
                                                                return (
                                                                    <>
                                                                        <div id={counter} onClick={(e) => handleShowMainSub(e.target.id)} className='parent font-14 col-12 px-0 position-relative py-2'>{subMenuItem.title}
                                                                            <img className='algin-middle ml-1' src={`${internationalAssets}/img/icon/plus.svg`} />
                                                                            <img className='algin-middle ml-1 hidden' src={`${internationalAssets}/img/icon/min.svg`} />
                                                                        </div>

                                                                        <div style={{ display: 'none' }} className={'sub-main-menu bk-grayA col-12 px-0 childe-' + counter}>
                                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={subMenuItem.url}>{subMenuItem.title}</a>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }
                                                            else {
                                                                return (
                                                                    <div style={{ display: 'none' }} className={'sub-main-menu bk-grayA col-12 px-0 childe-' + counter}>
                                                                        <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={subMenuItem.url}>{subMenuItem.title}</a>
                                                                    </div>
                                                                )
                                                            }
                                                        }))}

                                                    {/* <div id='main-sub-1' className='col-12 px-0'>
                                                        <div onClick={() => handleShowMainSub(1)} className='parent font-14 position-relative py-2'>{text.CompanyProfile}
                                                            <img className='algin-middle ml-1' src={`${internationalAssets}/img/icon/plus.svg`} />
                                                            <img className='algin-middle ml-1 hidden' src={`${internationalAssets}/img/icon/min.svg`} />
                                                        </div>
                                                        <div style={{ display: 'none' }} className='sub-main-menu bk-grayA'>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/`}>{text.CompanyProfile}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/news/`}>{text.News}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/#board-of-mamagment/`}>{text.BoardOfManagement}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/#department`}>{text.Department}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/#satisfaction`}>{text.Satisfaction} </a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/#about-us`}>{text.AboutUs}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/#statistics`}>{text.Statistics}</a>
                                                        </div>
                                                    </div> */}
                                                    {/* <div id='main-sub-2' className='col-12 px-0'>
                                                        <div onClick={() => handleShowMainSub(2)} className='parent position-relative font-14 py-2'>{text.Blog}
                                                            <img className='algin-middle ml-1' src={`${internationalAssets}/img/icon/plus.svg`} />
                                                            <img className='algin-middle ml-1 hidden' src={`${internationalAssets}/img/icon/min.svg`} />
                                                        </div>
                                                        <div style={{ display: 'none' }} className='sub-main-menu bk-grayA'>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/`}>{text.Blog}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/how-to/`}>{text.HowTo}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/jobs/`}>{text.Jobs}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/tools-review/`}>{text.ToolsReview}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/archive/`}>{text.Archive}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/home-diy/`}>{text.HomeDIY}</a>
                                                        </div>
                                                    </div> */}
                                                    {/* <div id='main-sub-3' className='col-12 px-0'>
                                                        <div onClick={() => handleShowMainSub(3)} className='parent position-relative font-14 py-2'>{text.ContactUs}
                                                            <img className='algin-middle ml-1' src={`${internationalAssets}/img/icon/plus.svg`} />
                                                            <img className='algin-middle ml-1 hidden' src={`${internationalAssets}/img/icon/min.svg`} />
                                                        </div>
                                                        <div style={{ display: 'none' }} className='sub-main-menu bk-grayA'>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.ContactUs}</a>
                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='/under-construction'>{text.Offices}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.Contactinformation}</a>
                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='/under-construction'>{text.CustomerClub}</a>
                                                            <a target={'_blank'} className='col-12 d-block font-13 py-2 c-grayD' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.PartnerRequest}</a>
                                                        </div>
                                                    </div> */}
                                                    {/* {currentlanguageCode == "en" ? <div id='main-sub-4' className='col-12 px-0'>
                                                        <div onClick={() => handleShowMainSub(4)} className='parent font-14 position-relative py-2'>{text.AfterSalesService}
                                                            <img className='algin-middle ml-1' src={`${internationalAssets}/img/icon/plus.svg`} />
                                                            <img className='algin-middle ml-1 hidden' src={`${internationalAssets}/img/icon/min.svg`} />
                                                        </div>
                                                        <div style={{ display: 'none' }} className='sub-main-menu bk-grayA'>

                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='https://ronixtools.com/under-construction'>Online Spare Parts </a>
                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='https://ronixtools.com/en/news/faq'>FAQ </a>
                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='https://ronixtools.com/en/news/ronix-community/'>Community </a>
                                                            <a className='col-12 d-block font-13 py-2 c-grayD' href='https://ronixtools.com/en/news/repair-service/'>Online Repair service</a>


                                                        </div>
                                                    </div> : null} */}
                                                </div>
                                            </menu>
                                        </li>
                                    </ul>
                                    {/* {currentlanguageCode === "en" ? <ul itemScope itemType="http://www.schema.org/SiteNavigationElement">
                                        <li className='c-red font-14 font-weight-bold mb-3'>Main Article </li>
                                        <li itemProp="name"><a href='/saws' className='font-13 d-block c-black py-2 font-weight-bold'>Saws</a></li>
                                        <li itemProp="name"><a href='/drills' className='font-13 d-block c-black py-2 font-weight-bold'>Drills</a></li>
                                        <li itemProp="name"><a href='/cordless-tools' className='font-13 d-block c-black py-2 font-weight-bold'>Cordless Tools</a></li>
                                        <li itemProp="name"><a href='/hand-tools' className='font-13 d-block c-black py-2 font-weight-bold'>Hand Tools</a></li>
                                        <li itemProp="name"><a href='/power-tools' className='font-13 d-block c-black py-2 font-weight-bold'>Power Tools</a></li>
                                    </ul> : null} */}

                                    <ul className='col-12 px-0'>
                                        {Children.toArray(
                                            otherTopMenu.map((item, index) => {
                                                return (<div key={index} className='font-14 col-12 px-0 py-2'>
                                                    <a className='col-12 d-block c-grayD' href={item.url}>{item.title}</a>
                                                </div>)
                                            }))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SearchBox />
                    {showGeneralPages === true || showMenu === true ? <div onClick={closeHamer} className='mobile-overlay'></div> : null}
                </div> : null}
            </div>
            <div className='col-12 px-0'>
                {!isMobile ?
                    <div className='col-12 px-0'>

                        <div className={'container top-navigation-box'}>
                            <main className={'col-12 px-0 py-4'}>
                                <div className={`fullback-modalproduct ${showLanguageModal ? "d-block" : "d-none"} `}></div>
                                {" "}
                                <div className={'col-12 px-0 d-flex align-items-center pb-2'}>
                                    <div className={`col-6 px-0 d-flex align-items-center menu-item ${isRtl ? 'text-right' : ''}`}>
                                        <div className={'col-2 px-0'}>
                                            <a href={`https://ronixtools.com${assetPrefix}`}>
                                                <img height={'40'} src={`${internationalAssets}/img/general-img/Ronix-Logo.png`} />
                                            </a>
                                        </div>
                                        <menu className={`menu-item px-0 col-10 d-flex ${isRtl ? 'rtl text-right' : ''}`}>
                                            <span onClick={() => { setShowMainMenu(!showMainMenu); setShowMenu(false) }}
                                                className={'all-transition font-13 ml-4 pb-2 c-black cursor-pointer d-flex align-items-center'}>
                                                <img className={` ${isRtl ? 'mr-3 ml-1' : 'mr-1'} align-middle`}
                                                    src={`${internationalAssets}/img/icon/hamber-munu.svg`} />
                                                {text.MainMenu}
                                                <i className={`fa font-9 ${isRtl ? 'mr-1' : 'ml-1'}  fa-chevron-down`}></i>
                                            </span>
                                            <span onClick={() => { setShowMenu(!showMenu); setShowMainMenu(false) }}
                                                className={'all-transition font-13 ml-4 pb-2 c-black cursor-pointer d-flex align-items-center'}>
                                                <img width={22} height={22} className={'mr-1 align-middle'} src={`${internationalAssets}/img/icon/drill.svg`} />
                                                {text.product}
                                                <i className={`fa font-9 ${isRtl ? 'mr-1' : 'ml-1'} fa-chevron-down`}></i>
                                            </span>
                                            <SearchBox />
                                        </menu>
                                    </div>
                                    <div className={`col-6 px-0  menu-item logo-search text-right  `}>
                                        {/* {currentlanguageCode === "en" ?
                                        MenuItemMock.map((content, index) => {
                                            return (

                                                <a key={index} href={content.link} className={'d-inline-block hover-effect mr-4'}>

                                                    <span
                                                        className={'all-transition font-13 pb-2 c-grayD cursor-pointer'}>
                                                        {content.name}
                                                    </span>
                                                </a>


                                            );
                                        }) : null} */}
                                        <span onClick={handleShowLanguage}
                                            className={'ml-4 language-header cursor-pointer'}>
                                            <img width={21} height={21} src={`${internationalAssets}/img/icon/language.png`} />
                                        </span>
                                        {showLanguageModal ?
                                            <LanguageModal
                                                showLanguageModal={showLanguageModal}
                                                setShowLanguageModal={setShowLanguageModal}
                                                handleCloseFunc={() => setShowLanguageModal(false)}
                                            />
                                            : null}
                                    </div>
                                    <div className={showMenu === true ? "sub-menu-wrapper show" : "sub-menu-wrapper"}>
                                        <menu
                                            className={`sub-menu-box d-flex flex-wrap equal py-4 bk-white col-12 bk-white ${isRtl ? 'rtl ' : ''} `}>
                                            {Children.toArray(
                                                categoryForMenu.map((subMenuItem, i) => {
                                                    i = i + 1;
                                                    if ((i + 9) % 9 === 0) {
                                                        return (
                                                            <div className={"sub-menu-items"}>
                                                                {categoryForMenu.map((subMenuItemContent, j) => {
                                                                    j = j + 1;
                                                                    if (j > parseInt(i) - 9 && j <= parseInt(i)) {
                                                                        return (
                                                                            <Link href={`/product-category/${subMenuItemContent.permalink}`}
                                                                                key={j} >

                                                                                <a onClick={closeallOpenModal}
                                                                                    className={subMenuItemContent.isParent === true ? "col-12 d-block text-truncate font-14 c-black hover-item" : "col-12 sub-child text-truncate d-block font-11 hover-item"}>
                                                                                    {subMenuItemContent.title}
                                                                                </a>
                                                                            </Link>

                                                                        );
                                                                    }
                                                                })}
                                                            </div>
                                                        );
                                                    }
                                                }))}
                                            <div className='col-12 px-0'>
                                                <Link href={`/all-products`}>
                                                    <a onClick={closeallOpenModal} className='c-black font-16 hover-item all-transition'>
                                                        <i className={`${isRtl ? ' mr-1' : ' mr-1'} fa fa-circle font-14`}></i>
                                                        {text.ViewAllProducts}
                                                    </a>
                                                </Link>
                                            </div>
                                        </menu>
                                    </div>
                                    <div className={showMainMenu === true ? "sub-menu-wrapper show" : "sub-menu-wrapper"}>
                                        <menu className={`sub-menu-box d-flex flex-wrap equal py-4 bk-white col-12 bk-white ${isRtl ? 'rtl ' : ''}`}>
                                            {/* {MainMenu.map((Menuitem,index)=>{
                                            return (
                                                <div key={index} className={"sub-menu-items"}>
                                                    <a target={'_blank'} className='col-12 d-block text-truncate font-14 c-black hover-item' href={Menuitem.url}>{Menuitem.title}</a>
                                                    {Menuitem.subMenus!==null?Menuitem.subMenus.map((subMenuItem,index)=>{
                                                        return(
                                                            <a key={index} target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={subMenuItem.url}>{subMenuItem.title}</a>
                                                            )
                                                    }):null}
                                                </div>);
                                        })} */}







                                            {Children.toArray(

                                                MainMenu.map((subMenuItem, i) => {
                                                    i = i + 6;
                                                    if ((i + 12) % 6 === 0) {
                                                        return (
                                                            <div key={i} className={"sub-menu-items"}>
                                                                {MainMenu.map((subMenuItemContent, j) => {
                                                                    j = j + 1;
                                                                    if (j > (parseInt(i) - 6) && j <= parseInt(i)) {
                                                                        return (

                                                                            <a key={j} target={'_blank'} className={subMenuItemContent.isParent === true ? 'col-12 d-block text-truncate font-14 c-black hover-item' : 'col-12 sub-child text-truncate d-block font-11 hover-item'} href={subMenuItemContent.url}>{subMenuItemContent.title}</a>

                                                                        );
                                                                    }
                                                                })}
                                                            </div>
                                                        );
                                                    }
                                                }))}








                                            {/* <div className={"sub-menu-items"}>
                                            <a target={'_blank'} className='col-12 d-block text-truncate font-14 c-black hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/`}>{text.CompanyProfile}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/news/`}>{text.News}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/#board-of-mamagmen/`}>{text.BoardOfManagement} </a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/#department`}>{text.Department}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/#satisfaction`}>{text.Satisfaction} </a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/#about-us`}>{text.AboutUs}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/#statistics`}>{text.Statistics}</a>
                                        </div>
                                        <div className={"sub-menu-items"}>
                                            <a target={'_blank'} className='col-12 d-block text-truncate font-14 c-black hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/`}>{text.Blog}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/how-to/`}>{text.HowTo}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/jobs/`}>{text.Jobs}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/tools-review/`}>{text.ToolsReview}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/archive/`}>{text.Archive}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/blog/category/home-diy/`}>{text.HomeDIY}</a>
                                        </div>
                                        <div className={"sub-menu-items"}>
                                            <a target={'_blank'} className='col-12 d-block text-truncate font-14 c-black hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.ContactUs}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.Offices}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.ContactInformation}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.CustomerClub}</a>
                                            <a target={'_blank'} className='col-12 sub-child text-truncate d-block font-11 hover-item' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`}>{text.PartnerRequest}</a>
                                        </div>
                                        {currentlanguageCode == "en" ? <div className={"sub-menu-items"}>
                                            <a className='col-12 d-block text-truncate font-14 c-black hover-item' href={currentlanguageCode == "en" ? "https://ronixtools.com/en/news/after-sales" : '/under-construction'}>{text.AfterSalesService}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='https://ronixtools.com/under-construction'>Online Spare Parts </a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='https://ronixtools.com/en/news/repair-service/'>Online Repair service</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='https://ronixtools.com/en/news/faq'>FAQ </a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='https://ronixtools.com/en/news/ronix-community/'>Community </a>

                                        </div> : null}
                                        <div className={"sub-menu-items"}>
                                            <a className='col-12 d-block text-truncate font-14 c-black hover-item' href='/under-construction'>{text.JobCategories}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.BlackSmithing}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.Carpentry}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.Serviceman}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'>{text.DIY}</a>
                                            <a className='col-12 sub-child text-truncate d-block font-11 hover-item' href='/under-construction'> {text.others}</a>
                                        </div> */}

                                            <div className="sub-menu-items">
                                                {Children.toArray(

                                                    otherTopMenu.map((item, index) => {
                                                        return (<a target="_blank" className="col-12 d-block  text-truncate font-14 c-black hover-item" href={item.url}>{item.title}</a>)
                                                    }))}
                                            </div>

                                        </menu>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div className={showMenu === true || showMainMenu === true ? 'sub-menu-back show' : 'sub-menu-back'}
                            onClick={() => { setShowMenu(false); setShowMainMenu(false) }}></div>
                    </div> : null}
            </div>
        </nav >
    );
}
export default TopNavigation;