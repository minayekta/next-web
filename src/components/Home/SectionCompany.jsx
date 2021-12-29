import Image from 'next/image';
import { Reveal, Tween } from 'react-gsap';
import { assetPrefix, currentlanguageCode, imageOptimizeServerUrl, internationalAssets, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const SectionCompany = () => {
    const myLoader = ({ src, height, width, quality }) => {
        return `${imageOptimizeServerUrl}/_next/image?url=${src}&w=${width}&h=${height}&q=${quality || 70}`
    }
    return (
        <section className={`back-image col-12 company-section px-0 py-5 overflow-h ${isRtl ? 'rtl-content' : ''}`}>
            <div className="container px-0 text-center" >
                <div className={`col-xl-8 col-12 content-company offset-xl-2`}>
                    <p className={`${isRtl ? 'rtl' : ''} col-12 m-auto px-0 text-center text-white letter-Space title font-weight-bold`}>
                        {currentlanguageCode === 'fr' || currentlanguageCode === 'es' ?
                            <>
                                <span className='d-block'>{text.Company}</span>
                                <span className='d-block'>{text.RonixTools}</span>
                            </>
                            :

                            text.RonixToolsCompany

                        }
                    </p>
                    {/* <img className="col-12 mt-3 px-0 img-fluid " src={`${assetPrefix}/assets/img/company.svg`} alt="" /> */}
                    {/* <img className="col-12 mt-3 px-0 img-fluid " src={`${internationalAssets}/img/company-section-blur.jpg`} alt="" /> */}
                    <div className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-12 offset-xl-0 mt-3 px-0'>
                        <Image className="img-fluid" src={`${internationalAssets}/img/company-section.jpg`} alt="" placeholder={"blur"} blurDataURL={`${internationalAssets}/img/company-section-blur.jpg`} width={1083} height={603}  quality={70}/>
                    </div>
                    <div className={`col-12 m-auto px-0 ${isRtl ? 'rtl ' : ''}`}>
                        <p className={`${isRtl ? 'text-xl-right' : 'text-xl-left'} px-0 text-white mt-4 font-13 text-justify line-height-2`}>{text.CompanyDescription}</p>
                    </div>
                    <div className={`col-12 ${isRtl ? 'rtl ' : ''} px-0 m-auto`}>
                        <a href={`https://ronixtools.com/${currentlanguageCode}/company`} className='px-4 cursor-pointer py-2 mt-4 d-inline-block bg-white bk-red border-r-4 font-14 c-white'>
                            <span className='c-red '>
                                {text.ViewMore}
                            </span>
                        </a></div>
                </div>
            </div>
            <Reveal threshold={.5} >
                <Tween from={{ transform: 'translate(200px,0)' }} to={{ transform: 'translate(0px , 0)' }} stagger={.3} duration={1} ease="in(.2, 0.1)" >
                    <img src={`${assetPrefix}/assets/img/back_1.svg`} className="back_1_style" alt="" />
                </Tween>
            </Reveal>
            <Reveal threshold={.5} >
                <Tween from={{ transform: 'translate( 0,200px)' }} to={{ transform: 'translate(0px , 0)' }} stagger={.8} duration={1.5} ease="in(.2, 0.1)" >
                    <img src={`${assetPrefix}/assets/img/back_2.svg`} className="back_2_style" alt="" />
                </Tween>
            </Reveal>
            <Reveal threshold={.5} >
                <Tween from={{ transform: 'translate(-300px,0)' }} to={{ transform: 'translate(0px , 0)' }} stagger={.5} duration={1} ease="in(.2, 0.1)" >
                    <img src={`${assetPrefix}/assets/img/back_3.svg`} className="back_3_style" alt="" />
                </Tween>
            </Reveal>
        </section>
    )
}

export default SectionCompany;