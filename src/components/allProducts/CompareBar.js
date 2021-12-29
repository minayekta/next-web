import Reatc, { useEffect, useContext, useState } from 'react';
import WebSiteContext from '../../../src/components/Context/WebSiteContext';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import { assetPrefix, currentlanguageCode } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const CompareBar = () => {
    const context = useContext(WebSiteContext);
    const [product, setProduct] = useState()
    let [cookies, setCookie] = useCookies('compareProductId')
    useEffect(() => {
        let currentCompareItem = window.localStorage.getItem(`compareProduct/${currentlanguageCode}`);
        context.setProductAdded(JSON.parse(currentCompareItem));
    }, []);
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const addToComaprePage = () => {
        let productId = getCookie(`compareProductId/${currentlanguageCode}`);
        // console.log( getCookie("compareProductId"))
        router.push('/compare/' + productId.replaceAll('.', '/'));
    }
    const handlRemoveall = () => {
        window.localStorage.removeItem(`compareProduct/${currentlanguageCode}`)
        setCookie(`compareProductId/${currentlanguageCode}`, '', { path: '/ebdas', sameSite: true })
        context.setProductAdded(null);
    }


    const handlRemoveItem = (id) => {
        context.producetAdded.map((item, index) => {
            if (item.productId === id) {
                setProduct(!product)
                // context.producetAdded.splice(index , 1);
                let productCompareList = context.producetAdded;
                productCompareList.splice(index, 1)
                localStorage.setItem(`compareProduct/${currentlanguageCode}`, JSON.stringify(productCompareList))
                context.setProductAdded(productCompareList);
                if (productCompareList.length === 0) {
                    localStorage.removeItem('compareProduct');
                    context.setProductAdded(null)
                    setCookie(`compareProductId/${currentlanguageCode}`, '', { path: '/', sameSite: true })
                }
                else {
                    let currentCompareItem = JSON.parse(window.localStorage.getItem(`compareProduct/${currentlanguageCode}`));
                    let products_id = '';
                    for (let i = 0; i < currentCompareItem.length; i++) {
                        products_id += currentCompareItem[i].productId + '.';
                    }
                    setCookie(`compareProductId/${currentlanguageCode}`, products_id, { path: '/', sameSite: true });
                    context.setProductAdded(currentCompareItem)
                }

            }
        })
    }

    const router = useRouter();
    return (
        <div className='compare-bar d-none d-xl-block col-12 px-0'>
            {context.producetAdded !== null && context.producetAdded.length != 0 ? <div className='container'>
                <div className='col-12 px-0 py-2 d-flex flex-wrap'>
                    <div className='col-10 px-0 d-flex flex-wrap'>

                        <div className='row w-100 px-2 item-box d-flex flex-wrap'>
                            {context.producetAdded.map((item, index) => {
                                return (<div className='py-2' key={index}>
                                    <div className='col-12 px-0 d-flex equal flex-wrap bk-white'>
                                        <div className='img-box col-3 text-center px-0'>
                                            <img className='img-fluid' src={item.productImg} alt={item.productName} />
                                        </div>
                                        <div className='col-8 pt-2 px-0'>
                                            <p className='c-grayD font-12'>{item.productName}</p>
                                        </div>

                                        <div onClick={() => handlRemoveItem(item.productId)} className='col-1 all-transition text-center delete-item px-0 bk-grayA pt-2'>
                                            <svg width='12px' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10 fa-3x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" className="c-grayD all-transition"></path></svg>
                                        </div>
                                    </div>
                                </div>)
                            })}
                            <div className='conut-item py-2 d-flex align-items-center'>
                                <span className='font-12 pl-4 c-grayA'>
                                    (<span className='px-1'>{context.producetAdded.length} / 4</span>)
                                </span>
                                {context.producetAdded.length > 1 ?
                                    <span onClick={() => handlRemoveall()} className='pl-5 font-12 cursor-pointer c-grayA'>{text.ClearAll}</span>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className='col-2 cursor-pointer px-0 compare-link d-flex align-items-center text-right flex-row-reverse'>
                        <span onClick={() => addToComaprePage()} className='px-4 py-2 font-12 c-grayD bk-white'>
                            {text.CompareList}
                        </span>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}
export default CompareBar;