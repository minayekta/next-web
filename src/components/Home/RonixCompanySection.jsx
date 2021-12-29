import $ from 'jquery';
import { Fragment, useEffect } from 'react';
import { currentlanguageCode, internationalAssets } from '../../../next.config';

var { text } = require('../translate-files/' + currentlanguageCode+ '.json');
const RonixCompanySection = ({ isMobileView }) => {
    useEffect(() => {
        $('.ronixcompanysection-image , .custom-btn').mouseover(() => {
            $('.ronixcompanysection-image').css({ opacity: .8 })
            $('.custom-btn').css({ opacity: 1 })
        })
        $('.ronixcompanysection-image').mouseleave(() => {
            $('.ronixcompanysection-image').css({ opacity: 1 })
            $('.custom-btn').css({ opacity: 0 })
        })
    }, []);
    return (
        <Fragment>
 {isMobileView?
        <Fragment>
            <section className="ronixcompanysection-mobile  d-flex justify-content-center align-items-center overflow-hidden ">
                <div className="ronixcompanysection-mobile-box-title d-flex text-center flex-wrap col-md-12 position-relative">
                    <div className="col-12  ronixcompanysection-mobile-text">
                       {text.RonixTools}
                      </div>
                    <div className="col-12 text-white ronixcompanysection-mobile-text-company">
                    {text.Company}
                     </div>
                </div>
            </section>
            <section className="ronixcompanysection-mobile-two py-3  d-flex justify-content-center align-items-center flex-wrap">
                <div className="col-md-12">
                    <div className="col-md-12 ronixcompanysection-mobile-header-title text-center text-white">{text.RonixToolsCompany}</div>
                    <div className="ronixcompanysection-mobile-img col-md-12">
                        <img src={`${internationalAssets}/img/company.jpg`} className="col-md-12 ronixcompanysection-mobile-image px-0 py-3" alt="" />

                    </div>
                    <p className="col-md-12 ronixcompanysection-mobile-paragraph text-white">
                       {text.RonixCompanyText}
             </p>
                    <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/company/`} className="custom-btn">{text.SeeMore}</a>
                </div>
            </section>
            </Fragment>
            :
            <Fragment>

            <section className="ronixcompanysection d-xl-flex justify-content-center align-items-center overflow-hidden  ">
                <div className="ronixcompanysection-box-title d-flex text-center flex-wrap col-md-12 position-relative">
                    <div className="col-12  ronixcompanysection-text">
                        {text.RonixTools} 
        </div>
                    <div className="col-12 text-white ronixcompanysection-text-company">
                        {text.Company}
        </div>
                    <div className="col-md-12  ronixcompanysection-backtextone">{text.Company}</div>
                    <div className="col-md-12  ronixcompanysection-backtexttwo"> {text.Tools}</div>
                    <div className="col-md-12 ronixcompanysection-header-title text-center text-white">{text.RonixToolsCompany}</div>
                    <div className="ronixcompanysection-img col-md-12">
                        <img src={`${internationalAssets}/img/company.jpg`} className="col-md-5 ronixcompanysection-image" alt="" />
                        <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/company/`} className="custom-btn">{text.SeeMore}</a>
                    </div>
                    <p className="col-md-12 ronixcompanysection-paragraph w-50 text-white">
                    {text.RonixCompanyText}
            </p>
                </div>
            </section>
            <section className="ronixcompanysection-two">

            </section>

        </Fragment>}


        </Fragment>
       
    )
}
export default RonixCompanySection;