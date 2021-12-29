import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { currentlanguageCode } from '../../next.config';
import Breadcrumb from '../../src/components/common/Breadcrumb';
import { ReplaceString } from '../../src/components/Services/UtilityService';
import Custom404 from '../404';
import Config, { assetPrefix, isRtl } from './../../next.config';
import WebSiteContext from './../../src/components/Context/WebSiteContext';
import { CompareProduct, logApi } from './../../src/components/Services/productService';
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');
const Compare = ({ compareItem }) => {
    const [tableContent, setTableContent] = useState([])
    const context = useContext(WebSiteContext)
    const [cookies, setCookie] = useCookies('compareProductId', ['ronix'])
    const [product, setProduct] = useState();
    useEffect(() => {
        let table_content = [];
        let count_row = compareItem.productSpecs[0].specs.length;
        let count_product = compareItem.productSpecs.length;
        for (let i = 0; i < count_row; i++) {
            table_content.push({ row_content: [], row_title: '' })
            for (let j = 0; j < count_product; j++) {
                table_content[i].row_content.push({ 'row_value': compareItem.productSpecs[j].specs[i].value })
                table_content[i].row_title = compareItem.productSpecs[j].specs[i].title;
            }
        }
        setTableContent(table_content);
    }, [context.producetAdded])
    const handlRemoveItem = (id) => {
        let new_array = [];
        let new_id = '';
        if (context.producetAdded.length > 1) {
            context.producetAdded.map((item => {
                if (item.productId !== id) {
                    new_array.push(item);
                    new_id += item.productId + '.'
                }
            }))
            context.setProductAdded(new_array);
            window.localStorage.setItem(`compareProduct/${currentlanguageCode}`, JSON.stringify(new_array));
            setCookie(`compareProductId/${currentlanguageCode}`, new_id, { path: '/', sameSite: true });
            router.push(assetPrefix + '/compare/' + new_id.replaceAll('.', '/'));
        }
        else {
            context.setProductAdded(null)
            window.localStorage.removeItem(`compareProduct/${currentlanguageCode}`);
            setCookie(`compareProductId/${currentlanguageCode}`, '', { path: '/', sameSite: true })
            router.push(assetPrefix + '/all-products');
        }
    }
    const router = useRouter()
    const getSiteContent = () => {
        try {
            return (
                <div className='container d-none d-xl-block compare-page'>
                    <Breadcrumb firstItem={{ title: text.AllProducts, link: `${assetPrefix}/all-products` }} secondItem={{ title: text.CompareList, link: assetPrefix + '/compare/' + cookies.compareProductId }} />
                    <div className='col-12 bk-white py-5 mb-4'>
                        <div className='col-10 px-0 offset-1'>
                            <div className='title-page bk-grayA text-center py-2'>
                                <h3 className='font-22 m-0'>{text.CompareList}</h3>
                            </div>
                            <div className='col-12 px-0 mt-3 d-flex flex-wrap equal'>
                                {compareItem.products.length < 4 ? <Link href={`${assetPrefix}/all-products`}>
                                    <a className='col-2 px-0 bk-red cursor-pointer d-flex align-items-center'>
                                        <span className='col-12 px- text-center'>
                                            <svg width='40px' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-plus fa-w-12 fa-3x"><path fill="#fff" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" className=""></path></svg>
                                            <p className={'mt-1 c-white font-22'}>{text.AddProduct}</p>
                                        </span>
                                    </a>
                                </Link> : <div className='col-2 px-0 bk-grayA d-flex align-items-center'>
                                    <span className='col-12 px- text-center'>
                                        <svg width='40px' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-plus fa-w-12 fa-3x"><path fill="#eaeaea" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" className=""></path></svg>
                                        <p className={'mt-1 c-grayB font-22 cursor-default'}>{text.AddProduct}</p>
                                    </span>
                                </div>}
                                <div className={'pr-0 pl-2 col-10'}>
                                    <div className='col-12 px-0 product-items d-flex flex-wrap px-0 border bk-grayA'>
                                        {compareItem.products.map((item, index) => {
                                            return (
                                                <div className='col-3 px-0 py-2' >
                                                    <span id={item.id} onClick={() => handlRemoveItem(item.id)} className='cursor-pointer delete-product col-12'>
                                                        <svg width='15px' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10 fa-3x"><path fill="gray" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" className=""></path></svg>
                                                    </span>
                                                    <Link href={`/product/[productid]`} as={`/product/` + item.permalink}>
                                                        <a key={index} className='col-12 px-0'>
                                                            <div className='col-12 px-0 text-center product-img bk-grayA'>
                                                                <img src={Config.productImageUrl + '/' + item.code + '/Gallery-thumb-' + item.coverImageUrl} />
                                                            </div>
                                                            <div className='col-12 product-name'>
                                                                <p className='font-14 mb-0 c-black font-weight-bold'>{item.title}</p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className='col-12 px-0 mt-2'>
                                    {tableContent.map((item, index) => {
                                        return (
                                            <div className='col-12 px-0 d-flex flex-wrap'>
                                                <div className='col-2 px-0 mb-1'>
                                                    <div className={`col-12 px-0 h-100 font-weight-bold font-14 border px-2 py-2 ${isRtl ? 'text-right' : ''}`} key={index}>{item.row_title}</div>
                                                </div>
                                                <div className='col-10 pr-0 pl-2'>

                                                    <div className='col-12 px-0 border d-flex flex-wrap mb-1'>
                                                        {item.row_content.map((item_row_content, index) => {
                                                            return (
                                                                <div className={'col-3 px-0 font-14 px-2 py-2 bk-grayA text-center'} key={index}>
                                                                    <span className='cursor-default'>{item_row_content.row_value === null ? '---' : item_row_content.row_value}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
        }
        catch (error) {
            const registerLogApi = async () => {
                const logBody = {
                    "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                    "environment": parseInt('4'),
                    "page": 'compare',
                    "permalink": compareItem,
                    "action": "Page loading",
                    "message": `${error}`,
                    "ipAddress": "0",
                    "languageCode": currentlanguageCode
                }
                await logApi(logBody)
            }
            registerLogApi()
            return (<Custom404 />)
        }
    }
    let siteContent = getSiteContent();
    return (
        siteContent
    );
}
export default Compare;

export async function getServerSideProps(ctx) {
    const { ronix } = ctx.req.cookies;
    const id_array = ctx.params.compare;
    let body = []
    for (let i = 0; i < id_array.length; i++) {
        body.push({ 'id': +id_array[i] })
    }
    let res;
    try {
        console.log(body);
        res = await CompareProduct(body);
        console.log(res);
    }
    catch (error) {
        console.log(error);
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'compare',
            "permalink": res.data.response,
            "action": "/Product/CompareProducts",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    return {
        props: {
            compareItem: res == null ? [] : res.data.response,
        }
    }
}