import { assetPrefix, currentlanguageCode, internationalAssets } from '../../../next.config';
import Config, { isRtl } from '../../../next.config';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { motion } from 'framer-motion';
import WebSiteContext from '../Context/WebSiteContext';
import { useRouter } from 'next/router';
import PopUp, { openPopup } from '../common/Popup/PopUp';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
import $ from 'jquery';
import Image from 'next/image';
import { Reveal, Tween } from 'react-gsap';


let easing = [0.30, -0.56, 0.34, 3];
let easing2 = [0.175, .1, 0.42, 0.96];
const favoritShow = {
    exit: { translateX: 30, opacity: 0, transition: { duration: 0.3, ease: easing2 } },
    enter: {
        translateX: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.6,
            ease: easing2
        }
    }
};
const shareShow = {
    exit: { translateX: 30, opacity: 0, transition: { duration: 0.3, ease: easing2 } },
    enter: {
        translateX: 0,
        opacity: 1,
        transition: {
            delay: 1.3,
            duration: 0.6,
            ease: easing2
        }
    }
};
const compareShow = {
    exit: { translateX: 30, opacity: 0, transition: { duration: 0.3, ease: easing2 } },
    enter: {
        translateX: 0,
        opacity: 1,
        transition: {
            delay: 1.6,
            duration: 0.6,
            ease: easing2
        }
    }
};
const textContent = {
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.5, ease: easing } },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: easing
        }
    }
};

