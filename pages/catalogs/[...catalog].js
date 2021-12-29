
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CatalogAssets, currentlanguageCode, internationalAssets, staticImages } from '../../next.config';
import PopUp, { closePopup, openPopup } from '../../src/components/common/Popup/PopUp';
import WebSiteContext from '../../src/components/Context/WebSiteContext';
import NProgress from './../../src/components/common/Loading/LoadingAllPage';
var imageExists = require('image-exists');
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');
const arrVar = [];
let Page = 1;
let pagenum;
const CatalogFilip = ({ isMobileView }) => {
    const context = useContext(WebSiteContext)
    const [SrcValide, setSrcValide] = useState();
    const [pageOne, setPageOne] = useState()
    const [pageTwo, setPageTwo] = useState()
    const [activeZoom, setActiveZoom] = useState(true)
    const [activeZoom2, setActiveZoom2] = useState(false)
    const [activeZoom3, setActiveZoom3] = useState(false)
    const [arrtest, setArrtest] = useState([])
    const [arr, setArr] = useState([])
    let en = 68;
    const route = useRouter()

    useEffect(() => {
        for (let index = 0; index < en; index++) {
            arrVar.push({ url: index + 1, imgUrl: `${CatalogAssets}/${currentlanguageCode}/${currentlanguageCode}-Catalogue-${index + 1}.jpg` });
        }
        var splitPairs = function (arr) {
            var pairs = [];
            for (var i = 0; i < arr.length; i += 2) {
                if (i == 0) {
                    pairs.push([arr[i]]);
                }
                if (arr[i + 2] !== undefined) {
                    pairs.push([arr[i + 1], arr[i + 2]]);
                } else {
                    pairs.push([arr[i + 1]]);
                }
            }
            return pairs;
        }
        setArrtest(splitPairs(arrVar))
        var flipbookEL = document.getElementById('flipbook');
        var pagebookEL = document.getElementsByClassName('page');
        setArr(arrVar)
        context.setCheckJs(true)
        const script = document.createElement("script");

        script.src = "/assets/js/turn.js";
        script.async = true;

        document.body.appendChild(script);
        // $('#nprogress').addClass('d-none');
        NProgress.start()
        setTimeout(() => {

            window.innerWidth < 1024 ?
                $(flipbookEL).turn({
                    autoCenter: true,
                    acceleration: true,
                    gradients: true,
                    elevation: 50,
                    display: 'single',
                    when: {
                        turned: function (event, page, pageObj) {
                            Page = page
                            route.push(`/catalogs/${page}`)
                            pagenum = pageObj
                            setPageOne(pagenum[0])
                            setPageTwo(pagenum[1])
                            if (page == 1) {
                                $(this).turn('peel', 'br');
                            }
                        }
                    }
                })
                : $(flipbookEL).turn({
                    autoCenter: true,
                    acceleration: true,
                    gradients: true,
                    elevation: 50,
                    when: {
                        turned: function (event, page, pageObj) {
                            Page = page
                            route.push(`/catalogs/${page}`)
                            pagenum = pageObj
                            setPageOne(pagenum[0])
                            setPageTwo(pagenum[1])
                            $(flipbookEL).find(`[page='${pagenum[0]}']`).addClass('page-show')
                            $(flipbookEL).find(`[page='${pagenum[1]}']`).addClass('page-show')
                            if (page == 1) {
                                $(this).turn('peel', 'br');
                            }
                        }
                    }
                })
            $(flipbookEL).turn("page", route.query.catalog[0]);

            NProgress.done()

        }, 5000)

        $('.catalogt-select-image').click(() => {
            $('.page.odd').turn("next");
        })

        $('.wrapper-catalog').mousemove((e) => {
            $(flipbookEL).css({ 'transform-origin': ((e.pageX - $(flipbookEL).offset().left) / $(flipbookEL).width()) * 100 + '% ' + ((e.pageY - $(flipbookEL).offset().top) / $(flipbookEL).height()) * 100 + '%' });
        })
    }, []);
    function handleitemCatalog(e) {
        $('.catalog-item-gallery').removeClass('active-catalog')
        $(e).parents('.catalog-item-gallery').addClass('active-catalog')
    }
    const handleZoom1 = () => {
        setActiveZoom(true)
        setActiveZoom2(false)
        setActiveZoom3(false)
        $('.box-right').removeClass('d-none')
        $('.box-left').removeClass('d-none')
    }
    const handleZoom2 = () => {
        setActiveZoom(false)
        setActiveZoom2(true)
        setActiveZoom3(false)
        $('.box-right').addClass('d-none')
        $('.box-left').addClass('d-none')
    }
    const handleZoom3 = () => {
        setActiveZoom(false)
        setActiveZoom2(false)
        setActiveZoom3(true)
        $('.box-right').addClass('d-none')
        $('.box-left').addClass('d-none')
    }

    return (

        <div className="col-12 px-0 ">
            <Head>
                <title>
                  {text.RonixProductCatalog}
                </title>
                
            </Head>
            {
                isMobileView

                    ?
                    <div className="container wrapper-filip position-relative overflow-hidden">
                        <div class="wrapper-catalog my-5 ">
                            <div class="aspect mb-3">
                                <div class="aspect-inner">
                                    <div className=" mb-5">
                                        <div className="col-3 text-center  menu-catalog-mobile">
                                            <a href={`${staticImages}/${currentlanguageCode}-Catalogue.pdf`} target="_blank">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16H0V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V16H18V16.5C18 17.3284 17.3284 18 16.5 18H3.5C2.67157 18 2 17.3284 2 16.5V16Z" fill="#5E5E5E" />
                                                    <path d="M9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303L15.3033 9.75736C15.5962 9.46447 15.5962 8.98959 15.3033 8.6967C15.0104 8.40381 14.5355 8.40381 14.2426 8.6967L10 12.9393L5.75736 8.6967C5.46447 8.40381 4.98959 8.40381 4.6967 8.6967C4.40381 8.98959 4.40381 9.46447 4.6967 9.75736L9.46967 14.5303ZM9.25 0L9.25 14H10.75L10.75 0H9.25Z" fill="#5E5E5E" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="flipbook" id="flipbook">
                                        {
                                            Children.toArray(
                                                arr.length > 0 ?
                                                    arr?.map(item => {
                                                        return (
                                                            <div className="page" >
                                                                <Link href={`/catalogs/${Page}`}>
                                                                    <a onClick={() => { $('#flipbook').turn('page', item.url); closePopup() }}>
                                                                        {imageExists(item.imgUrl, function (exists) {
                                                                            return (<img className="catalogt-select-image" src={exists ? item.imgUrl : `${internationalAssets}/img/RonixMock.jpg`} />)
                                                                        })}
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        )
                                                    }) : null
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-flex overflow-s-x px-0 mb-3">
                            {
                                Children.toArray(
                                    arrtest.length > 0 ?
                                        arrtest?.map((item, i) => {
                                            return (
                                                <div className="col-6  col-md-4  ">
                                                    <div className=" border-r-4 col-12 px-0 catalog-item-gallery " onClick={(e) => handleitemCatalog(e.target)} >
                                                        {
                                                            item.map(items => {
                                                                return (<Link href={`/catalogs/${items.url}`}>
                                                                    <div className="col-6  p-2">
                                                                        <a onClick={() => { $('#flipbook').turn('page', items.url); closePopup() }}>
                                                                            {imageExists(items.imgUrl, function (exists) {
                                                                                return (<img className="img-fluid lazy" loading="lazy" src={exists ? items.imgUrl : `${internationalAssets}/img/RonixMock.jpg`} />)
                                                                            })}
                                                                            {/* <img  src={items.imgUrl} /> */}
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }) : null
                                )
                            }
                        </div>
                    </div>
                    :
                    <div className="container wrapper-filip position-relative">
                        <div className="col-12 px-0 d-flex equal">
                            <div className="col-2 py-5 px-0">
                                <div className="col-12 aside-catalog bk-grayA py-5">
                                    {
                                        currentlanguageCode == 'ar' ?
                                            <div className="col-12 px-0 d-flex equal bk-white ">
                                                <span className="catalog-next cursor-pointer text-center border-left col-3  d-none d-xl-block d-lg-block" onClick={() => { $('#flipbook').turn('next'); }}>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" width="15" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-2x">
                                                        <path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class="">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="col-6 text-center page-count m-auto font-13">
                                                    {pageOne == 0 || pageOne == undefined ? null : pageOne}{pageOne == 0 || pageOne == undefined || pageTwo == 0 || pageTwo == undefined ? null : ' - '}{pageTwo == 0 || pageTwo == undefined ? null : pageTwo}  / {en}
                                                </span>
                                                <span className="catalog-prev cursor-pointer text-center border-right  col-3  d-none d-xl-block d-lg-block" onClick={() => $('#flipbook').turn('previous')}>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" width="15" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-2x">
                                                        <path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class="">
                                                        </path>
                                                    </svg>
                                                </span>

                                            </div>
                                            :
                                            <div className="col-12 px-0 d-flex equal bk-white ">
                                                <span className="catalog-prev cursor-pointer text-center border-right  col-3  d-none d-xl-block d-lg-block" onClick={() => $('#flipbook').turn('previous')}>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" width="15" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-2x">
                                                        <path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class="">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="col-6 text-center page-count m-auto font-13">
                                                    {pageOne == 0 || pageOne == undefined ? null : pageOne}{pageOne == 0 || pageOne == undefined || pageTwo == 0 || pageTwo == undefined ? null : ' - '}{pageTwo == 0 || pageTwo == undefined ? null : pageTwo}  / {en}
                                                </span>
                                                <span className="catalog-next cursor-pointer text-center border-left col-3  d-none d-xl-block d-lg-block" onClick={() => { $('#flipbook').turn('next'); }}>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" width="15" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-2x">
                                                        <path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class="">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                    }
                                    <div className="menu-catalog   cursor-pointer bk-white col-12 my-3 px-0" onClick={() => openPopup('catalog')}>
                                        <div className="col-6 text-center  ">
                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51898 0.831055C8.32956 0.0176814 6.78272 -0.0958641 5.35875 0.0606166C3.46625 0.270782 1.55625 0.983694 0.36625 1.57847C0.257061 1.63305 0.164469 1.72099 0.0995263 1.83182C0.0345834 1.94264 3.32143e-05 2.07166 0 2.20348V17.3134C2.89525e-05 17.4283 0.0262964 17.5414 0.0763964 17.6422C0.126496 17.7431 0.198827 17.8285 0.286764 17.8907C0.3747 17.9529 0.475431 17.9899 0.579729 17.9982C0.684028 18.0065 0.788559 17.986 0.88375 17.9384C1.98625 17.3889 3.7625 16.7282 5.48375 16.5373C7.23593 16.3432 8.70604 16.6536 9.50022 17.7252L9.50022 0.831055H9.51898ZM10.5002 17.7246C11.2945 16.6534 12.7644 16.3433 14.515 16.5373C16.2375 16.7282 18.015 17.3889 19.1163 17.9384C19.2114 17.986 19.316 18.0065 19.4203 17.9982C19.5246 17.9899 19.6253 17.9529 19.7132 17.8907C19.8012 17.8285 19.8735 17.7431 19.9236 17.6422C19.9737 17.5414 20 17.4283 20 17.3134V2.20348C20 2.07166 19.9654 1.94264 19.9005 1.83182C19.8355 1.72099 19.7429 1.63305 19.6337 1.57847C18.4438 0.983694 16.5338 0.270782 14.6413 0.0606166C13.2172 -0.0970714 11.6704 0.0173888 10.4809 0.831055H10.5002L10.5002 17.7246Z" fill="#5E5E5E" />
                                            </svg>

                                        </div>
                                        <div className="col-6 text-center">
                                            <span className="font-13">{text.Allpage}</span>
                                        </div>
                                    </div>
                                    <a href={`${staticImages}/${currentlanguageCode}-Catalogue.pdf`} target="_blank">
                                        <div className="menu-catalog cursor-pointer bk-white col-12 px-0">
                                            <div className="col-6 text-center cursor-pointer ">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16H0V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V16H18V16.5C18 17.3284 17.3284 18 16.5 18H3.5C2.67157 18 2 17.3284 2 16.5V16Z" fill="#5E5E5E" />
                                                    <path d="M9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303L15.3033 9.75736C15.5962 9.46447 15.5962 8.98959 15.3033 8.6967C15.0104 8.40381 14.5355 8.40381 14.2426 8.6967L10 12.9393L5.75736 8.6967C5.46447 8.40381 4.98959 8.40381 4.6967 8.6967C4.40381 8.98959 4.40381 9.46447 4.6967 9.75736L9.46967 14.5303ZM9.25 0L9.25 14H10.75L10.75 0H9.25Z" fill="#5E5E5E" />
                                                </svg>
                                            </div>
                                            <div className="col-6 text-center c-black">
                                                <span className="font-13">{text.Download}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12  pl-0 pt-3 padding-set-parent">
                                    <div class="row d-block">
                                        <div className="col-4 ">
                                            <button type="button" name="" id="" class={`  all-transition border-r-4 btn-red  bk-red  font-14 c-white px-2 ${activeZoom ? 'active-zoom' : 'border-transparent btn-custom'}`} onClick={(e) => {
                                                $('#flipbook').css({ 'transform': 'scale(1)', 'transition': 'all 0.3s ease' });
                                                handleZoom1()
                                            }}><span className='py-1 px-2 d-inline-block'>1x</span></button>
                                        </div>
                                        <div className="col-4 padding-set">
                                            <button type="button" name="" id="" class={` all-transition border-r-4 btn-red  bk-red font-14 c-white px-2 ${activeZoom2 ? 'active-zoom' : 'border-transparent btn-custom'}`} onClick={(e) => {
                                                $('#flipbook').css({ 'transform': 'scale(1.3)', 'transition': 'none' });
                                                handleZoom2()
                                            }}> <span className='py-1 px-2 d-inline-block'>1.3x</span></button>
                                        </div>
                                        <div className="col-4 text-right">
                                            <button type="button" name="" id="" class={`  all-transition  border-r-4 btn-red  bk-red font-14 c-white px-2 ${activeZoom3 ? 'active-zoom' : 'border-transparent btn-custom'}`} onClick={(e) => {
                                                $('#flipbook').css({ 'transform': 'scale(1.6)', 'transition': 'none' });
                                                handleZoom3()
                                            }}><span className='py-1 px-2 d-inline-block'>1.6x </span></button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="col-10">
                                <div class="wrapper-catalog my-5">
                                    <div class="aspect overflow-hidden">
                                        <div class="aspect-inner ">
                                            <div className="box-left" onClick={() => $('#flipbook').turn('previous')}></div>

                                            <div class="flipbook" id="flipbook">
                                                {
                                                    Children.toArray(
                                                        arr.length > 0 ?
                                                            arr?.map(item => {
                                                                return (
                                                                    <div className="page" >
                                                                        <Link href={`/catalogs/${Page}`}>
                                                                            <a onClick={() => { $('#flipbook').turn('page', item.url); closePopup() }}>
                                                                                {imageExists(item.imgUrl, function (exists) {
                                                                                    return (<img className="catalogt-select-image" loading="lazy" id="ZoomImage" src={exists ? item.imgUrl : `${internationalAssets}/img/RonixMock.jpg`} />)
                                                                                })}
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            }) : null
                                                    )
                                                }
                                            </div>
                                            <div className="box-right" onClick={() => $('#flipbook').turn('next')}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PopUp id={'catalog'} className={'col-10 col-md-8  px-0 '} popupTitle={'Gallery Catalog'}>
                            <div className={'py-5 px-2 col-12 text-center catalog-modal custome-scroll-bar'}>
                                {
                                    Children.toArray(
                                        arrtest.length > 0 ?
                                            arrtest?.map((item, i) => {
                                                return (
                                                    <div className={"col-3   mb-3"}>
                                                        <div className=" border-r-4 col-12 px-0 catalog-item-gallery " onClick={(e) => handleitemCatalog(e.target)} >
                                                            {
                                                                item.map(items => {
                                                                    return (
                                                                        <Link href={`/catalogs/${items.url}`}>
                                                                            <div className="col-6 px-0 ">
                                                                                <div className={`col-12 p-2`}>
                                                                                    <a onClick={() => { $('#flipbook').turn('page', items.url); closePopup() }}>
                                                                                        <img className="img-fluid lazy" loading="lazy" src={items.imgUrl} />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                );


                                            }) : null
                                    )
                                }
                            </div>
                        </PopUp>
                    </div>
            }

        </div >
    )
}

export default CatalogFilip;

export async function getServerSideProps(ctx) {
    let isMobileView = ctx.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) != null ? true : false;
    return {
        props: {

            isMobileView: isMobileView,
        }
    }
}