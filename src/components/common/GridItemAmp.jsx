
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { currentlanguageCode, internationalAssets, productImageUrl } from '../../../next.config';
import ImgLoader from './../../components/common/imgLoader/ImgLoader';
import WebSiteContext from './../Context/WebSiteContext';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
var imageExists = require('image-exists');
const GriditemAmp = ({ classnames, item, id, gsap_y }) => {
    const context = useContext(WebSiteContext)
    const [SrcValide, setSrcValide] = useState();
    const [showImages, setShwoImages] = useState(false)

    useEffect(() => {

        if (id > 7) {
            let start_animation = id * 50;
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#" + `griditem-${id + 1}`,
                    start: start_animation,
                }
            });
            tl.addLabel("start")
                .from("#" + `griditem-${id + 1}`, { opacity: 0, y: 100 })
                .to("#" + `griditem-${id + 1}`, { opacity: 1, y: 0 })
                .addLabel("end");
        }

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
        setCookie(`compareProductId/${currentlanguageCode}`, products_id, { path: '/' ,sameSite:true});
        context.setProductAdded(currentCompareItem)

    }


    return (

        <div id={`griditem-${gsap_y + 1}`} className={`ampProductContainer mr-4`}>

            <div className=''>
                <div className="">

                    <Link  href={`/product/${item.productAttributes[0].permalink}`}>

                        <a className="">
                            <ImgLoader
                                onLoaded={() => setShwoImages(true)}
                                onTimeout={() => setShwoImages(true)}
                                timeout={0}
                            >
                                {/* {showImages===true?:} */}
                                <div className=''>
                                    <amp-img width="309" height="238" src={`${productImageUrl}/${item.code}/search-thumb-${item.coverImageUrl}`} alt={`${item.coverImageAlt}`} />
                                    {/* <amp-img width="160" height="250" src={`${internationalAssets}/img/general-img/mock-img-gridl.png`} /> */}
                                </div>
                            </ImgLoader>


                        </a>
                    </Link>
                </div>
                <Link href={`/product/${item.productAttributes[0].permalink}`}>
                    <a>
                        {item.productAttributes[0].title}

                    </a>
                </Link>
                <p>{SrcValide}</p>
                {/* <div className="d-flex justify-content-around griditem-price">
    <span>Price</span>
    <span>1299.95$</span>
</div>
<button className="btn griditem-btn">View product</button> */}
            </div>
        </div>

    )
}
export default GriditemAmp;
