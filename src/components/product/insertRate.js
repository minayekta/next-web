import { useEffect } from 'react';
import { Reveal, Tween } from 'react-gsap';
import { currentlanguageCode, isRtl } from '../../../next.config';
import RateRange from './../common/RateRage/RateRange';

var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const InsertRate = ({ rateData, productIdVal, userAvgRate }) => {
    useEffect(() => {
        let start_animation = 'bottom bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".product-rate-box",
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from(".insert-rate>div", { opacity: 0, y: 100 })
            .to(".insert-rate>div", { opacity: 1, y: 0 })
            .addLabel("end");
    }, []);
    return (

        <Reveal threshold={.01}>
            <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} stagger={.2} duration={.3} ease="easein(.2, 0.1)">

                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <div className='col-12 bk-grayC px-xl-5 pb-4 pb-xl-0 h-100 insert-rate border-r-4 d-flex align-items-center'>
                        <div className='col-12 px-0'>
                            <div className='col-12 px-0'>
                                <p className='col-12 px-0 pt-4 pt-xl-3 font-18 m-0 text-center'>{text.RateProduct}</p>
                                <div className='col-12 py-2 py-xl-0 mb-2 text-center px-0 avrage-rate'>
                                    <span className='valu c-black font-47 text-center font-weight-bold'>{userAvgRate==null ?'NA':userAvgRate}</span>
                                </div>
                            </div>
                            <div className={`col-12 col-xl-12 px-0 product-rate-items ${isRtl ? 'text-right' : ''}`}>
                                {rateData.map((item, index) => {
                                    return (
                                        <RateRange productId={productIdVal} avgItem={item.rateItemAverageValue} Firstvalue={item.rateItemAverageValue} key={index} rateItemId={item.rateItemId} label={item.rateItemTitle} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Tween>
        </Reveal>
    );
}
export default InsertRate;