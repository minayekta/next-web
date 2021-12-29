import $ from 'jquery';
import { useEffect } from 'react';
import { Reveal, Tween } from 'react-gsap';
import { assetPrefix, currentlanguageCode, isRtl } from '../../../next.config';
import RateRange from '../common/RateRage/RateRange';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const RateBox = ({ rate, productRateVlueVar, rateImgSrc, alt, isMobile }) => {
    const myLoader = ({ src, height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
    }
    useEffect(() => {
        setTimeout(function () {
            let offset_wrapper = $('.fake-rate').offset().top
            $(window).scroll(function () {
                if ($('body,html').scrollTop() >= (offset_wrapper - 550)) {
                    $('.fake-rate>div').addClass('show')
                }
            });
        }, 500)
    }, [productRateVlueVar]);
    return (
        <div className='product-rate-box border-top bg-BlackA col-12 d-lg-flex equal bk-white px-0'>
            {!isMobile ?

                <Reveal threshold={.001}>
                    <Tween from={{ opacity: 0, transform: 'rotate(-10deg)' }} to={{ opacity: 1, transform: 'rotate(0deg)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">

                        <div style={{ backgroundImage: 'url(/_next/image?url=' + rateImgSrc + '&w=640&q=80)' }} className='col-6 rate-background px-0'></div>
                    </Tween>
                </Reveal>
                : <div style={{ backgroundImage: 'url(/_next/image?url=' + rateImgSrc + '&w=640&q=80)' }} className='col-12 col-lg-6 rate-background-mobile px-0'></div>}
            <div className='col-12 col-md-8 offset-md-2 offset-lg-0 col-lg-6 col-xl-5 pl-xl-5 rate-content'>
                <p className='font-20 pb-3 col-12 text-center c-white font-weight-500'>
                    <span className={`${isRtl?'pl-3':'pr-3'}`}>{text.AverageRatings}</span>
                    <span>{productRateVlueVar.length == 0 ? rate.totalAverage : productRateVlueVar.totalAverage}</span>
                </p>
                <div className='col-12 px-xl-0 pt-3 product-rate-items border-top'>
                    {productRateVlueVar.length === 0 ? rate.totalRates.map((item, index) => {
                        return (
                            <RateRange avgItem={item.rateItemAverageValue} Firstvalue={item.rateItemAverageValue} key={index} disabled={'true'} rateItemId={item.rateItemId} label={item.rateItemTitle} />
                        );
                    }) :
                        <div  className={`${isRtl?'ltr':''} col-12 px-0 fake-rate`}>
                            {productRateVlueVar.totalRates.map((item, index) => {
                                return (
                                    <div className={`${isRtl?'rtl':''} col-12 col-12 py-xl-3 d-xl-flex px-0 algin-items-center d-xl-flex px-0 align-items-center`}>
                                        <div className={`col-12 ${isRtl?' text-right pr-0 float-right':' text-left pl-0 float-left'} col-xl-3 pt-xl-1 pt-3 pb-2 pb-xl-0 c-white font-13 overflow-h`}><span className='text' style={{ transitionDelay: '0.' + index + 2 + 's' }}>{item.rateItemTitle}</span></div>
                                        <div class={`${isRtl?'range-rtl float-right':'float-left'} col-9 mt-1 mt-xl-0 col-xl-8 px-0 range-wrapper bk-red border-r-4`}>
                                            <span style={{ width: ((item.rateItemAverageValue * 2) * 10) + '%', transitionDelay: '0.' + index + 2 + 's' }} className={`${item.rateItemAverageValue === 0 ? 'range-level-0' :
                                                    item.rateItemAverageValue > 0 && item.rateItemAverageValue <= 1.5 ? 'range-level-1' :
                                                        item.rateItemAverageValue > 1.5 && item.rateItemAverageValue <= 2.5 ? 'range-level-2' :
                                                            item.rateItemAverageValue > 2.5 && item.rateItemAverageValue <= 3.5 ? 'range-level-3' :
                                                                item.rateItemAverageValue > 3.5 && item.rateItemAverageValue <= 4.5 ? 'range-level-4' :
                                                                    item.rateItemAverageValue > 4.5 && item.rateItemAverageValue <= 5 ? 'range-level-5' : null




                                                } range-level`} data_index={(item.rateItemAverageValue * 2) * 10}></span>
                                        </div>
                                        <div  className={` col-3 ${isRtl?' text-left pl-0  float-right':' text-right pr-0  float-left'} col-xl-1 final-rate font-14 c-white`}>{item.rateItemAverageValue}</div>
                                    </div>
                                );
                            })}</div>
                    }
                </div>
            </div>

        </div>
    );
}

export default RateBox; ``