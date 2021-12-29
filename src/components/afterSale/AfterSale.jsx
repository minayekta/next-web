
import Link from 'next/link';
import { Fragment } from 'react';
const AfterSale = ({ allCategoryGrid, isMobile }) => {
    return (
        <Fragment>
            {!isMobile ?
                <div className="container px-0 afterSaleContainer ">
                    <div className='col-12 py-2 rtl mb-4 homeAfterSaleContainer '>
                        <div className='col-12 px-0'>
                            <div className='col-4 p-4 p-xxl-5 text-justify text-white textContainer border-radius-r'>
                                <h2 className='font-weight-bold'>فروش آغاز تعهد ماست...</h2>
                                <p className='mt-4 font-14'>شركت خدمات پس از فروش رونیکس (رونیکس سرویس) با شعار (سرعت،دقت،کیفیت) به عنوان اولین شرکت خدمات پس از فروشِ دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل 12 (ماه ) گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و 15 ماه گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران در دوره گارانتی و خارج از گارانتی،دارنده بزرگترین بانک قطعات ابزار در ایران و...) آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت است.</p>
                                <Link href={`/aftersales`}><a className='btn bg-white text-dark'>خدمات پس از فروش</a></Link>
                            </div>
                        </div>
                    </div >
                </div>
                :
                <div className='py-2 rtl container homeAfterSaleContainer bg-danger px-0'>
                    <div className="col-12 px-0">
                        <div className='col-12 py-5 px-4 text-justify text-white text-center'>
                            <h2 className='font-weight-bold font-18'>فروش آغاز تعهد ماست...</h2>
                            <p className='mt-3 font-12 text-justify'>شركت خدمات پس از فروش رونیکس (رونیکس سرویس) با شعار (سرعت،دقت،کیفیت) به عنوان اولین شرکت خدمات پس از فروشِ دارنده ایزو ۹۰۰۱ - ۲۰۰۸ در صنعت ابزار آلات با بیش از ۱۷۰ عاملیت مجاز خدمات پس از فروش ابزار در ۳۱ استان کشور، با‌ خدمات متنوع خود ( شامل 12 (ماه ) گارانتی تعویض قطعات و تعمیر محصولات برقی و بادی رونیکس و 15 ماه گارانتی رایگان تعمیر و تعویض قطعات بادی جیت بدون محدودیت نوع قطعه، پیک رایگان تعمیرات در محدوده شهری تهران در دوره گارانتی و خارج از گارانتی،دارنده بزرگترین بانک قطعات ابزار در ایران و...) آماده ارائه خدمات به مصرف‌كنندگان محصولات رونیکس و جیت است.</p>
                            <Link href={`/aftersales`}><a className='btn bg-white mt-3 text-dark'>خدمات پس از فروش</a></Link>
                        </div>
                    </div >
                </div>
            }
        </Fragment>
    );
}

export default AfterSale;