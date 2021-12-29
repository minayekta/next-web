import Link from "next/link";
import { Children, Fragment, useEffect } from "react";
import { currentlanguageCode, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const FooterSection = ({ footerData }) => {
  useEffect(() => {
    console.log(footerData);
  }, [])

  return (
    // <Fragment>
    //   <div className='row'>
    //     <div className='col'>
    //               <div className='footerContainer'>

    //      </div>
    //     </div>
    //   </div>
    // </Fragment>
    <footer id='footer' className={`footer-1 col-12 px-0 ${isRtl ? 'rtl' : ''}`}>
      <div className='main-footer col-12 px-0 widgets-dark typo-light'>
        <div className='container'>
          <div className={`col-12 px-0 d-flex flex-wrap ${isRtl ? 'rtl-content' : ''}`}>
            {Children.toArray(
              footerData && footerData.length != 0 ? footerData.map((item, index) =>
                item.contactInfoList && item.contactInfoList.length == 0 ?
                  <div className='col-12 col-sm-6 px-0 col-md-6 col-xl-2 footer_tablet_topMargin' key={index}>
                    <div className='widget subscribe no-box '>
                      {item.subFooters.map((link, index2) =>
                        <Link href={`${link.url}`} key={index2}>
                          <a className='footerLinks'>
                            <p className={`widget-title text-center ${isRtl ? 'text-md-right' : 'text-md-left'}`}>{link.title}</p>
                          </a>
                        </Link>
                      )}

                    </div>
                  </div>
                  : <div className='col-xs-12 col-sm-12 col-xl-3 socialMediaContainer'>
                    <div className='widget no-box'>
                      <ul className='social-footer2 justify-content-center'>
                        {Children.toArray(
                          footerData && footerData.length != 0 ? footerData.map((item, index) =>
                            <Fragment>
                              {item.contactInfoList && item.contactInfoList.length != 0 ? item.contactInfoList.map((socialItem, socialIndex) =>
                                <li className={`${socialItem.title}`} key={socialIndex}>
                                  <Link href={socialItem.value}>
                                    <a target='_blank' title={socialItem.title}>
                                      <i className={`fa fa-${socialItem.title} `}></i>
                                    </a>
                                  </Link>
                                </li>) : null}
                            </Fragment>
                          ) : null
                        )}
                      </ul>
                    </div>
                  </div>
              )

                : null)}
            {/* <div className='col-xs-12 col-sm-6 col-md-3 socialMediaContainer'>
              <div className='widget no-box'>
                <ul className='social-footer2'>
                  {footerData && footerData.length != 0 ? footerData.map((item, index) =>
                    <Fragment>
                      {item.contactInfoList && item.contactInfoList.length != 0 ? item.contactInfoList.map((socialItem, socialIndex) =>
                        <li className={`${socialItem.title}`} key={socialIndex}>
                          <Link href={socialItem.value}>
                            <a target='_blank' title={socialItem.title}>
                              <i className={`fa fa-${socialItem.icon} `}></i>
                            </a>
                          </Link>
                        </li>) : null} */}

            {/* <li className='facebook'>
                        <a
                          href={text.FaceBookLink} target='_blank' title='Facebook'>
                          <i className='fa fa-facebook'></i>
                        </a>
                      </li>
                      <li className='facebook'>
                        <a
                          href={text.PinterestLink} target='_blank' title='Facebook'>
                          <i className='fa fa-pinterest-square'></i>
                        </a>
                      </li>
                      <li className='facebook'>
                        <a
                          href={text.TwitterLink} target='_blank' title='Facebook'>
                          <i className="fa fa-twitter-square" aria-hidden="true"></i>

                        </a>
                      </li>
                      <li className='instagram'>
                        <a
                          href={text.InstagramLink} target='_blank' title='Instagram'>
                          <i className='fa fa-instagram' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li className='youtube'>
                        <a
                          href={text.YouTubeLink} target='_blank' title='Youtube'>
                          <i className='fa fa-youtube' aria-hidden='true'></i>
                        </a>
                      </li> */}
            {/* </Fragment>
                  ) : null}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        
      </div>
      <div className="text-center main-footer bk-grayB mt-5">
         <Link href="/privacy-policy"><a className="text-decoration-none font-16">Provicy Policy</a></Link><span className="text-white"> ---  All Rights Reserved</span></div>
    </footer >

    // <footer id='footer' className={`footer-1 col-12 px-0 ${isRtl ? 'rtl' : ''}`}>
    //   <div className='main-footer col-12 px-0 widgets-dark typo-light'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-xs-12 col-sm-6 col-md-2'>
    //           <div className='widget subscribe no-box'>
    //             <Link href={`${assetPrefix}/`}>
    //               <a className='footerLinks'>
    //                 <h5 className='widget-title'>{text.Home}</h5>
    //               </a>
    //             </Link>
    //             <Link href={`${assetPrefix}/all-products`}>
    //               <a className='footerLinks'>
    //                 <h5 className='widget-title'>{text.AllProducts}</h5>
    //               </a>
    //             </Link>

    //             <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/company/#about-us`} className='footerLinks'>
    //               <h5 className='widget-title'>{text.AboutUs}</h5>
    //             </a>

    //             {currentlanguageCode === 'en' ?
    //               <a target={'_blank'} href={`https://ronixtools.com/landing/top-rated-pages/`} className='footerLinks'>
    //                 <h5 className='widget-title'>Top-Rated Pages</h5>
    //               </a> : null}

    //           </div>
    //         </div>

    //         <div className='col-xs-12 col-sm-6 col-md-2'>
    //           <div className='widget no-box'>
    //             <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/company/`} className='footerLinks'>
    //               <h5 className='widget-title'>{text.CompanyProfile}</h5>
    //             </a>
    //             <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/company/contact-us/`} className='footerLinks'>
    //               <h5 className='widget-title'>{text.ContactUs}</h5>
    //             </a>
    //           </div>
    //         </div>

    //         <div className='col-xs-12 col-sm-6 col-md-2'>
    //           <div className='widget no-box'>
    //             <a href='/under-construction' className='footerLinks'>
    //               <h5 className='widget-title'>{text.OurPolicies}</h5>
    //             </a>
    //             <a href='/under-construction' className='footerLinks'>
    //               <h5 className='widget-title'>{text.PrivacyStatement}</h5>
    //             </a>
    //             <a href='/under-construction' className='footerLinks'>
    //               <h5 className='widget-title'>{text.CookiesPolicies}</h5>
    //             </a>
    //           </div>
    //         </div>
    //         <div className='col-xs-12 col-sm-6 col-md-3'>
    //           <div className='widget no-box'>
    //             <a href={`https://ronixtools.com/${currentlanguageCode}/blog/`} className='footerLinks'>
    //               <h5 className='widget-title'>{text.Blog}</h5>
    //             </a>
    //             <a target={'_blank'} href={`https://ronixtools.com/${currentlanguageCode}/news/`} className='footerLinks'>
    //               <h5 className='widget-title '>{text.News}</h5>
    //             </a>
    //           </div>
    //         </div>

    //         <div className='col-xs-12 col-sm-6 col-md-3 socialMediaContainer'>
    //           <div className='widget no-box'>
    //             {/* <h5 className='widget-title'>Subscribe to our newsletter</h5>
    //             <div className='inputWithIcon'>
    //               <i className='fa fa-arrow-right icon'></i>
    //               <input
    //                 type='text'
    //                 className='subscribeEmail'
    //                 placeholder='Email Address'
    //               />
    //             </div> */}

    //             <ul className='social-footer2'>

    //               <li className='whatsapp'>
    //                 <a href={text.LinkedinLink} target='_blank' title='linkedin'>
    //                   <i className='fa fa-linkedin '></i>
    //                 </a>
    //               </li>

    //               <li className='facebook'>
    //                 <a
    //                   href={text.FaceBookLink} target='_blank' title='Facebook'>
    //                   <i className='fa fa-facebook'></i>
    //                 </a>
    //               </li>
    //               <li className='facebook'>
    //                 <a
    //                   href={text.PinterestLink} target='_blank' title='Facebook'>
    //                   <i className='fa fa-pinterest-square'></i>
    //                 </a>
    //               </li>
    //               <li className='facebook'>
    //                 <a
    //                   href={text.TwitterLink} target='_blank' title='Facebook'>
    //                   <i className="fa fa-twitter-square" aria-hidden="true"></i>

    //                 </a>
    //               </li>
    //               <li className='instagram'>
    //                 <a
    //                   href={text.InstagramLink} target='_blank' title='Instagram'>
    //                   <i className='fa fa-instagram' aria-hidden='true'></i>
    //                 </a>
    //               </li>

    //               <li className='youtube'>
    //                 <a
    //                   href={text.YouTubeLink} target='_blank' title='Youtube'>
    //                   <i className='fa fa-youtube' aria-hidden='true'></i>
    //                 </a>
    //               </li>

    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default FooterSection;
