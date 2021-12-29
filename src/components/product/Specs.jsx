import loadable from '@loadable/component';
import $ from 'jquery';
import Image from 'next/image';
import { useContext } from 'react';
import { Reveal, Tween } from 'react-gsap';
import 'react-owl-carousel2/lib/styles.css';
import Config from '../../../next.config';
import VideoPopUp, { openPopup } from '../common/Popup/VideoPopUp';
import WebSiteContext from '../Context/WebSiteContext';
import ImgGallery from '../NewProduct/ImgGallery';
const OwlCarousel = loadable(() => import('react-owl-carousel2'));
const Specs = (props) => {
    const images = props.images;
    const context = useContext(WebSiteContext)
    const options = {
        items: 4,
        loop: false,
        autoplay: false,
        nav: true,
        dots: false,
        rtl: props.status,
        navText: ["<span><i class='fa c-grayB font-60 fa-angle-left'></i></span>", "<span><i class='fa c-grayB font-60 fa-angle-right'></i></span>"],
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
    const handleCloseVideoPopUp = () => {
        $('.popup').fadeOut(300);
    }

    return (
        <div className="col-12 bg-BlackA px-0">
            {
                props.isMobile
                    ?
                    <div className="overflow-s-x">
                        <div className="col-12 py-5 d-flex ">
                            {images.filter(p => p.imageType != 'Modeling').map((item, index) =>{
                            
                            
                            return(
                                <div className="col-12 mw-250" data-show={index}>
                                    <Image width={214} height={214} quality={80} loading={"eager"} className="img-fluid cursor-pointer border-raduis" src={Config.productImageUrl + '/' + props.Productcode + '/' + item.originalImagUrl} alt={`${item.imageAlt}`} />
                                </div>)
                            })}
                        </div>
                    </div>
                    :

                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} duration={0.7} ease="easein(.02, 0.1)">

                            <div className="container px-0"  >
                                {
                                    <div className="col-8 offset-2 py-5">
                                        <OwlCarousel options={options}>

                                            {images.filter(p => p.imageType != 'Modeling').map((item, index) => {
                                                return (

                                                    <div style={{ 'height': '214px' }} className="col-12 text-center" data-show={index} onClick={(e) => { openPopup('specs-popup'); context.setCounter(index); }}>
                                                        <Image width={214} height={214} quality={80} loading={"eager"} className="img-fluid cursor-pointer border-raduis" src={Config.productImageUrl + '/' + props.Productcode + '/' + item.originalImagUrl} alt={`${item.imageAlt}`} />
                                                    </div>)
                                            })}
                                        </OwlCarousel>
                                    </div>
                                }
                            </div>
                        </Tween>
                    </Reveal>
            }
            {!props.isMobile ? <VideoPopUp closePopup={() => { handleCloseVideoPopUp() }} id={"specs-popup"} customClass={'col-6 px-0 '}> <ImgGallery Productcode={props.Productcode} data={images.filter(p => p.imageType != 'Modeling')} /></VideoPopUp> : null}
        </div>
    )
}

export default Specs;