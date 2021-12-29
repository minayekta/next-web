import loadable from '@loadable/component';
import Link from 'next/link';
import { Children, useEffect, useState } from 'react';
import { currentlanguageCode, imageOptimizeServerUrl, internationalAssets, isRtl } from '../../../next.config';

const OwlCarousel = loadable(() => import('react-owl-carousel2'));
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const ContentSlider = (props) => {
    const [owlCar, setOwlCar] = useState(null);




    return (
        <div className={`col-12 news d-xl-flex px-0 bk-white `}>
            <div className={`col-12 col-xl-4 order-2 bg-white d-xl-flex px-xl-5 align-items-center ${isRtl ? 'rtl' : ''}`}>
                <div className={`col-12 pt-4 pt-xl-0 px-0  ${isRtl ? 'px-xl-3' : ''}`}>
                    <span className={` c-red font-weight-bold font-47 `}>{props.title}</span>
                    <p className={`font-13 text-justify pr-0 line-height-2 ${isRtl ? '' : ''}`}>{props.text}</p>
                    <a href={props.link} className={`px-4 cursor-pointer py-2 mt-4 d-inline-block btn-red bk-red border-r-4 font-14 c-white`}>
                        <span className='c-white'>

                            {text.ViewMore}
                        </span>
                    </a>
                </div>
            </div>
            <div className='col-12 px-0 pt-5 pt-xl-0 d-xl-none overflow-s-x pb-4'>
                <div className='col-12 px-0 d-flex'>
                    {Children.toArray(

                        props.res?.map((item, index) => {
                            return (
                                <Link href={item.link}>
                                    <a className="col-9 news-item" href={item.link}>

                                    </a>
                                </Link>
                            )
                        })
                    )}
                </div>
            </div>
            <div className="home-slider d-none d-xl-flex align-items-center order-1 col-12 col-xl-8 p-xl-5 back-slider-img" style={{ "backgroundImage": `url(${imageOptimizeServerUrl}/_next/image?url=${internationalAssets}/img/powertools.jpg&w=1920&h=undefined&q=5)` }}>
                <div className='col-12 my-5'>
                    <MyOwl res={props.res} />
                </div>
            </div>
        </div>
    )
}

export default ContentSlider;

const MyOwl = (props) => {
    const options = {
        items: 3,
        loop: true,
        autoplay: false,
        nav: true,
        dots: false,
        rtl: isRtl,
        navText: ["<span><i class='fa c-grayD font-22 fa-chevron-left'></i></span>", "<span><i class='fa c-grayD font-22 fa-chevron-right'></i></span>"],
        responsive: {
            300: {
                items: 1,
            },
            400: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1280: {
                items: 3,
            },

        },
    };
    useEffect(() => {

    }, [props.res]);
    return (<OwlCarousel options={options}>
        {Children.toArray(

            props.res?.map((item, index) => {
                return (
                    <a target={'_blank'} className={'col-12 d-flex flex-wrap cart-news justify-content-center px-0'} rel='noopener' href={item.link}>
                        <div className={`col-12 news-item cursor-pointer ${isRtl ? 'rtl' : ''}`}>
                            {item._embedded['wp:featuredmedia'] ? <img  width={270} height={180} quality={70}  className="img-fluid  border-r-4" src={`${item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}`} alt="" /> : null}
                            <span className="text-dark title d-block my-3 font-weight-bold font-13 col-12 px-0"><span dangerouslySetInnerHTML={{ __html: item.title }}></span></span>
                            {/* <p className="font-13 "><span dangerouslySetInnerHTML={{ __html: item.excerpt.rendered.substring(0, 100) }} /></p> */}
                            <a className="viewMoreLink font-12 col-12 px-0" href={item.link}>{text.ViewMore}</a>
                        </div>
                    </a>
                )
            })
        )}
    </OwlCarousel>);
}

