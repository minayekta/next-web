import Image from 'next/image';
import { useEffect } from 'react';
import { assetPrefix, currentlanguageCode } from '../../../next.config';
import RateRange from '../common/RateRage/RateRange';
import TitlesFieldset from '../common/Titles/TitlesFieldset';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const RateBox = ({ rate, productRateVlueVar, rateImgSrc, alt }) => {
    const myLoader = ({ src,height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
      }
    useEffect(() => {
    }, [productRateVlueVar]);
    return (
        <div className='product-rate-box col-12 col-xl-4 px-xl-5 bk-white py-2'>

            <TitlesFieldset titleContent={text.Rating} titleClass={'mt-1 font-18 mb-4 c-black d-flex justify-content-between alighn-items-center'} />

            <Image  loader={myLoader} className='img-fluid border mb-3 col-6 col-xl-12' src={rateImgSrc} alt={alt} width={419} height={419} quality={70} />
            <p className='c-black font-47 my-2 col-6 col-xl-12 float-right text-center font-weight-bold'>{productRateVlueVar.length == 0 ? rate.totalAverage : productRateVlueVar.totalAverage}</p>
            <h3 className='c-black pb-3 mb-3 font-22 border-bottom text-center font-weight-bold'>{text.AverageRatings}</h3>
            <div className='col-12 px-0 product-rate-items'>
                {productRateVlueVar.length === 0 ? rate.totalRates.map((item, index) => {
                    return (
                        <RateRange avgItem={item.rateItemAverageValue} Firstvalue={item.rateItemAverageValue} key={index} disabled={'true'} rateItemId={item.rateItemId} label={item.rateItemTitle} />
                    );
                }) :
                    productRateVlueVar.totalRates.map((item, index) => {

                        return (
                            // <div>msd</div>
                            <RateRange avgItem={item.rateItemAverageValue} Firstvalue={item.rateItemAverageValue} key={index} disabled={'true'} rateItemId={item.rateItemId} label={item.rateItemTitle} />
                        );
                    })
                }

            </div>
        </div>
    );
}

export default RateBox;