const DetaileSection = ({ lngStatus, facebookLink, mailLink, isMobile, instagramLink, whatsappLink, linkedinLink, telegramLink, summery, images, FavoriteStatus, productCode, productName, productId, catalogLink, userManualLink, explodedMapLink }) => {
    const Images = images;

    const [cookies, setCookie] = useCookies(['ronix']);
    const context = useContext(WebSiteContext)
    const router = useRouter();
    const [favoriteStatus, setFavoriteStatus] = useState(FavoriteStatus);

    const handleFavoriteClick = () => {
        setFavoriteStatus(!favoriteStatus);
    }
    const handleSocialClick = (social_link) => {
        $('.social-link-content').slideDown(300).find('p').text(social_link);
    }
    const handleCopyLink = () => {
        let copyText = $('.social-link-content p').text();
        if (copyText !== 'null') {
            navigator.clipboard.writeText(copyText)
        }
        else {
            alert('not select social item')
        }
    }

    useEffect(() => {
        $('.all_unset>div').attr('style', '');
        $('.product_detaile_svg_back_1').addClass('transform_unset');
        $('.product_detaile_svg_back_2').addClass('transform_unset');
        $('.catalog-box').addClass('show');
        $('.modeling-image').addClass('modeling-image-active');
        console.log(Images.filter(p => p.imageType === "2Modeling"));
        console.log("Images.filter(p => p.imageType === Modelin)");
    }, [router.asPath]);
    const handleCompareProduct = (product_name, product_id, product_img) => {

        let currentCompareItem = window.localStorage.getItem('compareProduct');
        let currentCompareItemArray = [];
        if (currentCompareItem === null || currentCompareItem.length === 0) {
            currentCompareItemArray.push({ 'productName': product_name, 'productId': product_id, 'productImg': product_img });
            window.localStorage.setItem('compareProduct', JSON.stringify(currentCompareItemArray));
        }
        else {
            if (JSON.parse(currentCompareItem).length <= 4) {
                if (window.localStorage.getItem('compareProduct').indexOf(product_id) === -1) {
                    currentCompareItemArray = JSON.parse(currentCompareItem);
                    currentCompareItemArray.push({ 'productName': product_name, 'productId': product_id, 'productImg': product_img });
                    window.localStorage.setItem('compareProduct', JSON.stringify(currentCompareItemArray));
                }
            }
            else {
                alert('You are not allowed to re-select ')
            }
        }
        currentCompareItem = JSON.parse(window.localStorage.getItem('compareProduct'));
        let products_id = '';
        for (let i = 0; i < currentCompareItem.length; i++) {
            products_id += currentCompareItem[i].productId + '.';
        }
        setCookie('compareProductId', products_id);
        context.setProductAdded(currentCompareItem)
        router.push('/compare/' + products_id.replaceAll('.', '/'))
    }
    return (
        <motion.div key={productCode} initial="exit" animate="enter" exit="exit" className='col-12 px-0'>
            {isMobile
                ?
                <section className=" w-100 d-block d-lg-flex equal product_detaile-mobile position-relative overflow-hidden">
                    <div className="col-12 col-lg-6 px-0 all_unset modeling-image">


                        <Reveal repeat={true} threshold={0.3} >
                            <Tween from={{ filter: 'grayscale(1)' }} to={{ filter: 'grayscale(0)' }} duration={0.5} ease="easeinout(0.5, 0.1)" >
                                <Image quality={70} width={1366} loading={"eager"} height={1366} className="img-modeling-mobile img-fluid bg-BlackA" src={Images.filter(p => p.imageType === "Modeling").length != 0 ? Config.productImageUrl + '/' + productCode + '/' + Images.filter(p => p.imageType === "Modeling")[0].originalImagUrl : Config.productImageUrl + '/' + productCode + '/' + Images.filter(p => p.imageType === "CoverImage")[0].originalImagUrl} alt={`${Images[0].imageAlt}`} />
                            </Tween>
                        </Reveal>
                    </div>
                    <div className="product_detaile_svg_back_1"><img src={`${assetPrefix}/assets/img/Triangle1.svg`} alt="" /></div>
                    <div className="product_detaile_svg_back_2"><img src={`${assetPrefix}/assets/img/Triangle2.svg`} alt="" /></div>



                    <div className="col-12 col-lg-6">
                        <div className="my-3 ">
                            <span onClick={handleFavoriteClick} className="cursor-pointer">
                                {favoriteStatus ?
                                    <svg width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-2x"><path fill="white" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path></svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="20.008" height="17.647"
                                        viewBox="0 0 20.008 17.647">
                                        <path id="Path_168" data-name="Path 168"
                                            d="M19.66,3.99A5.8,5.8,0,0,0,12,5.09a5.784,5.784,0,0,0-7.66-1.1A5.472,5.472,0,0,0,2,8.28c-.14,3.88,3.3,6.99,8.55,11.76l.1.09a2,2,0,0,0,2.69-.01l.11-.1C18.7,15.26,22.13,12.15,22,8.27a5.468,5.468,0,0,0-2.34-4.28ZM12.1,18.55l-.1.1-.1-.1C7.14,14.24,4,11.39,4,8.5A3.418,3.418,0,0,1,7.5,5a3.909,3.909,0,0,1,3.57,2.36h1.87A3.885,3.885,0,0,1,16.5,5,3.418,3.418,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                                            transform="translate(-1.996 -2.999)" fill="#fff" />
                                    </svg>
                                }
                            </span>
                            <span onClick={() => openPopup('share-box-popup')} className=" cursor-pointer">
                                <svg className="mx-3" id="Group_4475" data-name="Group 4475" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path id="Path_2791" data-name="Path 2791" d="M0,0H24V24H0Z" fill="none" />
                                    <path id="Path_2792" data-name="Path 2792" d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z" fill="#fff" />
                                </svg>
                            </span>

                        </div>
                        <motion.div className="description-product_detail text-white">
                            <h1 className="font-30 product-title">
                                {`${productName} \n 
                                            ${productCode}`}
                            </h1>
                            {/* <p className="font-30 ">{productName}</p>
                                    <p className="font-30 ">{productCode}</p> */}
                            <span className="d-block description custome-scroll-bar-new pr-2" dangerouslySetInnerHTML={{ __html: summery }} />
                        </motion.div>
                        <div className="col-12 mb-5 mt-3 px-0 catalog-box text-white catalob-box">

                            <div className="col-4  content-desription text-center">
                                <a className={'d-block'} target={'_blank'} href={catalogLink !== '' && catalogLink != null ? Config.productImageUrl + '/' + productCode + '/' + catalogLink : '#'}>
                                    <svg id="map_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path id="Path_2799" data-name="Path 2799" d="M0,0H24V24H0Z" fill="none" />
                                        <path id="Path_2800" data-name="Path 2800" d="M20.5,3l-.16.03L15,5.1,9,3,3.36,4.9A.5.5,0,0,0,3,5.38V20.5a.5.5,0,0,0,.5.5l.16-.03L9,18.9,15,21l5.64-1.9a.5.5,0,0,0,.36-.48V3.5A.5.5,0,0,0,20.5,3ZM10,5.47l4,1.4V18.53l-4-1.4ZM5,6.46,8,5.45v11.7L5,18.31ZM19,17.54l-3,1.01V6.86L19,5.7Z" fill="#fff" />
                                    </svg>
                                    <p className="pt-2 text-white font-11">{text.Catalog}</p>
                                </a>
                            </div>
                            <div className="col-4   content-desription text-center">
                                <div className="col-12 border-left border-right">
                                    <a target={userManualLink !== '' ? '_blank' : ''} href={userManualLink !== '' && userManualLink != null ? Config.productImageUrl + '/' + productCode + '/' + userManualLink : '#'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19.5" viewBox="0 0 22 19.5">
                                            <path id="Path_2798" data-name="Path 2798" d="M22.47,5.2A10.571,10.571,0,0,0,21,4.59V16.62A10.288,10.288,0,0,0,17.5,16,10.6,10.6,0,0,0,12,17.58V5.48A10.928,10.928,0,0,0,1.53,5.2.973.973,0,0,0,1,6.08V18.16a.988.988,0,0,0,1,.99,1.065,1.065,0,0,0,.48-.12A8.694,8.694,0,0,1,6.5,18,9.044,9.044,0,0,1,12,20a9.044,9.044,0,0,1,5.5-2,8.582,8.582,0,0,1,4.02,1.04,1.065,1.065,0,0,0,.48.12.994.994,0,0,0,1-.99V6.08A.973.973,0,0,0,22.47,5.2ZM10,16.62a10.189,10.189,0,0,0-7,0V6.71a8.924,8.924,0,0,1,7,.01ZM19,.5l-5,5V15l5-4.5Z" transform="translate(-1 -0.5)" fill="#fff" />
                                        </svg>
                                        <p className="pt-2 text-white font-11">{text.UserManual}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-4  content-desription text-center">
                                <a target={explodedMapLink !== '' ? '_blank' : ''} href={explodedMapLink != '' && explodedMapLink != null ? Config.productImageUrl + '/' + productCode + '/' + explodedMapLink : '#'}>

                                    <svg id="Group_4482" data-name="Group 4482" xmlns="http://www.w3.org/2000/svg" width="25.989" height="24" viewBox="0 0 25.989 24">
                                        <g id="insert_drive_file-24px">
                                            <path id="Path_2801" data-name="Path 2801" d="M0,0H24V24H0Z" fill="none" />
                                            <path id="Path_2802" data-name="Path 2802" d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8ZM6,20V4h7V9h5V20Z" fill="#fff" />
                                            <g id="Ellipse_106" data-name="Ellipse 106" transform="translate(14 8)" fill="#f22d34" stroke="#f22e34" stroke-width="1">
                                                <circle cx="4" cy="4" r="4" stroke="none" />
                                                <circle cx="4" cy="4" r="3.5" fill="none" />
                                            </g>
                                        </g>
                                        <g id="settings-24px" transform="translate(11.001 4.568)">
                                            <path id="Path_2803" data-name="Path 2803" d="M15.418,10.56a5.477,5.477,0,0,0,.046-.728,4.472,4.472,0,0,0-.054-.728l1.572-1.223a.38.38,0,0,0,.093-.472l-1.486-2.57a.378.378,0,0,0-.457-.17l-1.85.743a5.469,5.469,0,0,0-1.254-.728l-.279-1.966a.375.375,0,0,0-.372-.317H8.4a.367.367,0,0,0-.364.317L7.762,4.684a5.589,5.589,0,0,0-1.254.728l-1.85-.743a.37.37,0,0,0-.457.17L2.722,7.409a.352.352,0,0,0,.093.472L4.387,9.1a4.307,4.307,0,0,0-.015,1.455L2.8,11.783a.38.38,0,0,0-.093.472l1.486,2.57A.378.378,0,0,0,4.65,15l1.85-.743a5.469,5.469,0,0,0,1.254.728l.279,1.966a.381.381,0,0,0,.372.317h2.973a.361.361,0,0,0,.364-.317l.279-1.966a5.31,5.31,0,0,0,1.254-.728l1.85.743a.37.37,0,0,0,.457-.17l1.486-2.57a.358.358,0,0,0-.093-.472ZM9.891,12.619a2.787,2.787,0,1,1,2.787-2.787A2.8,2.8,0,0,1,9.891,12.619Z" transform="translate(-2.662 -2.4)" fill="#fff" stroke="#f22d34" stroke-width="1" />
                                        </g>
                                    </svg>
                                    <p className="pt-2 text-white font-11">{text.ExplodedMap}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <PopUp id={'share-box-popup'} className={'col-11 px-0 share-box-popup'} popupTitle={'Share this page'}>
                        <div className={'py-3 col-12 text-center'}>
                            <ul className={'col-12 px-0 mt-4 mb-0'}>
                                {facebookLink ? <li onClick={() => handleSocialClick(facebookLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/facebook.png`} />
                                </li> : null}

                                {linkedinLink ? <li onClick={() => handleSocialClick(linkedinLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/linkedin.png`} />
                                </li> : null}
                                {telegramLink ? <li onClick={() => handleSocialClick(telegramLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/telegram.png`} />
                                </li> : null}
                                {whatsappLink ? <li onClick={() => handleSocialClick(whatsappLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/whatsapp.png`} />
                                </li> : null}

                            </ul>
                            <div style={{ display: 'none' }} className={'col-12 px-0 social-link-content font-13'}>
                                <p id={'myInput'} className={'m-0 py-2'}>{null}</p>
                            </div>
                            <span onClick={() => handleCopyLink()} className={'cursor-pointer px-4 py-2 mt-4 d-inline-block border font-weight-bold font-13'}>
                                <i className="fa fa-copy mr-1 font-14 "></i>
                                Copy share link</span>
                        </div>
                    </PopUp>
                </section>
                :
                <section className=" w-100 d-block d-lg-flex equal product_detaile-mobile position-relative overflow-hidden">
                    <div className=" col-lg-6 px-0 all_unset modeling-image ">



                        <Image placeholder={"empty"} quality={70} width={1366} loading={"eager"} height={1366} className="img-modeling-mobile d-inline img-fluid bg-BlackA" src={Images.filter(p => p.imageType === "Modeling").length != 0 ? Config.productImageUrl + '/' + productCode + '/' + Images.filter(p => p.imageType === "Modeling")[0].originalImagUrl : Config.productImageUrl + '/' + productCode + '/' + Images.filter(p => p.imageType === "CoverImage")[0].originalImagUrl} alt={`${Images[0].imageAlt}`} />

                    </div>
                    <div className="product_detaile_svg_back_1"><img src={`${assetPrefix}/assets/img/Triangle1.svg`} alt="" /></div>
                    <div className="product_detaile_svg_back_2"><img src={`${assetPrefix}/assets/img/Triangle2.svg`} alt="" /></div>

                    <div className={`col-lg-6 descktop_content_detail d-flex align-items-center ${isRtl ? 'pl-5' : 'pr-5'}`}>
                        <div className={`${isRtl ? 'pl-5' : 'pr-5'} col-12 px-0`}>
                            <div className={` ${isRtl ? 'pl-lg-5' : 'pr-lg-5'} `}>
                                <div className="my-3 ">
                                    <motion.span variants={favoritShow} onClick={handleFavoriteClick} className="favorite-product d-inline-block cursor-pointer">
                                        {favoriteStatus ?
                                            <svg width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-2x"><path fill="white" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path></svg>
                                            : <svg xmlns="http://www.w3.org/2000/svg" width="20.008" height="17.647"
                                                viewBox="0 0 20.008 17.647">
                                                <path id="Path_168" data-name="Path 168"
                                                    d="M19.66,3.99A5.8,5.8,0,0,0,12,5.09a5.784,5.784,0,0,0-7.66-1.1A5.472,5.472,0,0,0,2,8.28c-.14,3.88,3.3,6.99,8.55,11.76l.1.09a2,2,0,0,0,2.69-.01l.11-.1C18.7,15.26,22.13,12.15,22,8.27a5.468,5.468,0,0,0-2.34-4.28ZM12.1,18.55l-.1.1-.1-.1C7.14,14.24,4,11.39,4,8.5A3.418,3.418,0,0,1,7.5,5a3.909,3.909,0,0,1,3.57,2.36h1.87A3.885,3.885,0,0,1,16.5,5,3.418,3.418,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                                                    transform="translate(-1.996 -2.999)" fill="#fff" />
                                            </svg>
                                        }
                                    </motion.span>
                                    <motion.span variants={shareShow} onClick={() => openPopup('share-box-popup')} className="d-inline-block cursor-pointer">
                                        <svg className="mx-3" id="Group_4475" data-name="Group 4475" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path id="Path_2791" data-name="Path 2791" d="M0,0H24V24H0Z" fill="none" />
                                            <path id="Path_2792" data-name="Path 2792" d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z" fill="#fff" />
                                        </svg>
                                    </motion.span>
                                    <motion.span variants={compareShow} className="d-inline-block cursor-pointer" onClick={(e) => handleCompareProduct(productName, productId, Config.productImageUrl + '/' + productCode + '/Gallery-thumb-' + Images[1]?.imageUrl)}>
                                        <svg id="Group_3694" data-name="Group 3694" xmlns="http://www.w3.org/2000/svg" width="26.372" height="18.461" viewBox="0 0 26.372 18.461">
                                            <g id="Group_3693" data-name="Group 3693">
                                                <path id="Path_2515" data-name="Path 2515" d="M11.244,16.868H2V19.5h9.244v3.956L16.5,18.186l-5.261-5.274Zm7.885-1.319V11.593h9.244V8.956H19.129V5l-5.261,5.274Z" transform="translate(-2 -5)" fill="#fff" />
                                            </g>
                                        </svg>
                                    </motion.span>
                                </div>
                                <motion.div variants={textContent} className="description-product_detail text-white">
                                    <h1 className="font-30 product-title">
                                        {`${productName} \n 
                                            ${productCode}`}
                                    </h1>
                                    {/* <p className="font-30 "></p>
                                            <p className="font-30 "></p> */}
                                    <span className={"d-block description custome-scroll-bar-new pr-2"} dangerouslySetInnerHTML={{ __html: summery }} />
                                </motion.div>
                                <div className="col-12 mb-5 mt-3 px-0 catalog-box text-white">

                                    <div className="col-4  content-desription text-center">
                                        <a className={'d-block'} target={'_blank'} href={catalogLink !== '' && catalogLink != null ? Config.productImageUrl + '/' + productCode + '/' + catalogLink : '#'}>
                                            <svg id="map_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path id="Path_2799" data-name="Path 2799" d="M0,0H24V24H0Z" fill="none" />
                                                <path id="Path_2800" data-name="Path 2800" d="M20.5,3l-.16.03L15,5.1,9,3,3.36,4.9A.5.5,0,0,0,3,5.38V20.5a.5.5,0,0,0,.5.5l.16-.03L9,18.9,15,21l5.64-1.9a.5.5,0,0,0,.36-.48V3.5A.5.5,0,0,0,20.5,3ZM10,5.47l4,1.4V18.53l-4-1.4ZM5,6.46,8,5.45v11.7L5,18.31ZM19,17.54l-3,1.01V6.86L19,5.7Z" fill="#fff" />
                                            </svg>
                                            <p className="pt-2 text-white font-13 mb-0">{text.Catalog}</p>
                                        </a>
                                    </div>
                                    <div className="col-4   content-desription text-center">
                                        <div className="col-12 border-left border-right">
                                            <a target={userManualLink !== '' ? '_blank' : ''} href={userManualLink !== '' && userManualLink != null ? Config.productImageUrl + '/' + productCode + '/' + userManualLink : '#'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19.5" viewBox="0 0 22 19.5">
                                                    <path id="Path_2798" data-name="Path 2798" d="M22.47,5.2A10.571,10.571,0,0,0,21,4.59V16.62A10.288,10.288,0,0,0,17.5,16,10.6,10.6,0,0,0,12,17.58V5.48A10.928,10.928,0,0,0,1.53,5.2.973.973,0,0,0,1,6.08V18.16a.988.988,0,0,0,1,.99,1.065,1.065,0,0,0,.48-.12A8.694,8.694,0,0,1,6.5,18,9.044,9.044,0,0,1,12,20a9.044,9.044,0,0,1,5.5-2,8.582,8.582,0,0,1,4.02,1.04,1.065,1.065,0,0,0,.48.12.994.994,0,0,0,1-.99V6.08A.973.973,0,0,0,22.47,5.2ZM10,16.62a10.189,10.189,0,0,0-7,0V6.71a8.924,8.924,0,0,1,7,.01ZM19,.5l-5,5V15l5-4.5Z" transform="translate(-1 -0.5)" fill="#fff" />
                                                </svg>
                                                <p className="pt-2 text-white font-13 mb-0">{text.UserManual}</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-4  content-desription text-center">
                                        <a target={explodedMapLink !== '' ? '_blank' : ''} href={explodedMapLink != '' && explodedMapLink != null ? Config.productImageUrl + '/' + productCode + '/' + explodedMapLink : '#'}>

                                            <svg id="Group_4482" data-name="Group 4482" xmlns="http://www.w3.org/2000/svg" width="25.989" height="24" viewBox="0 0 25.989 24">
                                                <g id="insert_drive_file-24px">
                                                    <path id="Path_2801" data-name="Path 2801" d="M0,0H24V24H0Z" fill="none" />
                                                    <path id="Path_2802" data-name="Path 2802" d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8ZM6,20V4h7V9h5V20Z" fill="#fff" />
                                                    <g id="Ellipse_106" data-name="Ellipse 106" transform="translate(14 8)" fill="#f22d34" stroke="#f22e34" stroke-width="1">
                                                        <circle cx="4" cy="4" r="4" stroke="none" />
                                                        <circle cx="4" cy="4" r="3.5" fill="none" />
                                                    </g>
                                                </g>
                                                <g id="settings-24px" transform="translate(11.001 4.568)">
                                                    <path id="Path_2803" data-name="Path 2803" d="M15.418,10.56a5.477,5.477,0,0,0,.046-.728,4.472,4.472,0,0,0-.054-.728l1.572-1.223a.38.38,0,0,0,.093-.472l-1.486-2.57a.378.378,0,0,0-.457-.17l-1.85.743a5.469,5.469,0,0,0-1.254-.728l-.279-1.966a.375.375,0,0,0-.372-.317H8.4a.367.367,0,0,0-.364.317L7.762,4.684a5.589,5.589,0,0,0-1.254.728l-1.85-.743a.37.37,0,0,0-.457.17L2.722,7.409a.352.352,0,0,0,.093.472L4.387,9.1a4.307,4.307,0,0,0-.015,1.455L2.8,11.783a.38.38,0,0,0-.093.472l1.486,2.57A.378.378,0,0,0,4.65,15l1.85-.743a5.469,5.469,0,0,0,1.254.728l.279,1.966a.381.381,0,0,0,.372.317h2.973a.361.361,0,0,0,.364-.317l.279-1.966a5.31,5.31,0,0,0,1.254-.728l1.85.743a.37.37,0,0,0,.457-.17l1.486-2.57a.358.358,0,0,0-.093-.472ZM9.891,12.619a2.787,2.787,0,1,1,2.787-2.787A2.8,2.8,0,0,1,9.891,12.619Z" transform="translate(-2.662 -2.4)" fill="#fff" stroke="#f22d34" stroke-width="1" />
                                                </g>
                                            </svg>
                                            <p className="pt-2 text-white font-13 mb-0">{text.ExplodedMap}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PopUp id={'share-box-popup'} className={'col-4 px-0 share-box-popup'} popupTitle={'Share this page'}>
                        <div className={'py-3 col-12 text-center'}>
                            <ul className={'col-12 px-0 mt-4 mb-0'}>
                                {facebookLink ? <li onClick={() => handleSocialClick(facebookLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/facebook.png`} />
                                </li> : null}

                                {linkedinLink ? <li onClick={() => handleSocialClick(linkedinLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/linkedin.png`} />
                                </li> : null}
                                {telegramLink ? <li onClick={() => handleSocialClick(telegramLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/telegram.png`} />
                                </li> : null}
                                {whatsappLink ? <li onClick={() => handleSocialClick(whatsappLink)} className={'cursor-pointer d-inline mx-1'}>
                                    <img src={`${internationalAssets}/img/icon/whatsapp.png`} />
                                </li> : null}

                            </ul>
                            <div style={{ display: 'none' }} className={'col-12 px-0 social-link-content font-13'}>
                                <p id={'myInput'} className={'m-0 py-2'}>null</p>
                            </div>
                            <span onClick={() => handleCopyLink()} className={'cursor-pointer px-4 py-2 mt-4 d-inline-block border font-weight-bold font-13'}>
                                <i className="fa fa-copy mr-1 font-14 "></i>
                                Copy share link</span>
                        </div>
                    </PopUp>
                </section>
            }
        </motion.div>
    )
}
export default DetaileSection;