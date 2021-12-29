import React from 'react';


const CompanySection = () => {
    return (
        <div className="companysection-body row m-0">
            <div className="col-md-12 d-flex justify-content-center">
                <img className="companysection-german" src={`${internationalAssets}/img/German.jpg`} alt="" />
                <img className="companysection-chine" src={`${internationalAssets}/img/chine.jpg`} alt="" />
                <img className="companysection-Iran" src={`${internationalAssets}/img/Iran.jpg`} alt="" />

                <span className="companysection-title">Europe Office</span>
                <span className="companysection-Chine-title">Asia Office</span>
                <span className="companysection-Iran-title">Middle-East Office</span>
            </div>
        </div>
    )
}

export default CompanySection;