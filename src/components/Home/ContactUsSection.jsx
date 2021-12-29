import $ from "jquery";
import { Fragment, useEffect } from "react";
import { currentlanguageCode, internationalAssets, isRtl } from '../../../next.config';

var { text } = require('../translate-files/' + currentlanguageCode+ '.json');
const ContactUsSection = () => {
  useEffect(() => {
    let vid = $("#vid")[0];
  }, []);

  return (
    <Fragment>
      <div className='row'>
        <div className='col'>
          <div id='backDiv'>
            <video id='vid' tabIndex='0' autoPlay muted loop>
              {/* <source type='video/mp4;codecs="avec.42E01E, mp4a.40.2"' src="./assets/img/drills/Drill Animation.mp4"></source> */}
              <source
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                src={`${internationalAssets}/video/angle-grinder_low.mp4`}></source>
              p Sorry, your browser does not support the &lt;video&gt; element.
            </video>
            <div className={`textInVideo ${isRtl?'rtl':''}`}>
              <h3 className='contactUsHeader'>{text.AboutRonixToolsCompany}</h3>
              <p className='contactUsP'>
                {text.AboutRonixText}
              </p>
              <a target='_blank' href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`} className='btn btn-light contactUsBtn' >
              {text.ContactUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUsSection;
