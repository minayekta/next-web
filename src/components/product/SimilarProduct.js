import { useEffect, useRef, useState } from 'react';
// import { isResSent } from 'next/dist/next-server/lib/utils';
import { Reveal, Tween } from 'react-gsap';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { currentlanguageCode, isRtl } from '../../../next.config';
import Griditem from "../common/Griditem";

var { text } = require('../../components/translate-files/' + currentlanguageCode + '.json');
const SimilarProduct = (props) => {
    const [products, setProducts] = useState([]);
    console.log("props.productItems");
    const startPosition = useRef(0);
    const options = {
        items: 4,
        margin: 0,
        rewind: false,
        nav: true,
        dots: false,
        autoplay: false,
        loop: false,
        rtl: props.status,
        navText: ["<span><i class='fa font-60 c-grayD fa-angle-left'></i></span>", "<span><i class='fa c-grayD font-60 fa-angle-right'></i></span>"],
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
                items: 4,
            },

        },

    };
    useEffect(() => {
        console.log("dasdas");
        setProducts(props.productItems);
    }, []);
    return (
        <div className='col-12 px-0 similar-box-slider bk-white'>
            <Reveal threshold={.001}>
                <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} duration={0.7} ease="easein(.02, 0.1)">

                    {props.productItems.length !== 0 ?
                        <div className='similar-slider d-block  py-4 px-xl-5'>
                            <p className="text-center col-12">{text.Similar_text}</p>
                            {!props.isMobile ?
                                <div className="col-12">
                                    <div className={'row  box-carousel  py-4'}>
                                        {/* <TitlesFieldset titleContent={text.SimilarProducts} titleClass={'font-18 c-black'} /> */}
                                        <OwlCarousel options={options}>
                                            {props.productItems.map((content, index) => {
                                                console.log("iman");
                                                return (
                                                    <Griditem key={index} item={content} id={content.id} classnames={'col-12 d-block border-none gridproduct-detail'} />
                                                )

                                            }

                                            )}
                                        </OwlCarousel>
                                    </div>
                                </div> :
                                <div className="col-12 px-0 overflow-s-x">
                                    <div className='col-12 py-5 d-flex '>
                                        {props.productItems.map((content, index) => {
                                            return (
                                                <div className=' col-8 col-md-4 col-lg-3 px-0'><Griditem key={index} item={content} id={content.id} classnames={`col-12 d-block border-none ${isRtl ? 'text-right' : ''} gridproduct-detail px-2`} /></div>

                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div> : <div></div>}


                </Tween>
            </Reveal>
        </div>
    );
}
export default SimilarProduct;