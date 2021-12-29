import $ from 'jquery';
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { isRtl } from './../../../next.config';
import VideoPopUp, { openPopup } from './../common/Popup/VideoPopUp';

const VideoSection = (props) => {
    const [iframSrc, setIframSrc] = useState('')
    const [videoResult, setVideoResult] = useState(false)
    const videoOption = {
        items: 3,
        dots: false,
        nav: true,
        navText: ["<span><i class='fa font-18 fa-chevron-left'></i></span>", "<span><i class='fa font-18 fa-chevron-right'></i></span>"],
        rewind: true,
        smartSpeed: 500,
        rtl: isRtl,
        responsive: {
            1000: {
                items: 3,
            }
        }
    };
    const handleCloseVideoPopUp = () => {
        $('.popup').fadeOut(300);
        setIframSrc('')
    }
    // useEffect(() => {
    //     const ifram = document.querySelector('.video-ifram');
    //     ifram != null ? ifram.onload = function () {
    //         setVideoResult(true)
    //     } : null
    // }, []);
    return (
        <div className='col-12 py-5 px-0'>

            <p className="col-10 offset-1 title-video pl-3 text-white">{props.title}</p>
            {
                props.isMobile
                    ?
                    props.videosData.length > 2 ?
                        <div className='col-12 py-5 overflow-s-x  d-flex px-0'>
                            {props.videosData.map((item, index) => {
                                if (item.videoUrl != null || item.videoUrl.trim() != '') {
                                    return (
                                        <div className="col-12 mw-250">
                                            <div className='col-12 px-0 video-item overflow-hidden cursor-pointer' onClick={() => { openPopup('video-popup'), setIframSrc(item.videoUrl) }}>
                                                <img className='img-fluid all-transition' src={`${item.thumbnailImageUrl == null ? `${props.mockImage}` : `${props.productImageUrl}/${props.productCode}/${item.thumbnailImageUrl}`}`} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                                                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                }


                            })}
                        </div>
                        :
                        <div className='col-12 d-flex justify-content-center  py-5'>
                            {props.videosData.map((item, index) => {
                                if (item.videoUrl != null || item.videoUrl.trim() != '') {
                                    return (
                                        <div className='col-12 px-0 mw-250'>
                                            <div className='col-12 px-0 video-item overflow-hidden cursor-pointer' onClick={() => { openPopup('video-popup'), setIframSrc(item.videoUrl) }}>
                                                <img className='img-fluid all-transition' src={`${item.thumbnailImageUrl == null ? `${props.mockImage}` : `${props.productImageUrl}/${props.productCode}/${item.thumbnailImageUrl}`}`} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                                                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                                                </svg>

                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    :
                    props.videosData.length > 2 ?
                        <div className='col-10 offset-1 py-5'>
                            <OwlCarousel options={videoOption}>
                                {props.videosData.map((item, index) => {
                                    if (item.videoUrl != null || item.videoUrl != '') {
                                        return (
                                            <div className='col-12'>
                                                <div className='col-12 px-0 video-item overflow-hidden cursor-pointer' onClick={() => { openPopup('video-popup'), setIframSrc(item.videoUrl) }}>
                                                    <img className='img-fluid all-transition' src={`${item.thumbnailImageUrl == null ? `${props.mockImage}` : `${props.productImageUrl}/${props.productCode}/${item.thumbnailImageUrl}`}`} />
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                                                        <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                                                    </svg>

                                                </div>
                                            </div>

                                        )
                                    }
                                })}
                            </OwlCarousel>
                        </div>
                        :
                        <div className='col-10 d-flex justify-content-center offset-1 py-5'>
                            {props.videosData.map((item, index) => {
                                if (item.videoUrl != null || item.videoUrl.trim() != '') {
                                    return (
                                        <div className='col-4'>
                                            <div className='col-12 px-0 video-item overflow-hidden cursor-pointer' onClick={() => { openPopup('video-popup'), setIframSrc(item.videoUrl) }}>
                                                <img className='img-fluid all-transition' src={`${item.thumbnailImageUrl == null ? `${props.mockImage}` : `${props.productImageUrl}/${props.productCode}/${item.thumbnailImageUrl}`}`} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70">
                                                    <path id="Path_2897" data-name="Path 2897" d="M37,2A35,35,0,1,0,72,37,35.013,35.013,0,0,0,37,2ZM30,52.75V21.25L51,37Z" transform="translate(-2 -2)" fill="#fff" />
                                                </svg>

                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
            }
            {/* } */}

            <VideoPopUp closePopup={() => { handleCloseVideoPopUp() }} id={'video-popup'} customClass={'col-11 mt-5 px-0 img-gallery-popup'} popupTitle={'props.productName'}>
                {/* {
                    videoResult ? */}
                <div className={'py-3 col-12 d-flex px-0 px-xl-4 flex-wrap'}>
                    <iframe className='col-12 px-0 border-none video-ifram' height='100vh' src={`${iframSrc}?rel=0`}></iframe>
                </div>
                {/* :
                         <div className={'py-3 col-12 d-flex px-0 px-xl-4 flex-wrap'}>
                             <span>please Waite ...</span>
                         </div> */}
                {/* } */}
            </VideoPopUp>
        </div>
    )
}
export default VideoSection;