import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from 'framer-motion';
import $ from 'jquery';
import Head from "next/head";
import { useRouter } from 'next/router';
import { Fragment, useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { isMobile } from 'react-device-detect';
import 'react-owl-carousel2/lib/styles.css';
import { v4 as uuid4 } from 'uuid';
import { assetPrefix, currentlanguageCode, isRtl } from '../../../next.config';
import WebSiteContext from "../Context/WebSiteContext";
import FooterSection from '../Home/FooterSection';
import CircleSlider from '../HomePage/CircleSlider/CircleSlider';
import TopNavigation from "../Navigation/TopNavigation/TopNavigation";
import { FooterGetFooterByName } from "../Services/FooterService";
const Layout = ({ children, stars }) => {
  const [cookies, setCookie] = useCookies(['ronix']);
  const [logoScripts, setLogoScripts] = useState();
  const [footerData, setFooterData] = useState();
  const router = useRouter();
  const context = useContext(WebSiteContext)


  const getFooterData = async () => {
    const body = {
      text: `${currentlanguageCode}WebsiteFooter`
    }
    const resGetFooterData = await FooterGetFooterByName(body);
    setFooterData(resGetFooterData.data.response);
    console.log(resGetFooterData);
  }


  useEffect(() => {

    getFooterData();
    $('html').attr("lang", currentlanguageCode);
    if (isRtl) {
      $('body').addClass('iransans-font');
    }

    if (cookies.ronix == undefined) {
      setCookie('ronix', uuid4(), { path: '/', sameSite: true });
    }

    async function CallApi() {
      // const res = await GetTranslate();

    }
    $('.cky-consent-bar').css('padding', 0)
    setLogoScripts({
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Ronix",
      "url": "https://www.ronixtools.com/ir",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Germany",
        "addressLocality": "Gelnhausen",
        "postalCode": "63571",
        "streetAddress": "Am Ziegelturm 9"

      },
      "email": "sales(at)ronixtools.com",
      "logo": "https://api1.ronixtools.com/Images/IrImages/RonixLogotiny.png",
      "sameAs": [
        "https://www.facebook.com/ronixtools",
        "https://twitter.com/ronixtools",
        "https://www.youtube.com/channel/UCz7B6KeqqqC_qiGK3Kw4Zhg",
        "https://www.linkedin.com/company/ronixtools/",
        "https://www.instagram.com/ronix_tools/",

      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+49-60515380503",
        "contactType": "customer service"

      }]
    })
    CallApi();
  }, []);
  return (
    <AnimatePresence><Fragment>


      <Head>
        {/* <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/ffc4c9a2e608a1dc0d187a89/script.js"></script> */}
        <link rel='stylesheet' href={`${assetPrefix}/assets/fonts/font-awesome.min.css`}></link>
        {/* <link  rel='stylesheet' href={`${internationalAssets}/css/bootstrap-rtl.min.css`}></link> */}
        {/* <link rel='stylesheet' href={`${assetPrefix}/assets/css/style.css`}></link> */}
        {isRtl ? <link rel='stylesheet' href={`${assetPrefix}/assets/fonts/iransans.css`}></link> : null}
        {/* <link rel="stylesheet" href={`${internationalAssets}/css/MainSliderStyle.css"></link> */}
        <link rel="stylesheet" href={`${assetPrefix}/assets/css/main.min.css`}></link>
        {/* <link rel='stylesheet' href={`${assetPrefix}/assets/css/power-tools.css`}></link>
<link rel='stylesheet' href={`${assetPrefix}/assets/css/drills.css`}></link>
<link rel='stylesheet' href={`${assetPrefix}/assets/css/hand-tools.min.css`}></link> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(logoScripts) }} />
        <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
        <link rel='stylesheet' href={`${assetPrefix}/assets/css/tiltSliderstyle.min.css`}></link>

        <script defer src={`${assetPrefix}/assets/js/Isotop.js`} ></script>
        {/* <script defer src={`${internationalAssets}/js/jquery-3.5.1.min.js`}></script>  */}
        {/* <script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script> */}
    <script defer
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        ></script> 

        {isRtl ? <script src={`${assetPrefix}/assets/js/changeRtl.js`}></script> : null}

     
         {/* <script defer src={`${internationalAssets}/js/gsap.min.js`}></script>  */}
        {/*start Motaghi */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC4MDN2');`}} /> */}
        {/*end Motaghi */}
{/* 
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WLCQ597');`}} />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WBZBGT9');`}} /> */}

        <link rel='stylesheet' href={`${assetPrefix}/assets/css/SlideShow.css`}></link>


        {/* <script defer src={`${internationalAssets}/js/ScrollMagic.min.js`}></script>
<script defer src={`${internationalAssets}/js/jquery.ScrollMagic.min.js`}></script>
<script defer src={`${internationalAssets}/js/TweenMax.min.js`}></script>

<script defer src={`${internationalAssets}/js/animation.gsap.min.js`}></script>
<script defer src={`${internationalAssets}/js/debug.addIndicators.min.js`}></script>
<script defer src={`${internationalAssets}/js/ScrollTrigger.min.js`}></script>
 */}
        {/* <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}


        {/* 
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KZ3CGZM');`}} />
        {/* <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NC4MDN2');`}} /> */}
        {/* <link rel='stylesheet' href={`${internationalAssets}/css/CategorySectionStyle.css'></link> */}
      </Head>

      <Head>
        {/* <link rel="stylesheet" href={`${internationalAssets}/css/style.css"></link> */}
        {/* <link rel="stylesheet" href={`${internationalAssets}/fonts/font-awesome.min.css"></link>
    <line rel="stylesheet" href={`${internationalAssets}/css/bootstrap-rtl.min.css"></line>
    <link rel="stylesheet" href={`${internationalAssets}/css/main.css"></link>
    */}

      </Head>
      <TopNavigation isMobile={isMobile} />

      <main className="wrapper col-12 px-0 offset-top bg-black">

        {children}

        {/* <div className="loading-page"><span role="spinner" className="spinner  d-flex  text-center align-items-end justify-content-center"><img className="mx-0" src="https://api1.ronixtools.com/InternationalAssets/assets/img/icon/loading/r.png" /><img className="ml-0" src="https://api1.ronixtools.com/InternationalAssets/assets/img/icon/loading/o.png" /><img src="https://api1.ronixtools.com/InternationalAssets/assets/img/icon/loading/n.png" /><img src="https://api1.ronixtools.com/InternationalAssets/assets/img/icon/loading/i.png" /><img className="mr-0" src="https://api1.ronixtools.com/InternationalAssets/assets/img/icon/loading/x.png" /><div className="bar" role="bar"></div></span></div> */}
        {!isMobile ?
          <CircleSlider />

          : null}
      </main>
      <FooterSection footerData={footerData} /> 

      {/* {router.route === '/' ? <script src={`${assetPrefix}/assets/js/main.js`}></script> : null} */}
      {/* {router.route === '/power-tools' ? <script src={`${assetPrefix}/assets/js/power-tools.js`}></script> : null}
{router.route === '/drills' ? <script src={`${assetPrefix}/assets/js/drills.js`}></script> : null}
{router.route === '/hand-tools' ? <script src={`${assetPrefix}/assets/js/hand-tools.js`}></script> : null}
{router.route === '/cordless-tools' ? <script src={`${assetPrefix}/assets/js/cordless-tools.js`}></script> : null}
{router.route === '/saws' ? <script src={`${assetPrefix}/assets/js/saws.js`}></script> : null} */}



{/* 
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBZBGT9"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}

      />
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLCQ597"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }} /> */}
      {/* <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC4MDN2"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
      />  */}



    </Fragment></AnimatePresence>
  );
}


export default Layout;
