import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { assetPrefix, currentlanguageCode, internationalAssets, productImageUrl } from '../../../next.config';
import ImgLoader from './../../components/common/imgLoader/ImgLoader';
import WebSiteContext from './../Context/WebSiteContext';

var { text } = require('../translate-files/' + currentlanguageCode + '.json');
var imageExists = require('image-exists');
const Griditem = ({ classnames, item, id, gsap_y, isTag }) => {
    const context = useContext(WebSiteContext)
    const [SrcValide, setSrcValide] = useState();
    const [showImages, setShwoImages] = useState(false)
    const myLoader = ({ src, height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&h=${height}&q=${quality || 75}`
    }
    useEffect(() => {
        // if (id > 7) {
        //     let start_animation = id * 50;
        //     let tl = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: "#" + `griditem-${id + 1}`,
        //             start: start_animation,
        //         }
        //     });
        //     tl.addLabel("start")
        //         .from("#" + `griditem-${id + 1}`, { opacity: 0, y: 100 })
        //         .to("#" + `griditem-${id + 1}`, { opacity: 1, y: 0 })
        //         .addLabel("end");
        // }

        var src = `${productImageUrl}/${item.code}/search-thumb-${item.coverImageUrl}`;
        imageExists(src, function (exists) {
            if (exists) {
                setSrcValide(src)
            }
            else {
                src = `${internationalAssets}/img/RonixMock.jpg`;
                setSrcValide(src)
            }
        });
    }, [item])
    useEffect(() => {
        console.log(1);
    }, [SrcValide]);

    const [cookies, setCookie] = useCookies(`compareProductId/${currentlanguageCode}`, '', { path: '/' });
    const handleCompareProduct = (product_name, product_id, product_img) => {
        let currentCompareItem = window.localStorage.getItem(`compareProduct/${currentlanguageCode}`);
        let currentCompareItemArray = [];
        if (currentCompareItem === null || currentCompareItem.length === 0) {
            currentCompareItemArray.push({ 'productName': product_name, 'productId': product_id, 'productImg': product_img });
            window.localStorage.setItem(`compareProduct/${currentlanguageCode}`, JSON.stringify(currentCompareItemArray));
        }
        else {
            if (JSON.parse(currentCompareItem).length < 4) {
                if (window.localStorage.getItem(`compareProduct/${currentlanguageCode}`).indexOf(product_id) === -1) {
                    currentCompareItemArray = JSON.parse(currentCompareItem);
                    currentCompareItemArray.push({ 'productName': product_name, 'productId': product_id, 'productImg': product_img });
                    window.localStorage.setItem(`compareProduct/${currentlanguageCode}`, JSON.stringify(currentCompareItemArray));
                }
                else {
                    alert(text.CompareAlert2)
                }
            }
            else {
                alert(text.CompareAlert1)
            }
        }
        currentCompareItem = JSON.parse(window.localStorage.getItem(`compareProduct/${currentlanguageCode}`));
        let products_id = '';
        for (let i = 0; i < currentCompareItem.length; i++) {
            products_id += currentCompareItem[i].productId + '.';
        }
        setCookie(`compareProductId/${currentlanguageCode}`, products_id, { path: '/', sameSite: true });
        context.setProductAdded(currentCompareItem)

    }


    return (
        <div id={`griditem-${gsap_y + 1}`} className={`griditem  ${classnames === '' ? '' : classnames} text-dark`}>

            <div className='col-12 hover_item griditem-content my-3 px-0 '>
                <div className="col-md-12">
                    <div className='badge-cart col-12 px-0 text-left'>

                        <span className='px-2 cursor-pointer d-none d-xl-inline compare-badge' onClick={(e) => `${isTag ? handleCompareProduct(item.title, item.id, SrcValide) : handleCompareProduct(item.productAttributes[0].title, id, SrcValide)}`}>
                            <svg id="compare_arrows_black_24dp" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <g id="Group_3692" data-name="Group 3692">
                                    <rect id="Rectangle_4559" data-name="Rectangle 4559" width="30" height="30" fill="none" />
                                </g>
                                <g className='c-red' id="Group_3695" data-name="Group 3695">
                                    <g id="Group_3694" data-name="Group 3694">
                                        <g id="Group_3693" data-name="Group 3693">
                                            <path id="Path_2515" data-name="Path 2515" d="M9.01,14H2v2H9.01v3L13,15,9.01,11Zm5.98-1V10H22V8H14.99V5L11,9Z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>

                    </div>
                    <Link href={`${isTag ? `/product/${item.permalink}` : `/product/${item.productAttributes[0].permalink}`}`}>

                        <a className="griditem-image col-12 px-0 ">

                            <ImgLoader
                                onLoaded={() => setShwoImages(true)}
                                onTimeout={() => setShwoImages(true)}
                                timeout={0}
                            >
                                {/* {showImages===true?:} */}
                                <div className='col-12 px-0'>
                                    <div className='col-12 px-0 text-center'>

                                        <Image loader={myLoader} className={showImages === false ? 'mw-100 griditem-margin' : 'show-product-img mw-100 griditem-margin'} src={SrcValide ? SrcValide : `${internationalAssets}/img/general-img/mock-img-gridl.png`} alt={`${item.coverImageAlt}`} width={238} height={238} quality={100} />
                                        {/* <img className={'img-fluid'} src={`${internationalAssets}/img/general-img/mock-img-gridl.png`} /> */}

                                    </div>
                                    <span className={`col-12 px-0 font-weight-bold font-13 pb-2 c-grayC `}>Code:{item.code}</span>
                                </div>
                            </ImgLoader>


                        </a>
                    </Link>
                </div>
                <Link href={`${isTag ? `/product/${item.permalink}` : `/product/${item.productAttributes[0].permalink}`}`}>
                    <a className={`griditem-title-product all-transition c-grayD col-12 d-block `} >
                        {isTag ? item.title : item.productAttributes[0].title}

                    </a>
                </Link>
                {/* <div className="d-flex justify-content-around griditem-price">
            <span>Price</span>
            <span>1299.95$</span>
        </div>
        <button className="btn griditem-btn">View product</button> */}
            </div>
        </div>
    )
}
export default Griditem;