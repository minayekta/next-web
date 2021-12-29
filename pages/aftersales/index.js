import loadable from '@loadable/component';
import $ from 'jquery';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Reveal, Tween } from 'react-gsap';
import { v4 as uuidv4 } from 'uuid';
import { assetPrefix, imageAddress } from '../../next.config';
import { AfterSaleApiSearch, AfterSaleGetAllTypes, RonixAgentsProvinceGetAll } from '../../src/components/Services/afterSalesService';
import { logApi } from '../../src/components/Services/productService';
import { MakeBreadCrumbScript, ReplaceString } from '../../src/components/Services/UtilityService';
const CardCustomer = loadable(() => import('../../src/components/aftersales/CardCustomer'));
const Breadcrumb = loadable(() => import('../../src/components/common/Breadcrumb'));
const SvgMap = loadable(() => import('../../src/components/aftersales/SvgMap'));
const Custom500 = loadable(() => import('../500'));

let height_item = 0;
export default function aftersales({ AllTypes, breadCrumbScripts, isMobileView }) {
    const router = useRouter();
    const [content, setContent] = useState(false);
    const [provinceId, setprovinceId] = useState(0);
    const [countyId, setcountyId] = useState(0);
    const [Provinces, setProvinces] = useState([])
    const [counties, setCounties] = useState([]);
    const [toggleAfterSales, settoggleAfterSales] = useState(false);
    const [term, setTerm] = useState('');
    const [AftersalesInfo, setAftersalesInfo] = useState([]);
    // const [selectTypes, setSelectedTypes] = useState([]);
    const [ProvinceTitle, setProvinceTitle] = useState();
    const [selectedTypesState, setSelectedTypesState] = useState([]);
    const [cookies, setCookies] = useCookies(['ronix']);
    const [allTypes, setAllTypes] = useState([]);
    const submitSearchForm = (e) => {
        e.preventDefault();

        searchAfterSale(provinceId, countyId, []);
    }
    const searchAfterSale = async (provId = 0, countId = 0, Types = []) => {

        setprovinceId(provId);
        setcountyId(countId);
        const afterSaleBody = {
            "provinceId": provId,
            "countyId": countId,
            "term": term,
            "types": Types,
        }

        let afterSalesResponse; try { afterSalesResponse = await AfterSaleApiSearch(afterSaleBody); }
        catch (error) {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt(3),
                "page": router.asPath,
                "action": "/api/AfterSale/Search",
                "message": `${error}`,
                "ipAddress": "0",
                "languageCode": 'ir'
            }
            await logApi(logBody)
        }
        setAftersalesInfo([]);
        setTimeout(() => {
            setAftersalesInfo(afterSalesResponse.data.response);
        }, 200);
    }
    const changeTypeCheckBox = () => {
        var selectedTypes = document.getElementsByClassName("typeCheckBoxes");

        let tempTypeArray = [];
        Array.from(selectedTypes).map(selectedType => {
            if (selectedType.checked) {
                tempTypeArray.push(parseInt(selectedType.value));
            }
        }

        );
        setSelectedTypesState(tempTypeArray);
        searchAfterSale(provinceId, countyId, tempTypeArray);
    }
    useEffect(() => {
        async function CallApi() {

            let AllTypesResponse;
            try { AllTypesResponse = await AfterSaleGetAllTypes(); }
            catch (error) {
                console.log(error);
                const logBody = {
                    "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                    "environment": 3,
                    "page": router.asPath,
                    "action": "/AfterSale/GetAllTypes",
                    "message": `${error}`,
                    "ipAddress": "0",
                    "languageCode": 'ir'
                }
                const registerLogApi = await logApi(logBody)
            }
            setAllTypes(AllTypesResponse.data.response)
        }

        CallApi();
        setprovinceId(parseInt(provinceId));
        {
            Provinces.map(province => {

                if (province.id === parseInt(provinceId)) {
                    setProvinceTitle(province.title);
                    setCounties(province.counties);
                    if (province.counties[0] == undefined) {

                    } else {
                        changeCounty(province.counties[0].id, province.counties);
                    }

                    setcountyId(0);
                    searchAfterSale(parseInt(provinceId));
                }
            }
            )
        }



    }, []);
    const changeProvince = (value, allProvince) => {

        setprovinceId(parseInt(value));
        {
            allProvince.map(province => {

                if (province.id === parseInt(value)) {
                    setProvinceTitle(province.title);
                    setCounties(province.counties);
                    if (province.counties[0] == undefined) {

                    } else {
                        changeCounty(province.counties[0].id, province.counties);
                    }

                    setcountyId(0);
                    searchAfterSale(parseInt(value));
                }
            }
            )
        }
    }
    const changeCounty = (value, Counties) => {

        Counties.map(county => {
            if (county.id === parseInt(value)) {

                setcountyId(county.id);
                searchAfterSale(parseInt(provinceId), parseInt(value));
            }
        })
    }
    const showContent = () => {

        if ($('.content-description').height() === 200) {
            $('.content-description').height(height_item + 150);
            $('.item-arrow').addClass('rotate-item');
        }
        else {
            $('.content-description').height(200);
            $('.item-arrow').removeClass('rotate-item');

        }
    }
    useEffect(() => {
        height_item = $('.height-content').height()

    }, [router]);
    useEffect(() => {
        async function CallApi(e) {
            let resprovince; try { resprovince = await RonixAgentsProvinceGetAll(); }
            catch (error) {
                const logBody = {
                    "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                    "environment": parseInt(3),
                    "page": router.asPath,
                    "action": "https://ei.ronix.ir:4488/RonixAgentsProvinceGetAll/v1",
                    "message": `${error}`,
                    "ipAddress": "0",
                    "languageCode": 'ir'
                }
                await logApi(logBody)
            }
            const allProvince = [{ "id": 0, "title": "", counties: [] }, ...resprovince.data.response]
            setProvinces(allProvince);
            const afterSaleBody = {
                "provinceId": 0,
                "countyId": 0,
                "term": "",
                "types": [],
            }
            let afterSalesResponse; try { afterSalesResponse = await AfterSaleApiSearch(afterSaleBody); }
            catch (error) {
                const registerLogApi = async () => {
                    const logBody = {
                        "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                        "environment": parseInt(3),
                        "page": router.asPath,
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

            setAftersalesInfo(afterSalesResponse.data.response)

        }
        CallApi()
    }, [])
    const HandleToggle = () => {
        settoggleAfterSales(!toggleAfterSales)
    }
    try {

        return (
            <Fragment>
                <Head>

                    <title>
                        خدمات پس از فروش رونیکس
                    </title>
                    <meta name="description" content="شرکت خدمات پس از فروش رونیکس با خدمات متنوع خود همچون تعمیر و تعویض قطعات و پیک رایگان، دارنده بزرگ‌ترین بانک قطعات ابزار در ایران بوده و آماده ارائه خدمات به مصرف‌کنندگان محصولات رونیکس و جیت می‌باشد"></meta>


                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbScripts) }}></script>
                </Head>

                {
                    isMobileView
                        ?
                        <div className='col-12 px-0 bk-white'>
                            <div className="Back-Gray col-12 w-100  pt-3 px-0">
                                <div className="col-md-12 Box-Banner px-0">
                                    <img alt='خدمات پس از فروش محصولات رونیکس' title='شرکت خدمات پس از فروش  رونیکس' src={`${imageAddress}/1.jpg`} className="w-100" alt="" />
                                </div>
                                <div className="col-md-12 px-0">
                                    <div className="col-md-12 d-flex pt-4 pb-2 ">
                                        <svg width='30px' height='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 svg-inline--fa fa-info-circle fa-w-16 fa-3x"><path fill="#00a8f7" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
                                        <p className="Info-Text line-height_2 font-13">
                                            لطفا نام، کد عاملیت ویا ادرس عاملیت مجاز مورد نظرتان را در قسمت زیر جستجو کنید
                                        </p>
                                    </div>
                                    <div className="col-md-12  ">
                                        <form onSubmit={submitSearchForm} className="d-flex position-relative">
                                            <input type="Search" placeholder="ﺟﺴﺘﺠﻮ در ﻧﺎم، ﮐﺪ ﻋﺎﻣﻠﯿﺖ و آدرس" value={term} onChange={(e) => setTerm(e.target.value)} className="style_padding border-raduis Search-Panel position-relative col-md-12 mb-2 " />
                                            <button className="btn p-0 mx-0 Icon-search" >
                                                <svg width="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" class=""></path></svg>
                                            </button>
                                        </form>


                                        <select className="City w-100 my-2 border-raduis style_padding"
                                            value={provinceId}
                                            onChange={(e) => changeProvince(e.target.value, Provinces)} name="provinceId"  >
                                            <option className="province">
                                                استان
                                            </option>
                                            {Provinces.map((province, index) => {
                                                if (index > 0) {
                                                    return (
                                                        <option className="province" key={uuidv4()} value={province.id}>{province.title}</option>
                                                    )
                                                }
                                            }
                                            )}
                                        </select>

                                        <select className="City w-100 mt-2 border-raduis style_padding"

                                            value={countyId}
                                            onChange={(e) => changeCounty(e.target.value, [{ "id": 0, "title": "", counties: [] }, ...counties])} name="countyId" >
                                            <option className="province">
                                                شهرستان
                                            </option>
                                            {[{ "id": 0, "title": "", counties: [] }, ...counties].map((county, index) => {
                                                if (index > 0) {
                                                    return (
                                                        <option key={uuidv4()} value={county.id}>{county.title}</option>
                                                    )
                                                }

                                            }
                                            )}
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-12  pt-4 ">
                                    <p className=" font-weight-bold text-center position-relative font-13">
                                        <hr className="aftersales-title-HrLeft " />
                                        انتخاب نوع تعمیرات
                                        <hr className="aftersales-title-HrRight" />

                                    </p>


                                    <ul className="p-0 d-flex flex-wrap text-right ">


                                        {allTypes && allTypes.map(type =>
                                            <li className="col-4 p-0" key={uuidv4()}>
                                                <input type="checkbox" key={uuidv4()} className="typeCheckBoxes" onChange={changeTypeCheckBox} value={type.id} name="typeCheckBoxes" checked={selectedTypesState.findIndex(p => p == type.id) != -1} />
                                                <span className="Span-Category" key={uuidv4()}>{type.title}</span>
                                            </li>
                                        )}



                                    </ul>




                                </div>
                                <div className="col-md-12 p-0">
                                    <hr className="aftersales-HrTopMap" />
                                    <div className="col-md-12 d-flex justify-content-center px-0 text-center ">
                                        <svg width='20px' height='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 svg-inline--fa fa-info-circle fa-w-16 fa-3x"><path fill="#00a8f7" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
                                        <p className=" font-weight-bold font-13 ">
                                            لطفا از روی نقشه استان مورد نظرتان را انتخاب کنید
                                        </p>
                                    </div>
                                    <div className="Map-Container col-12 text-center px-0 mb-3">
                                        <SvgMap searchAfterSale={searchAfterSale} />
                                    </div>
                                    <div className="d-flex header-Scroll-aftesale  p-2 my-4  w-100 position-relative ">
                                        <span className="c-grayE font-13 px-3">
                                            نمایندگی های خدمات پس از فروش <span className=" font-weight-bold">
                                                {ProvinceTitle}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="col-md-12 p-0">
                                        {AftersalesInfo.map(AftersaleInfo =>
                                            <CardCustomer isMobile={isMobileView} key={uuidv4()} afterSaleTypes={AftersaleInfo.afterSaleTypes} managerFullName={AftersaleInfo.managerFullName} verifiedCode={AftersaleInfo.verifiedCode} phoneNumber={AftersaleInfo.phoneNumber} email={AftersaleInfo.email}
                                                provinceTitle={AftersaleInfo.provinceTitle} faxNumber={AftersaleInfo.faxNumber} countyTitle={AftersaleInfo.countyTitle} address={AftersaleInfo.address} />
                                        )}
                                    </div>
                                    {/* <CommentPagination res={AftersalesInfo} /> */}
                                </div>
                            </div>
                            <div className={` col-12`}>
                                <div className="w-100 justify-content-center d-flex border-Top">
                                    <img alt='خدمات پس از فروش محصولات رونیکس' title='شرکت خدمات پس از فروش  رونیکس' src={`${imageAddress}/logoo-01 (1).svg`} className="mw-100 p-4 " alt="" />
                                </div>
                                <div className={` content-description  all-transition p-2 text-right`}>
                                    <div className="height-content col-12 px-0">
                                        <h1 className=" font-weight-bold font-16">خدمات پس از فروش </h1>
                                        <p className="Aftersales-Content-line">
                                            شركت خدمات پس از فروش رونیکس ( رونیکس سرویس ) با شعار (سرعت- دقت- کیفیت)، به عنوان اولین شرکت خدمات پس از فروش دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل ۳۶۵ روز گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و ۴۵۶ روز گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران و برخی از شهر دیگر و دارنده ی بزرگترین بانک قطعات ابزار در ایران و...)، آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت مي‌باشد
                                        </p>
                                        <h2 className=" font-weight-bold font-16">امور مشتریان</h2>
                                        <p className="Aftersales-Content-line">
                                            واحد امور مشتریان رونیکس سرویس با شماره 61904-021  آماده دریافت هرگونه انتقاد، پیشنهاد، شکایت و یا درخواست اطلاعات مشتریان محترم می‌باشد
                                        </p>
                                        <h3 className=" font-weight-bold font-16">عاملیت های مجاز خدمات پس از فروش ابزار</h3>
                                        <p className="Aftersales-Content-line">شركت خدمات پس از فروش رونیکس ( رونیکس سرویس ) با شعار (سرعت- دقت- کیفیت)، به عنوان اولین شرکت خدمات پس از فروش دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل ۳۶۵ روز گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و ۴۵۶ روز گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران و برخی از شهر دیگر و دارنده ی بزرگترین بانک قطعات ابزار در ایران و...)، آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت مي‌باشد</p>
                                        <h3 className=" font-weight-bold font-16">گارانتی محصولات</h3>
                                        <p className="Aftersales-Content-line">شركت خدمات پس از فروش رونیکس ( رونیکس سرویس ) با شعار (سرعت- دقت- کیفیت)، به عنوان اولین شرکت خدمات پس از فروش دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل ۳۶۵ روز گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و ۴۵۶ روز گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران و برخی از شهر دیگر و دارنده ی بزرگترین بانک قطعات ابزار در ایران و...)، آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت مي‌باشد </p>
                                        <h3 className=" font-weight-bold font-16">شرایط گارانتی محصولات رونیکس</h3>
                                        <p className="Aftersales-Content-line"><b>1.</b>در هنگام خرید محصولات رونیکس و جیت حتماً به شرایط کارت گارانتی توجه فرموده و از فروشندگان درخواست نمائید که نسبت به تکمیل و مهر و امضاء آن اقدام نمایند.
                                        </p>
                                        <p className="Aftersales-Content-line"> <b>2.</b> به دلیل عدم صدور المثنی ، لطفاً تا تاریخ انقضاء در حفظ و نگهداری کارت گارانتی دقت فرمائید، چرا که ارائه خدمات پس از فروش رایگان منوط به وجود کارت گارانتی می باشد.
                                        </p>
                                        <p className="Aftersales-Content-line"><b>3.</b> خدمات پس از فروش رایگان، بابت ارزش قطعات یدکی شامل گارانتی و اجرت تعمیر با نظر کارشناس فنی بوده و مفهوم تعویض دستگاه را در بر ندارد.
                                        </p>
                                        <p className="Aftersales-Content-line"><b>4.</b> در ابزارآلات برقی رونیکس به جز آرمیچر،بالشتک ،کلید و دنده باقی قطعات شامل گارانتی نمی باشد</p>
                                        <p className="Aftersales-Content-line"><b>5.</b> دستگاه های تفنگ چاشنی رونیکس فاقد گارانتی می باشند، ولی ارائه سرویس با دریافت هزینه برای مشتریان محترم امکان پذیر خواهد بود.</p>
                                        <h3 className=" font-weight-bold font-16">موارد خارج از گارانتی ابزار</h3>
                                        <p className="Aftersales-Content-line">خرابی ناشی از استفاده غیر اصولی
                                            خرابی ناشی از نوسانات برق و فشار بیش از حد به دستگاه
                                            عدم درج تاریخ خرید و مهر فروشگاه در کارت گارانتی
                                            دستکاری دستگاه توسط افرادی غیر از تعمیرکاران مجاز شرکت رونیکس سرویس
                                            تغییر دادن یا مخدوش نمودن شماره سریال یا دیگر مندرجات کارت
                                            هرگونه خرابی بدنه دستگاه از جمله خراشیدگی،فرورفتگی، شکستگی و کسری لوازم </p>
                                    </div>
                                </div>
                                <div className="col-12 px-0 py-3 text-center all-transition " onClick={() => showContent()}>
                                    <span className="item-arrow d-block py-4">
                                        <svg width='15px' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-double-down fa-w-14 fa-3x"><path fill="currentColor" d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" class=""></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        :

                        <div className='col-12 px-0 bk-white'>

                            <div className=" container Container">
                                <Breadcrumb firstItem={{ title: "خدمات پس از فروش", link: `${assetPrefix}/aftersales` }} />
                                <div className="col-md-12 Box-Banner px-0">
                                    <img alt='خدمات پس از فروش محصولات رونیکس' title='شرکت خدمات پس از فروش  رونیکس' src={`${imageAddress}/1.jpg`} className="w-100" alt="" />
                                </div>
                                <Reveal threshold={.1}>
                                    <Tween from={{ opacity: '0', transform: 'translateY(200px)' }} to={{ opacity: '1', transform: 'translateY(0px)' }} stagger={.2} duration={1} ease="easein(.2, 0.1)">
                                        <h1 className='bk-grayA mb-0 text-right font-16 col-12 my-3 py-3'>خدمات پس از فروش</h1>
                                    </Tween>
                                </Reveal>
                                <div className="col-12 d-flex equal px-0">
                                    <div className="col-md-7 text-right px-0">
                                        <div className="rtl">

                                            <div className="Scroll-Content pl-3">
                                                <p>
                                                    شركت خدمات پس از فروش رونیکس ( رونیکس سرویس ) با شعار (سرعت- دقت- کیفیت)، به عنوان اولین شرکت خدمات پس از فروش دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل  12 گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و 15 ماه گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران در دوره گارانتی و خارج از گارانتی،دارنده ی بزرگترین بانک قطعات ابزار در ایران و... ، آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت مي‌باشد.</p>
                                                <h2 className="font-16 font-weight-bold">
                                                    امور مشتریان
                                                </h2>
                                                <p>واحد امور مشتریان رونیکس سرویس با شماره 61904-021 آماده دریافت هرگونه انتقاد، پیشنهاد، شکایت و یا درخواست اطلاعات مشتریان محترم می‌باشد.</p>
                                                <h2 className="font-16 font-weight-bold">
                                                    تامین قطعات
                                                </h2>
                                                <p>رونیکس سرویس با در اختیار داشتن بزرگترین بانک قطعات ابزار در ایران، کلیه قطعات مورد نیاز جهت مصارف خدماتی را با کیفیت مناسب و در کوتاه ترین زمان ممکن تامین و در اختیار شبکه عاملیت های مجاز خدمات پس از فروش و سایر درخواست کنندگان قرار می دهد.</p>
                                                <h2 className="font-16 font-weight-bold">امور عاملیت های مجاز خدمات پس از فروش </h2>
                                                <p>رونیکس سرویس با رعایت فاکتورهای استاندارد ایزو 2008-9001 و سفرهای تحقیقاتی دقیق اقدام به افزایش عاملیت‌های مجاز خدمات پس از فروش شرکت در سراسر کشور نموده و با بیش از 170 تعمیرگاه مجاز رونیکس سرویس در 31 استان از شرق تا غرب و از شمالی ترین تا جنوبی ترین نقطه کشور آماده ارائه خدمات پس از فروش ابزار به مشتریان محترم محصولات رونیکس می‌باشد</p>

                                                <h2 className="font-16 font-weight-bold">شرایط گارانتی محصولات </h2>
                                                <p>به دلیل عدم صدور المثنی ، لطفاً تا پایان تاریخ انقضاء در حفظ و نگهداری کارت دقت فرمائید. (ارائه خدمات گارانتی منوط به ارائه کارت گارانتی تکمیل شده توسط فروشنده می باشد)
                                                </p>
                                                <p>بدیهی است <strong className="text-danger">خرید شما به منزله پذیرش شرایط مندرج درکارت گارانتی می باشد</strong> ؛ لذا بمنظور ارائه خدمات گارانتی به بهترین شکل خواهشمند است به مفاد مندرج در کارت گارانتی دستگاه خود با دقت توجه بفرمائید..
                                                </p>
                                                <p>ابزارآلات جیت فقط یک بار در طول 15 ماه شامل ارائه خدمات گارانتی می شود.
                                                </p>
                                                <p>ابزار آلات رونیکس فقط یک بار در طول 12 ماه شامل ارائه خدمات گارانتی می شود.
                                                </p>
                                                <p>اره و حاشیه زن بنزینی فقط یک بار در طول 6 ماه شامل ارائه خدمات گارانتی می شود.
                                                </p>
                                                <p>اینورترهای ساخت ایران، فقط یک بار در طول 24 ماه شامل ارائه خدمات گارانتی می شود.</p>
                                                <p>هرگونه دستکاری، توسط افرادی غیر از تعمیرکاران مجاز شرکت، باعث ابطال گارانتی می شود.</p>
                                                <p>ارائه خدمات گارانتی شامل تعمیر و تعویض قطعات و اجرت تعمیر دستگاه با نظر کارشناس فنی است و تحت هیچ شرایطی شامل تعویض دستگاه نمی گردد.</p>
                                                <p>نبود سریال روی دستگاه و عدم ارائه کارت و یا عدم تکمیل کارت گارانتی، هرگونه مغایرت،تغییر یا مخدوش نمودن شماره سریال محصول یا سایر مندرجات کارت گارانتی به منزله خروج دستگاه از شرایط گارانتی می باشد.</p>
                                                <p>استفاده از لوازم جانبی غیر استاندارد بر روی دستگاه، خرابی ناشی از نوسانات برق و فشار بیش از حد به دستگاه، خرابی ناشی از استفاده غیر اصولی شامل گارانتی نمی باشد.</p>

                                                <p>هر گونه خرابی بدنه دستگاه از جمله خراشیدگی، فرو رفتگی، شکستگی و کسری لوازم شامل گارانتی نمی باشد.</p>
                                                <p>هزینه حمل و نقل دستگاه معیوب به تعمیرگاه های مجاز شرکت رونیکس برعهده خریداران محترم است.</p>

                                                <h2 className="font-16 font-weight-bold">قطعات شامل گارانتی</h2>
                                                <p className="mt-3">
                                                    <strong className="text-danger">ابزارآلات برقی صنعتی و نجاری:</strong> آرمیچر، بالشتک، کلید و دنده مقابل / <strong className="text-danger">ابزارآلات شارژی: </strong> کلید، موتور و برد / <strong className="text-danger">پیستوله: </strong>موتور و کلید / <strong className="text-danger">کارواش:</strong> موتور و پمپ / <strong className="text-danger">سشوار:</strong> بورد، المنت و کلید / <strong className="text-danger">بلوور:</strong> آرمیچر، بالشتک، کلید / <strong className="text-danger">چرخ سنباده:</strong> موتور، خازن و کلید / <strong className="text-danger">جاروبرقی صنعتی و کمپرسورها:</strong> موتور / <strong className="text-danger">دمنده های برقی:</strong> استاتور (بالشتک)، کلید / <strong className="text-danger">دریل ستونی: </strong> موتور، کلید روشن و خاموش / <strong className="text-danger">اره بنزینی و حاشیه زن موتوری: </strong> کلید روشن و خاموش و کوئل / <strong className="text-danger">میخکوب و منگنه کوب برقی:</strong> بوبین، کلید، میکروسوئیچ / <strong className="text-danger">اینورترها و محصولات بادی: </strong> تمامی قطعات / <strong className="text-danger">اتوجوش لوله سبز (معمولی و دیجیتال) :</strong> کلید و ترموستات /<strong className="text-danger"> منگنه کوب شارژی:</strong> کلید و سنسورها، برد مدار الکترونیکی، موتور

                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-5">
                                        <div className="Img-Box-aftersales d-flex justify-content-center ">
                                            <img alt='خدمات پس از فروش محصولات رونیکس' title='شرکت خدمات پس از فروش  رونیکس' src={`${imageAddress}/LogoRonixAftesales.svg`} className="mw-100" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex Desktop-Navigate py-3 bk-grayA my-2 w-100 position-relative col-12">
                                    <h2 className="font-weight-bold m-0 font-16">
                                        نمایندگی های خدمات پس از فروش
                                    </h2>
                                </div>
                                <div className="col-12 d-flex equal px-0 ">
                                    <div className="col-7 px-0">


                                        <div className="col-md-6 Border-add pt-3 pl-0">
                                            <p className=" font-weight-bold">
                                                انتخاب نوع تعمیرات
                                            </p>


                                            <ul className="p-0 d-flex flex-wrap">


                                                {allTypes && allTypes.map((type, index) =>
                                                    <li className="col-lg-4 col-md-4 font-14 mb-1" key={uuidv4()}>
                                                        <input type="checkbox" className="typeCheckBoxes align-middle" onChangeCapture={changeTypeCheckBox} value={type.id} name="typeCheckBoxes" checked={selectedTypesState.findIndex(p => p == type.id) != -1} />
                                                        <span className="Span-Category pr-1" >{type.title}</span>
                                                    </li>
                                                )}



                                            </ul>




                                        </div>



                                        <div className="col-md-6 text-right px-0">
                                            <div className="col-md-12 d-flex pt-3 pb-1 pr-0">
                                                <svg width='20px' height='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 svg-inline--fa fa-info-circle fa-w-16 fa-3x"><path fill="#00a8f7" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
                                                <p className="Info-Text">
                                                    لطفا نام، کد عاملیت ویا ادرس عاملیت مجاز مورد نظرتان را در قسمت زیر جستجو کنید
                                                </p>
                                            </div>
                                            <div className="col-md-12 pr-0">
                                                <form className="after-sales-form align-items-center d-flex Search-Panel px-0 col-12" onSubmit={submitSearchForm}>
                                                    <input type="text" placeholder="جستجو در نام، کد عاملیت و آدرس" value={term} onChange={(e) => setTerm(e.target.value)} className="position-relative col-md-11 py-2 font-14" />
                                                    <button className="btn p-0 mx-0 col-1 Icon-search" >
                                                        <svg width="15px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" class=""></path></svg>
                                                    </button>

                                                </form>


                                                <div className="col-12 mt-2 px-0">
                                                    <div className='row d-block'>
                                                        <div className='col-6'>

                                                            <select className="City Search-Panel col-12 px-0 py-1"
                                                                value={provinceId}
                                                                onChange={(e) => changeProvince(e.target.value, Provinces)} name="provinceId"  >
                                                                <option className="province">
                                                                    استان
                                                                </option>
                                                                {Provinces.map((province, index) => {
                                                                    if (index > 0) {
                                                                        return (
                                                                            <option className="province" key={uuidv4()} value={province.id}>{province.title}</option>
                                                                        )
                                                                    }
                                                                }
                                                                )}
                                                            </select>

                                                        </div>
                                                        <div className='col-6'>

                                                            <select className="City Search-Panel col-12 px-0 py-1"

                                                                value={countyId}
                                                                onChange={(e) => changeCounty(e.target.value, [{ "id": 0, "title": "", counties: [] }, ...counties])} name="countyId" >
                                                                <option className="province">
                                                                    شهرستان
                                                                </option>
                                                                {[{ "id": 0, "title": "", counties: [] }, ...counties].map((county, index) => {
                                                                    if (index > 0) {
                                                                        return (
                                                                            <option key={uuidv4()} value={county.id}>{county.title}</option>
                                                                        )
                                                                    }

                                                                }
                                                                )}
                                                            </select>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="col-md-12 px-0">


                                            <div className="d-flex header-Scroll-aftesale  Desktop-Navigate px-0 my-4 w-100 position-relative ">
                                                <span className="bk-grayD col-12 text-right font-14 c-white py-2">
                                                    نمایندگی های خدمات پس از فروش  <span className="font-weight-bold">{ProvinceTitle}</span>
                                                </span>
                                            </div>
                                            <div className="ScrollBars-CardCustomer col-12 px-0 custome-scroll-bar" style={{ direction: "ltr", paddingRight: '14px' }} >
                                                {AftersalesInfo.map(AftersaleInfo =>
                                                    <CardCustomer isMobile={isMobileView} key={uuidv4()} afterSaleTypes={AftersaleInfo.afterSaleTypes} managerFullName={AftersaleInfo.managerFullName} verifiedCode={AftersaleInfo.verifiedCode} phoneNumber={AftersaleInfo.phoneNumber} email={AftersaleInfo.email}
                                                        provinceTitle={AftersaleInfo.provinceTitle} faxNumber={AftersaleInfo.faxNumber} countyTitle={AftersaleInfo.countyTitle} address={AftersaleInfo.address} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 mt-4">
                                        <div className="col-md-12 d-flex justify-content-center pb-2 px-0 text-center">
                                            <svg width='20px' height='20px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 svg-inline--fa fa-info-circle fa-w-16 fa-3x"><path fill="#00a8f7" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class=""></path></svg>
                                            <p className=" font-weight-bold">
                                                لطفا از روی نقشه استان مورد نظرتان را انتخاب کنید
                                            </p>
                                        </div>
                                        <div className="Map-Container">
                                            <SvgMap searchAfterSale={searchAfterSale} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                }

            </Fragment >
        )
    }
    catch (error) {
        console.log(error);
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt(3),
                "page": 'afterSales',
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
export async function getServerSideProps(ctx) {
    let isMobileView = ctx.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) != null ? true : false;
    const { ronix } = ctx.req.cookies;
    return {
        props: {
            isMobileView: isMobileView,

            breadCrumbScripts: MakeBreadCrumbScript({ "title": "Home", "link": `https://ronixtools.com/ir` }, { "title": "خدمات پس از فروش", "link": `https://ronixtools.com/ir/aftersales` })

        }
    }
}
