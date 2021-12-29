import React from 'react';
import VideoYoutube from '../Home/VideoYoutube';
import {internationalAssets} from '../../../next.config';

const SectionEight = () => {
    return (
        <div className="vh-100 align-items-center sectioneight justify-content-center d-flex">
            <div className="position-absolute col-8 h-75 d-flex justify-content-center align-items-center ">
                <div className="d-flex flex-wrap justify-content-center sectioneight-box position-absolute  col-10">
                    <span className=" text-dark title-font  font-47 font-weight-bold Reglo pt-5">CORDLESS ACCESSORIES</span>
                    <img src={`${internationalAssets}/img/Batteryend.svg`} alt="" className="my-3 img-fluid col-10" />
                    <p className=" font-weight-bold font-13  text-justify">
                        As cordless tools improve in quality and quantity, more and more accessories are built for them. Various attachments are made to make working with them easier; attachments like drill bits and power bits.
                        Batteries and chargers also count as really useful accessories. A lot can happen to a battery. You cannot just through your cordless tool away because the battery is damaged. The same is true for chargers. This is why Ronix produces spare batteries and chargers for its cordless tools.                         </p>
                </div>
                {/* <img src="/assets/img/Batteryend.svg" alt="" className="my-3 col-10  sectioneight-box1" /> */}
                <div className="my-3 col-10  sectioneight-box1">
                <VideoYoutube Src='https://www.youtube.com/embed/tyVIIC7rzZ4' />
                
                    
</div>
            </div>
        </div>
    )
}

export default SectionEight;