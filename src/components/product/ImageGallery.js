import { motion } from 'framer-motion';
import $ from 'jquery';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserView, MobileView } from 'react-device-detect';
import { currentlanguageCode } from '../../../next.config';
import Custom500 from '../../../pages/500';
import ImgLoader from '../common/imgLoader/ImgLoader';
import PopUp, { openPopup } from '../common/Popup/PopUp.js';
import { logApi } from '../Services/productService';
import Config, { assetPrefix, internationalAssets } from './../../../next.config';
import WebSiteContext from './../Context/WebSiteContext';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
let easing = [0.175, .1, 0.42, 0.96];
const myLoader = ({ src, height, width, quality }) => {
    return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 100}`
}
const productNameMtion = {
    exit: { x: -30, opacity: 0 },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: easing
        }
    }
}
const productCodeMotion = {
    exit: { x: -30, opacity: 0 },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.5,
            ease: easing
        }
    }
}
const GalleryVariants = {
    exit: { scale: 0.95, opacity: 0, },
    enter: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: easing
        }
    }
};
const favoritShow = {
    exit: { scale: 0, transition: { duration: 0.3, ease: easing } },
    enter: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.7,
            duration: 0.3,
            ease: easing
        }
    }
};
const shareShow = {
    exit: { scale: 0, transition: { duration: 0.3, ease: easing } },
    enter: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.3,
            ease: easing
        }
    }
};
const compareShow = {
    exit: { scale: 0, transition: { duration: 0.3, ease: easing } },
    enter: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1.3,
            duration: 0.3,
            ease: easing
        }
    }
};

const GalleryItemsVariants = {
    exit: { opacity: 0, transition: { duration: 0.5, ease: easing } },
    enter: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: easing
        }
    }
};
const ImageGallery = (props) => {

    const [cookies, setCookie] = useCookies(`compareProductId/${currentlanguageCode}`)
    const Images = props.images;

    const context = useContext(WebSiteContext)
    const product_code = props.productCode;
    const [favoriteStatus, setFavoriteStatus] = useState(props.favoriteStatus);
    const [showImages, setShwoImages] = useState(false)
    const handleImgClick = (img_index) => {
        $('.main-img-item').each(function () {
            if (parseInt($(this).attr('data_index')) === img_index) {
                jquery('.main-img-item').removeClass('show')
                jquery(this).addClass('show')
            }
        })
    }
    const handleImgClickPopup = (img_index) => {
        $('.main-img-item-popup').each(function () {
            if (parseInt($(this).attr('data_index')) === img_index) {
                jquery('.main-img-item-popup').removeClass('show')
                jquery(this).addClass('show')
            }
        })
    }
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
    const router = useRouter()
    try {
        return (
            <motion.div key={product_code} initial="exit" animate="enter" exit="exit" className={'col-12 col-xl-5 px-0' + props.productId}>
                <div>
                    <MobileView>
                        <div className='col-12 px-0 mb-3'>
                            <motion.h3 variants={productNameMtion} className={'m-0 font-25 d-block'}>{props.productName}</motion.h3>
                            <motion.p variants={productCodeMotion} className={'font-19 d-block'}>{props.productCode}</motion.p>
                        </div>
                    </MobileView>
                </div>
                <motion.div variants={GalleryVariants} className={'col-12 col-md-8 offset-md-2 col-xl-12 offset-xl-0 main-img-items border mb-4 px-0'}>
                    {Images.map((ImagesItem, index) => {
                        return <div key={index} data_index={index}
                            className={index === 0 ? 'main-img-item pt-5 col-12 show all-transition' : 'main-img-item pt-5 col-12 all-transition'}>
                            <ImgLoader
                                onLoaded={() => setShwoImages(true)}
                                onTimeout={() => setShwoImages(true)}
                                timeout={0}
                            >
                                <div className='col-12 px-0'>
                                    <Image loader={myLoader} src={Config.productImageUrl + '/' + product_code + '/' + ImagesItem.originalImagUrl} alt={`${ImagesItem.imageAlt}`} width={585} height={585} quality="70" />
                                    {/* <img className={showImages === true ? 'img-fluid  main-img-org ' : null} key={index} src={Config.productImageUrl + '/' + product_code + '/' + ImagesItem.originalImagUrl} alt={`${ImagesItem.imageAlt}`} /> */}
                                    {/* <img className='img-fluid main-img-loading' key={index} src={`${internationalAssets}/img/general-img/mock-img-product-detail.png`} /> */}
                                </div>
                            </ImgLoader>
                        </div>;
                    })}
                    <div className={'action-btn'}>
                        <motion.span variants={favoritShow} onClick={handleFavoriteClick} className={'favorite-product d-inline-block px-1 pb-1 pt-0 cursor-pointer'}>
                            {favoriteStatus ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18.35" viewBox="0 0 20 18.35">
                                    <path id="Path_1705" data-name="Path 1705"
                                        d="M12,21.35l-1.45-1.32C5.4,15.36,context,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z"
                                        transform="translate(-2 -3)" fill="#ed1c24" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="20.008" height="17.647"
                                    viewBox="0 0 20.008 17.647">
                                    <path id="Path_168" data-name="Path 168"
                                        d="M19.66,3.99A5.8,5.8,0,0,0,12,5.09a5.784,5.784,0,0,0-7.66-1.1A5.472,5.472,0,0,0,2,8.28c-.14,3.88,3.3,6.99,8.55,11.76l.1.09a2,2,0,0,0,2.69-.01l.11-.1C18.7,15.26,22.13,12.15,22,8.27a5.468,5.468,0,0,0-2.34-4.28ZM12.1,18.55l-.1.1-.1-.1C7.14,14.24,4,11.39,4,8.5A3.418,3.418,0,0,1,7.5,5a3.909,3.909,0,0,1,3.57,2.36h1.87A3.885,3.885,0,0,1,16.5,5,3.418,3.418,0,0,1,20,8.5C20,11.39,16.86,14.24,12.1,18.55Z"
                                        transform="translate(-1.996 -2.999)" />
                                </svg>

                            }

                        </motion.span>
                        <motion.span variants={shareShow} onClick={() => openPopup('share-box-popup')} className={'share-product d-inline-block px-1 pb-1 pt-0 ml-3 cursor-pointer'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19.92" viewBox="0 0 18 19.92">
                                <path id="Path_170" data-name="Path 170"
                                    d="M18,16.08a2.912,2.912,0,0,0-1.96.77L8.91,12.7A3.274,3.274,0,0,0,9,12a3.274,3.274,0,0,0-.09-.7l7.05-4.11A2.993,2.993,0,1,0,15,5a3.274,3.274,0,0,0,.09.7L8.04,9.81a3,3,0,1,0,0,4.38l7.12,4.16a2.821,2.821,0,0,0-.08.65A2.92,2.92,0,1,0,18,16.08Z"
                                    transform="translate(-3 -2)" />
                            </svg>
                        </motion.span>
                        <motion.span variants={compareShow} className={'compare-product d-none d-xl-inline-block px-1 pb-1 pt-0 ml-3 cursor-pointer'}>
                            <span onClick={(e) => handleCompareProduct(props.productName, props.productId, Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + Images[1].imageUrl)}>
                                {/* <a> */}
                                <svg id="compare_arrows_black_24dp" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <g id="Group_3692" data-name="Group 3692">
                                        <rect id="Rectangle_4559" data-name="Rectangle 4559" width="30" height="30" fill="none" />
                                    </g>
                                    <g id="Group_3695" data-name="Group 3695">
                                        <g id="Group_3694" data-name="Group 3694">
                                            <g id="Group_3693" data-name="Group 3693">
                                                <path id="Path_2515" data-name="Path 2515" d="M9.01,14H2v2H9.01v3L13,15,9.01,11Zm5.98-1V10H22V8H14.99V5L11,9Z" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                {/* </a> */}
                            </span>
                        </motion.span>
                    </div>
                </motion.div>
                <motion.div variants={GalleryItemsVariants} className={'row img-selector-items d-block'}>
                    <div className='col-12 px-0'>
                        <MobileView className='col-12 overflow-s-x col-12 px-2 pb-3'>
                            <div className='col-12 d-flex text-center px-0'>
                                {Images.map((ImagesItem, index) => {
                                    return (
                                        <div key={index} className={'col-5 col-md-2 px-2'}>
                                            <div onClick={() => handleImgClick(index)}
                                                className={'col-12 border px-0 img-selector-item cursor-pointer text-center'}>
                                                <ImgLoader
                                                    onLoaded={() => setShwoImages(true)}
                                                    onTimeout={() => setShwoImages(true)}
                                                    timeout={0}
                                                >
                                                    {/*  <Image loader={myLoader} key={index} src={Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + ImagesItem.imageUrl} alt={`${ImagesItem.imageAlt}`} width={85} height={85} quality="70" /> */}
                                                    {showImages === true ?
                                                        <Image loader={myLoader} className='img-fluid' key={index} width={276} height={276} quality="70"
                                                            src={Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + ImagesItem.imageUrl} alt={`${ImagesItem.imageAlt}`} />
                                                        :
                                                        <div className='small-img-loading col-12 px-0'>
                                                            <Image loader={myLoader} className='img-fluid' key={index} src={`${internationalAssets}/img/general-img/mock-img-product-detail-small.png`} width={53} height={53} quality="70" />
                                                        </div>
                                                    }
                                                </ImgLoader>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </MobileView>
                    </div>

                    <div className='col-12 px-0'>
                        <BrowserView className='col-12 d-flex flex-wrap px-0'>
                            {Images.map((ImagesItem, index) => {
                                if (index < 4) {
                                    if (index < 3) {
                                        return (
                                            <div key={index} className={'col-3'}>
                                                <div onClick={() => handleImgClick(index)}
                                                    className={'col-12 border px-0 img-selector-item cursor-pointer text-center'}>

                                                    <ImgLoader
                                                        onLoaded={() => setShwoImages(true)}
                                                        onTimeout={() => setShwoImages(true)}
                                                        timeout={0}
                                                    >
                                                        {showImages === true ?
                                                            <Image loader={myLoader} key={index} src={Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + ImagesItem.imageUrl} alt={`${ImagesItem.imageAlt}`} width={85} height={85} quality="70" />
                                                            :
                                                            <div className='small-img-loading col-12 px-0'>
                                                                <Image loader={myLoader} className='img-fluid' key={index} src={`${internationalAssets}/img/general-img/mock-img-product-detail-small.png`} alt={`Default Image`} width={85} height={85} quality="70" />
                                                            </div>
                                                        }
                                                    </ImgLoader>
                                                </div>
                                            </div>
                                        );
                                    } else if (index >= 3) {
                                        return (
                                            <div onClick={() => openPopup('img-gallery-popup')} key={index}
                                                className={'col-3 popup-btn last-img'}>
                                                <div
                                                    className={'col-12 border px-0 img-selector-item cursor-pointer text-center'}>


                                                    <ImgLoader
                                                        onLoaded={() => setShwoImages(true)}
                                                        onTimeout={() => setShwoImages(true)}
                                                        timeout={0}
                                                    >
                                                        {showImages === true ?
                                                            <div className='col-12 px-0'>
                                                                {/*  <Image loader={myLoader} src={Config.productImageUrl + '/' + product_code + '/' + ImagesItem.originalImagUrl} alt={`${ImagesItem.imageAlt}`} width={585} height={585} quality="70" /> */}

                                                                <Image loader={myLoader} className='img-fluid' key={index}
                                                                    src={Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + ImagesItem.imageUrl} alt={`${ImagesItem.imageAlt}`} width={85} height={85} quality="70" />
                                                                <span className={'col-12 px-0 text-center font-16 c-white'}>
                                                                    <i className="fa fa-camera font-18 mb-1 d-block"></i>
                                                                    {text.viewallpicture}
                                                                </span>
                                                            </div>
                                                            :
                                                            <div className='small-img-loading col-12 px-0'>
                                                                <Image loader={myLoader} className='img-fluid' key={index} src={`${internationalAssets}/img/general-img/mock-img-product-detail-small.png`} width={85} height={85} quality="70" />
                                                            </div>
                                                        }
                                                    </ImgLoader>
                                                </div>
                                            </div>
                                        );
                                    }
                                } else return false;
                            })}
                        </BrowserView></div>
                </motion.div>
                <PopUp id={'img-gallery-popup'} className={'col-6 mt-5 px-0 img-gallery-popup'} popupTitle={props.productName}>
                    <div className={'py-3 col-12 d-flex flex-wrap'}>
                        <div className={'col-4 px-0 pt-2'}>
                            <div className={Images.length > 10 ? 'col-12 px-2 d-flex flex-wrap img-gallery-items-box-overflow' : 'col-12 px-2 d-flex flex-wrap '}>
                                {Images.map((ImagesItem, index) => {
                                    return (
                                        <div key={index} className={'col-6 pl-0 mb-4'}>
                                            <div onClick={() => handleImgClickPopup(index)}
                                                className={'col-12 border px-0 img-popup-selector-item cursor-pointer text-center'}>
                                                <Image loader={myLoader} className='img-fluid' key={index} width={61.33} height={61.33} quality="70"
                                                    src={Config.productImageUrl + '/' + product_code + '/Gallery-thumb-' + ImagesItem.imageUrl} alt={`${ImagesItem.imageAlt}`} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={'col-8 mt-2 main-popup-img-items px-0'}>
                            {Images.map((ImagesItem, index) => {
                                return <div key={index} data_index={index}
                                    className={index === 0 ? 'main-img-item-popup py-4 border col-12 show all-transition' : 'main-img-item-popup py-4 border col-12 all-transition'}>
                                    <Image loader={myLoader} className={'img-fluid'} key={index} width={585} height={585} quality="70"
                                        src={Config.productImageUrl + '/' + product_code + '/' + ImagesItem.originalImagUrl} alt={`${ImagesItem.imageAlt}`} />
                                </div>;
                            })}
                        </div>
                    </div>
                </PopUp>
                <PopUp id={'share-box-popup'} className={'col-4 px-0 share-box-popup'} popupTitle={'Share this page'}>
                    <div className={'py-3 col-12 text-center'}>
                        <ul className={'col-12 px-0 mt-4 mb-0'}>
                            {props.facebookLink ? <li onClick={() => handleSocialClick(props.facebookLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/facebook.png`} />
                            </li> : null}
                            {/* {props.instagramLink ? <li onClick={() => handleSocialClick(props.instagramLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/instagram.png`} />
                            </li> : null} */}
                            {props.linkedinLink ? <li onClick={() => handleSocialClick(props.linkedinLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/linkedin.png`} />
                            </li> : null}
                            {props.telegramLink ? <li onClick={() => handleSocialClick(props.telegramLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/telegram.png`} />
                            </li> : null}
                            {props.whatsappLink ? <li onClick={() => handleSocialClick(props.whatsappLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/whatsapp.png`} />
                            </li> : null}
                            {/* {props.mailLink ? <li onClick={() => handleSocialClick(props.mailLink)} className={'cursor-pointer d-inline mx-1'}>
                                <img src={`${internationalAssets}/img/icon/mail.png`} />
                            </li> : null} */}
                        </ul>
                        <div style={{ display: 'none' }} className={'col-12 px-0 social-link-content font-13'}>
                            <p id={'myInput'} className={'m-0 py-2'}>null</p>
                        </div>
                        <span onClick={() => handleCopyLink()} className={'cursor-pointer px-4 py-2 mt-4 d-inline-block border font-weight-bold font-13'}>
                            <i className="fa fa-copy mr-1 font-14 "></i>
                            Copy share link</span>
                    </div>
                </PopUp>
            </motion.div>
        );
    } catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt('4'),
                "page": 'imageGallery',
                "permalink": '',
                "action": "Page loading",
                "message": `${error}`,
                "ipAddress": "0",
                "languageCode": currentlanguageCode
            }
            await logApi(logBody)
        }
        registerLogApi()
        return <Custom500 />;
    }

}
export default ImageGallery;