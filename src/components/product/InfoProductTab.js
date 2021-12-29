import $ from 'jquery';
import { useEffect } from 'react';
import { Reveal, Tween } from 'react-gsap';
import { currentlanguageCode } from '../../../next.config';
var { text } = require('../../components/translate-files/' + currentlanguageCode + '.json');
let easing = [0.175, .1, 0.42, 0.96];
const fadeIn = {
    exit: { opacity: 0, transition: { duration: 0.3, ease: easing } },
    enter: {
        opacity: 1,
        transition: {
        
            duration: 0.3,
            ease: easing
        }
    }
};
const InfoProductTab = (props) => {
    const handleClickTab = (tab_id) => {
        $('.tab-content-item').removeClass('active-tab');
        $('#' + tab_id).addClass('active-tab');
        $('.tab-switcher-item').removeClass('active-tab-switcher');
        $('#' + tab_id + '-tab-switcher').addClass('active-tab-switcher');
    }
    useEffect(() => {
        // let start_animation = 'top bottom';
        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".info-product-tab",
        //         start: start_animation,
        //     }
        // });
        // tl.addLabel("start")
        //     .from(".info-product-tab>div", { opacity: 0, y: 100 })
        //     .to(".info-product-tab>div", { opacity: 1, y: 0 })
        //     .addLabel("end");
    })
    const productSpecifications = props.pecificationsContent;
    const productDescriptionContent = props.productDescription
    return (
        <Reveal threshold={.01}>
        <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} stagger={.2} duration={.3} ease="easein(.2, 0.1)">

        <div className={'col-12 d-flex info-product-tab flex-wrap px-0 mb-5 overflow-h'}>
            <div className={'col-12 d-flex flex-wrap d-xl-block col-xl-2 tab-switcher px-0'}>
                {/* {props.aboutContent !== '' ? <div id={'product-about-tab-switcher'} onClick={() => handleClickTab('product-about')}
                    className={'col-4 px-1 col-xl-12 text-center font-13 cursor-pointer tab-switcher-item py-3 active-tab-switcher'}>About
                    This product
                </div> : null} */}
                   {productDescriptionContent !== '' && productDescriptionContent != null ? <div id={'product-detail-tab-switcher'} onClick={() => handleClickTab('product-detail')}
                    className={'col-4 px-1 col-xl-12 text-center font-13 cursor-pointer tab-switcher-item py-3 active-tab-switcher'}>{text.DetailedDescription}
                </div> : null}
                {productSpecifications !== '' && productSpecifications != null ? <div id={'product-specifications-tab-switcher'} onClick={() => handleClickTab('product-specifications')}
                    className={'col-4 px-1 col-xl-12 text-center font-13 cursor-pointer tab-switcher-item py-3'}>{text.Specification}
                </div> : null}
             
            </div>
            <div className={'col-12 col-xl-10 tab-content bk-white'}>
                {/* {props.aboutContent !== '' ? <div id={'product-about'} className={'col-12 py-3 px-0 p-xl-5 tab-content-item active-tab'}>
                    <p className={'font-18 c-red mb-4 mt-2'}>{props.productName}</p>
                    <p className={'font-13'}>
                        {props.aboutContent}
                    </p>
                </div> : null} */}
                {productDescriptionContent != '' && productDescriptionContent != null ? <div id={'product-detail'} className={'col-12 py-5 px-0 px-xl-4 tab-content-item active-tab'}>
                    <div className={'col-12 p-4 p-xl-5'}>
                        <p className={'font-18 c-red mb-4 mt-2'}>{props.productName}</p>
                        <span className={'font-13'} dangerouslySetInnerHTML={{ __html: props.productDescription }}></span>
                    </div>
                </div> : null}
                {props.pecificationsContent !== '' && props.pecificationsContent != null ? <div id={'product-specifications'} className={'col-12 col-xl-10 d-flex flex-wrap offset-xl-1 pt-5 pb-4 mb-3 px-0 tab-content-item'}>

                    {props.pecificationsContent.map((content, index) => {
                        return (
                            <div className={'col-12 d-md-flex flex-wrap px-0'}>
                                <div className='col-12 col-md-4 col-xl-2 px-0'>
                                    <div key={index} className={'specifications-title border mb-xl-2 px-3 py-1'}><span className={'font-13'}>{content.title}</span></div>
                                </div>

                                <div className='col-12 col-md-8 col-xl-10 px-0 px-xl-0'>
                                    <div key={index} className={'specifications-content col-12 col-xl-10 border mb-2 py-1 bk-grayD'}><span className={'font-13'}>{content.value}</span></div>
                                </div>
                            </div>
                        );
                    })}
                </div> : null}
          
            </div>
        </div>
        </Tween></Reveal>
    );
}
export default InfoProductTab;