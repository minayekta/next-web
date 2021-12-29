import Config, { assetPrefix ,isRtl} from '../../../next.config';
import { Reveal, Tween } from 'react-gsap';
import { Fragment } from 'react';


const Feature = ({ productCode, images, FeaturesItem, isMobile }) => {
    const Images = images;

    return (

        isMobile
            ?
            <div className="col-12 px-0 bg-redA d-inline-block d-lg-flex equal feature overflow-hidden">

                <div className="col-12 col-lg-4 px-0 feature-background-mobile" style={{ 'z-index': '1', 'backgroundImage': 'url(' + `${assetPrefix}/_next/image?url=${Config.productImageUrl + '/' + productCode + '/' + Images[1]?.originalImagUrl}&w=640&q=80` + ')' }}>
                </div>
                <div className="col-12 col-lg-8  d-flex justify-content-center align-items-center pt-3">
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'translateX(200px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                            <div className="background_feature_1"><img src={`${assetPrefix}/assets/img/back_red1.svg`} alt="" /></div>
                        </Tween>
                    </Reveal>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'translateX(200px) rotate(180deg) rotateX(180deg)' }} to={{ opacity: 1, transform: 'translateX(0px) rotate(180deg) rotateX(180deg)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                            <div className="background_feature_2"><img src={`${assetPrefix}/assets/img/Triangle2.svg`} alt="" /></div>
                        </Tween>
                    </Reveal>
                    <ul className='font-13 feature-item ' dangerouslySetInnerHTML={{ __html: FeaturesItem }}></ul>
                </div>
            </div>
            :
            <div className="col-12 px-0 bg-redA  d-flex equal feature overflow-hidden">


                
<Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'rotate(-10deg)' }} to={{ opacity: 1, transform: 'rotate(0deg)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                            <div className="col-6 px-0 feature-background" style={{ 'z-index': '1', 'backgroundImage': 'url(' + `${assetPrefix}/_next/image?url=${Config.productImageUrl + '/' + productCode + '/' + Images[1]?.originalImagUrl}&w=640&q=80` + ')' }}>
                </div>
                            </Tween>
                    </Reveal>
                <div className={`${isRtl?'pl-5':'pr-5'} col-6 pl-0 d-flex justify-content-center align-items-center`}>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'translateX(200px)' }} to={{ opacity: 1, transform: 'translateX(0px)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                            <div className="background_feature_1"><img src={`${assetPrefix}/assets/img/back_red1.svg`} alt="" /></div>
                        </Tween>
                    </Reveal>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'translateX(200px) rotate(180deg) rotateX(180deg)' }} to={{ opacity: 1, transform: 'translateX(0px) rotate(180deg) rotateX(180deg)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                            <div className="background_feature_2"><img src={`${assetPrefix}/assets/img/Triangle2.svg`} alt="" /></div>
                        </Tween>
                    </Reveal>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'scale(0.96)' }} to={{ opacity: 1, transform: 'scale(1)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                        <ul  className={`${isRtl?'pl-5':'pr-5'} font-13 feature-item pt-4`} dangerouslySetInnerHTML={{ __html: FeaturesItem }}></ul>
                    </Tween>
                    </Reveal>
                            
                </div>

            </div>

    )
}
export default Feature;