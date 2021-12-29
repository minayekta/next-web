import loadable from '@loadable/component';
import $ from 'jquery';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Scrollbars from 'react-custom-scrollbars';
import { BrowserView, MobileView } from 'react-device-detect';
import { Reveal, Tween } from 'react-gsap';
import { imageAddress } from '../../next.config';
import Breadcrumb from '../../src/components/common/Breadcrumb';
import FaqBoxAccordion from '../../src/components/common/FaqBoxAccordion';
import { GetFAQ, logApi } from '../../src/components/Services/productService';
import { MakeBreadCrumbScript, ReplaceString } from '../../src/components/Services/UtilityService';
const Custom404 = loadable(() => import('../404'));
const Custom500 = loadable(() => import('../500'));



export default function faq({ FAQContent, breadCrumbScripts }) {

    const [Show, setShow] = useState(false)
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const router = useRouter()
    const [cookies, setCookies] = useCookies(['ronix'])
    const filtersDefault = [
        { label: "product", isChecked: true },
        { label: "register", isChecked: false },
        { label: "order", isChecked: false },
        { label: "delivery", isChecked: false },
        { label: "reject", isChecked: false },
        { label: "other", isChecked: false }
    ];
    // const [filters, updateFilters] = useState(filtersDefault);
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState('*');

    const handelshow = () => {
        setShow(!Show)
    }


    const dataJobCategory = {
        "headerTitle": "",
        "type": 'jobCategory'
        , "items":
            [{
                "title": 'منظور شما از استاندارد رونیکس که روی بسته ها لحاظ می کنید چیست ؟',
                "children": [{
                    "title": "نجاری 32"
                    , "productCount": '2'

                },
                {
                    "title": "نجاری 2"
                    , "productCount": '6'

                },
                {
                    "title": "نجاری 3"
                    , "productCount": '5'

                },
                {
                    "title": "نجاری 4"
                    , "productCount": '4'

                },
                {
                    "title": "نجاری 5"
                    , "productCount": '2'

                },
                ]
            }

            ]
    }

    useEffect(() => {


        setIsotope(
            new Isotope(".filter-container", {
                itemSelector: ".filter-item",
                layoutMode: "vertical",
                filter: function () {
                    $(".faq-input-search-question").on("keyup", function () {
                        var value = $(this).val().toLowerCase();
                        $(".faq-box-question-item").filter(function () {
                            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                        });
                    });
                }
            })
        );



    }, []);
    useEffect(() => {
        if (isotope) {
            filterKey === "*"
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filterKey}` });


        }
    }, [isotope, filterKey]);
    try {
        return (
            <Fragment>
                <Head>
                    <title>
                        سوالات متداول درباره محصولات و برند رونیکس
                    </title>
                    <meta name="description" content="شما می توانید در این صفحه سوالات معمولی که برای کاربران رونیکس پیش می آید را مطالعه نمایید و  پاسخ خود را دریافت نمایید"></meta>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbScripts) }}></script>
                </Head>
                <div className="col-12 bk-white px-0">
                    <div className="container m-auto  mt-4 ">
                        <div>
                            <BrowserView >
                                <div className="col-12 d-flex px-0">
                                    <Breadcrumb firstItem={{ title: "سوالات متداول", link: `/faq` }} />
                                </div>
                                <div className="col-12 px-0">
                                    <div className="col-md-12 p-0 mb-3">
                                        <img alt='سوالات متداول کاربران رونیکس' title='مرکز تماس رونیکس' src={`${imageAddress}/HeaderImageFAQ.png`} />
                                    </div>

                                    <Reveal threshold={.1}>
                                        <Tween from={{ opacity: '0', transform: 'translateY(200px)' }} to={{ opacity: '1', transform: 'translateY(0px)' }} stagger={.2} duration={1} ease="easein(.2, 0.1)">
                                            <h1 className='bk-grayA mb-0 font-16 col-12 text-right py-4'>سوالات متداول شما</h1>
                                        </Tween>
                                    </Reveal>
                                    <div className="col-12 d-flex equal px-0">
                                        <div className="col-md-6 text-right py-3 px-0">
                                            <img alt='سوالات متداول کاربران رونیکس' title='مرکز تماس رونیکس' className="sticky_pos" src={`${imageAddress}/Question.png`} alt="" />

                                        </div>
                                        <div className="col-md-6 px-0">
                                            <div className='col-12 px-0 mb-4 py-4 border-bottom'>
                                                <p className='font-14 text-center'>شما می توانید در این صفحه سوالات معمولی که برای کاربران رونیکس پیش می آید را مطالعه نمایید و  پاسخ خود را دریافت نمایید.</p>
                                            </div>
                                            <div className="rtl pr-3" >
                                                <form className="d-flex justify-content-center position-relative w-100  py-2">
                                                    <input className="faq-input-search-question w-50 py-2" name="search" type="text" placeholder="سوال خود را در این قسمت وارد کنید " />
                                                    <svg width="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" class=""></path></svg>
                                                </form>
                                                <div className="d-flex justify-content-start align-items-center my-3">
                                                    <span className="font-weight-bold text-dark faq-title-filtering">موضوعات متداول</span>
                                                    <form className="d-flex flex-wrap">
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("product")} data-filter="product" value="محصولات" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("register")} data-filter="register" value="ورود و ثبت نام" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("order")} data-filter="order" value="ثبت سفارش " />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("delivery")} data-filter="delivery" value="ارسال سفارش" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("reject")} data-filter="reject" value="مرجوعی کالا " />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("other")} data-filter="other" value="سایر موارد " />
                                                    </form>
                                                </div>
                                                <FaqBoxAccordion handelshow={handelshow} data={dataJobCategory} FAQContent={FAQContent} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BrowserView>
                        </div>
                        <div>
                            <MobileView>
                                <div className="row d-block h-auto overflow-hidden ">
                                    <div className="col-md-12 mt-4">
                                        <img className='img-fluid' alt='سوالات متداول کاربران رونیکس' title='مرکز تماس رونیکس' src={`${imageAddress}/HeaderImageFAQ.png`} />
                                    </div>
                                    <div className="col-md-12 faq-Image-Background my-3">
                                        <div className="col-md-12 Overlay-Faq">
                                        </div>
                                        <Scrollbars className="faq-ScrollBars" style={{ direction: "ltr", paddingRight: '14px' }} universal={true}>
                                            <div className="rtl pr-3" >
                                                <form className="d-flex justify-content-center position-relative w-100  py-2">
                                                    <input className="faq-input-search-question w-75 py-2" name="search" type="text" placeholder="سوال خود را در این قسمت وارد کنید " />
                                                    <svg width="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" class=""></path></svg>
                                                </form>
                                                <div className="d-flex justify-content-start align-items-center my-3">
                                                    <span className="font-weight-bold text-dark faq-title-filtering">موضوعات متداول</span>
                                                    <form className="d-flex flex-wrap ">
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("product")} data-filter="product" value="محصولات" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("register")} data-filter="register" value="ورود و ثبت نام" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("order")} data-filter="order" value="ثبت سفارش " />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("delivery")} data-filter="delivery" value="ارسال سفارش" />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("reject")} data-filter="reject" value="مرجوعی کالا " />
                                                        <input className="faq-Input-Filter-question p-2 m-1" type="button" onClick={() => setFilterKey("other")} data-filter="other" value="سایر موارد " />
                                                    </form>
                                                </div>
                                                <FaqBoxAccordion handelshow={handelshow} data={dataJobCategory} FAQContent={FAQContent} />
                                            </div>
                                        </Scrollbars>
                                    </div>
                                </div>
                            </MobileView>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }

    catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt(3),
                "page": 'faq',
                "permalink": '',
                "action": "Page loading",
                "message": `${error}`,
                "ipAddress": "0",
                "languageCode": 'ir'
            }
            await logApi(logBody)
        }
        registerLogApi()
        return <Custom500 />;
    }
}

export async function getServerSideProps({ res, params, query, req }) {
    const { ronix } = req.cookies;
    let response
    try { response = await GetFAQ() }
    catch (error) {

        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 3,
            "page": 'faq',
            "permalink": '',
            "action": "/Faq/GetAll",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": 'ir'
        }
        const registerLogApi = await logApi(logBody)
    }
    return {
        props: {
            FAQContent: response == null ? [] : response.data.response,
            breadCrumbScripts: MakeBreadCrumbScript({ "title": "Home", "link": `https://ronixtools.com/ir` }, { "title": "سوالات متداول", "link": `https://ronixtools.com/ir/faq` })


        }
    }
}
