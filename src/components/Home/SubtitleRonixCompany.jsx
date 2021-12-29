import React from 'react';
import { internationalAssets } from '../../../next.config';

const SubtitleRonixCompany = () => {
    return (
        <section className=" w-100 align-items-center row subtitleronixcompany-body p-2 m-0">
            <div className="container">
                <div className="subtitleronixcompany-text-ronixcompany col-md-12 d-flex justify-content-center">
                    <img src={`${internationalAssets}/img/RonixCompany.svg`} alt="" />
                </div>
                <div className="  subtitleronixcompany-image col-md-12 d-flex justify-content-center">
                    <div className="subtitleronixcompany-box-test">

                    </div>
                    {/* <img src="" alt=""/> */}
                </div>
                <div className="col-md-12 d-flex justify-content-center py-3">
                    <p className=" text-white subtitleronixcompany-description">
                        Since 2005, Ronix has become a leading tools company in the Middle East and an international brand, specializing in manufacturing a wide variety of professional tools. Currently, the company has offices in Europe (Germany) and China.
                        Over the past 15 years, Ronix has developed more than 2,000 different types of tools, all lovingly crafted with Ronix’s undisputed and world-class standards.
                </p>
                </div>
            </div>
        </section>
    )
}

export default SubtitleRonixCompany;