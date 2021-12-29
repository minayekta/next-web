import loadable from '@loadable/component';
import Link from 'next/link';
import { Children, Fragment, useEffect, useState } from 'react';
import { currentlanguageCode, imageOptimizeServerUrl, internationalAssets, isRtl } from '../../../next.config';

const OwlCarousel = loadable(() => import('react-owl-carousel2'));

var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const options = {
    items: 1,
    rtl: false,
    loop: true,
    nav: true,
    rtl: isRtl,
    navText: ["<span><i class='fa font-22 c-grayD fa-chevron-left'></i></span>", "<span><i class='fa c-grayD font-22 fa-chevron-right'></i></span>"],
    autoplay: false,
};
const MagSection = (props) => {
    const [array, setArray] = useState()
    const [owlCar, setOwlCar] = useState();
    useEffect(() => {

        let arr = [];
        arr[0] = props.res.slice(0, 3);
        arr[1] = props.res.slice(3, 6);
        arr[2] = props.res.slice(6, 9)
        console.log(props.res);
        setArray(arr);
        setOwlCar(
            <OwlCarousel options={options}>
                {Children.toArray(
                    arr.map((item, index) =>
                        <div className='col-12' data={index}>
                            {arr[index].length != 0 ? <Fragment>
                                <div className={'col-4 px-0'}>
                                    <Link href={`${arr[index][0].link}`}>
                                        <a href={`${arr[index][0].link}`}>
                                            <div className={'col-12 px-0 mb-4'}>
                                                <div className='col-12 px-0'>
                                                    {arr[index][0]._embedded['wp:featuredmedia'][0].media_details.sizes['jannah-image-large'] == undefined ? <img width={375} height={211} quality={60} className='border-r-4 img-fluid' src={`${arr[index][0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}`} /> : <img width={375} height={211} quality={60} className='border-r-4 img-fluid' src={`${arr[index][0]._embedded['wp:featuredmedia'][0].media_details.sizes['jannah-image-large'].source_url}`} />}

                                                </div>
                                            </div>
                                        </a>

                                    </Link>

                                    {arr[index][1] && <Link href={`${arr[index][1]?.link}`}>

                                        <a href={`${arr[index][1]?.link}`}>
                                            <div className={'col-12 px-0 mt-2 pt-2'}>
                                                <div className='col-12 px-0'>
                                                    {arr[index][1]?._embedded['wp:featuredmedia'][0].media_details.sizes['jannah-image-large'] == undefined ? <img width={375} height={211} className='border-r-4 img-fluid' src={`${arr[index][1]?._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}`} /> : <img width={375} height={211} quality={60} className='border-r-4 img-fluid' src={`${arr[index][1]?._embedded['wp:featuredmedia'][0].media_details.sizes['jannah-image-large'].source_url}`} />}
                                                </div>
                                            </div>
                                        </a>

                                    </Link>}

                                </div>
                                {arr[index][2] && <Link href={`${arr[index][2]?.link}`}>

                                    <a href={`${arr[index][2]?.link}`}>
                                        <div className={'col-8 pr-0 pl-5'}>

                                            <img width={701} height={422} quality={60} className='border-r-4 img-fluid' src={`${arr[index][2]?._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}`} />
                                        </div>
                                    </a>
                                </Link>}
                            </Fragment> : null}

                        </div>)

                )}

            </OwlCarousel>
        )
    }, [props.res]);
    const handleClickSlide = (id, text) => {
        if (!jQuery('#main-img-' + id).hasClass('active')) {
            jQuery('.main-img').removeClass('active')
            jQuery('#main-img-' + id).addClass('active')
            jQuery('.text-active-slider').fadeOut(0).text(text).fadeIn(700)
        }
    }
    return (
        <div className='col-12 px-0  mag-section bk-grayA'>
            <div className='col-12 news d-xl-flex px-0 bk-white' >
                <div className={`col-12 col-xl-4 order-2  d-xl-flex px-xl-5 align-items-center ${isRtl ? 'rtl' : ''}`}>
                    <div className={`col-12 pt-4 pt-xl-0 px-0   ${isRtl ? 'px-xl-3' : ''}`}>
                        <span className={` c-red font-weight-bold font-47`}>{props.title}</span>
                        <p className={`font-13 text-justify line-height-2`}>{props.text}</p>
                        <a href={props.link} className={`px-4 cursor-pointer py-2 mt-4 d-inline-block btn-red bk-red border-r-4 font-14 c-white`}>
                            <span className='c-white '>
                                {text.ViewMore}
                            </span>
                        </a>
                    </div>
                </div>
                <div className='col-12 px-0 pt-5 pt-xl-0 d-xl-none overflow-s-x pb-4'>
                    <div className='col-12 px-0 d-flex'>
                        {Children.toArray(


                            props.res?.map((item, index) => {
                                return (<div key={index} className="col-9 news-item">
                                    <Link href={item.link}>
                                        <a href={item.link}>
                                            {item._embedded['wp:featuredmedia'] ? <img className="img-fluid  border-r-4" src={`${item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}`} alt="" /> : null}
                                        </a>
                                    </Link>

                                    <Link href={item.link}>

                                        <span className="text-dark d-block mt-3 font-weight-bold font-13"><span dangerouslySetInnerHTML={{ __html: item.title.rendered }}></span></span>
                                    </Link>

                                    {/* <Link href={item.link}>

                                    <p className="font-13 "><span dangerouslySetInnerHTML={{ __html: item.excerpt.rendered.substring(0, 100) }} /></p>
                                </Link> */}

                                    <Link href={item.link}>
                                        <a href={item.link} className="viewMoreLink font-12">{text.ViewMore}</a>
                                    </Link>
                                </div>)
                            })
                        )}
                    </div>
                </div>
                <div className='home-slider d-none d-xl-flex align-items-center order-1 col-12 col-xl-8 p-xl-5 back-slider-img' style={{ "backgroundImage": `url(${imageOptimizeServerUrl}/_next/image?url=${internationalAssets}/img/industrial.jpg&w=1920&h=undefined&q=5)` }}>
                    {props.res.length == 0 ? null :
                        <div className="  col-12 mt-5 mb-4 pb-4">
                            {owlCar}
                        </div>}
                </div>


            </div>        </div>
    )
}
export default MagSection;