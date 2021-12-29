import dynamic from "next/dynamic";
import Head from 'next/head';
import { Children, Fragment, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { assetPrefix, currentlanguageCode, domainAddress, websiteLanguages } from '../next.config';
import { GetArticle, GetNews } from '../src/components/Services/ArticleService';
import { CategoryGetAllWithChildsByLang2 } from '../src/components/Services/productService';
import { ReplaceString } from '../src/components/Services/UtilityService';
const MainSlider = dynamic(() => import('../src/components/Home/MainSlider'));
const Category = dynamic(() => import('../src/components/Home/Category'))
const ContentSlider = dynamic(() => import('../src/components/Home/ContentSlider'));
const AboutSection = dynamic(() => import('../src/components/Home/AboutSection'))
var { text } = require('../src/components/translate-files/' + currentlanguageCode + '.json');
const MagSection = dynamic(() => import('../src/components/Home/MagSection'));
const Backfix = dynamic(() => import('../src/components/common/Backfix'));
const SectionCompany = dynamic(() => import('../src/components/Home/SectionCompany'))
const Home = ({ productCategories, allCategoryGrid, isMobileView, ArticleRes, NewsRes }) => {
  const myLoader = ({ src, height, width, quality }) => {
    return `${assetPrefix}/_next/image?url=${src}&w=${width}&h=${height}&q=${quality || 70}`
  }
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
 
    async function CallApi() {
      let Article
      // if (currentlanguageCode === 'ir') {

      //   Article = await GetArticle('mag');
      // }
      // else {
      //   Article = await GetArticle('blog');
      // }
      // console.log(Article);
      // let News = await GetNews()
      // setArticles(Article.data);
      // setNews(News.data);
    }
    CallApi();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>🧰 Ronix Tools | Global Power Tools | Hand Tools | Cutting Tools</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content=" Ronix Tools | Global Power Tools | Hand Tools | Cutting Tools" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:site" content="https://ronixtools.com/" />
        <meta name="twitter:image" content="https://ronixtools.com/asset/images/logo.png" />
        <meta name="twitter:title" content="🧰 Ronix Tools | Global Power Tools | Hand Tools | Cutting Tools" />
        <meta name="twitter:description" content="Ronix is an international brand, active in the tools industry. Ronix produces a wide range of products from simple hand tools to innovative power tools." />
        <meta name="google-site-verification" content="x_sO7LpBJjiBt_d9RgRpIJjnrRXNt6GkCkcpj9TJNFc" />
        {Children.toArray(websiteLanguages.map(languageCode => languageCode == currentlanguageCode ? null : <link rel="alternate" hreflang={languageCode} href={`${domainAddress}${languageCode == "en" ? "" : `/${languageCode}`}`} />))}
        {/* <script src={`${internationalAssets}/js/jquery-3.5.1.min.js`}></script> */}
        {/* <script
          src="https://code.jquery.com/jquery-3.5.1.slim.js"
          integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM="
          crossOrigin="anonymous"></script> */}
        {/* <script src={`${internationalAssets}/js/ScrollMagic.min.js`}></script>
        <script src={`${internationalAssets}/js/jquery.ScrollMagic.min.js`}></script>
        <script src={`${internationalAssets}/js/TweenMax.min.js`}></script>
        <script src={`${internationalAssets}/js/gsap.min.js`}></script>
        <script src={`${internationalAssets}/js/animation.gsap.min.js`}></script>
        <script src={`${internationalAssets}/js/debug.addIndicators.min.js`}></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src={`${internationalAssets}/js/ScrollTrigger.min.js`}></script> */}

        {/* <script src={`${internationalAssets}/js/ScrollToPlugin.min.js`}></script> */}

      </Head>
      <div className="col-12 px-0 overflow-h">

        <MainSlider /> 
        <Category allCategoryGrid={allCategoryGrid} />
      
        <SectionCompany />
        {/* <AboutSection /> */}
        <MagSection res={ArticleRes} isMobile={isMobile} title={text.BlogTitle} text={text.BlogDescription} link={`https://ronixtools.com/${currentlanguageCode}/${currentlanguageCode === 'ir' ? 'mag' : 'blog'}/`} />
        {/* <ContentSlider res={ArticleRes}  title={text.BlogTitle} text={text.BlogDescription} link={`https://ronixtools.com/${currentlanguageCode}/blog/`}/> */}
        <Backfix backgroundclass={"image_background_home d-none d-xl-block"} src={`https://wss.ronixtools.com/InternationalAssets/assets/img/Angle-grinder-parallex.jpg`} /> 
        {NewsRes.length == 0 ? null : <ContentSlider res={NewsRes} title={text.NewsTitle} text={text.NewsDescription} link={`https://ronixtools.com/${currentlanguageCode}/news/`} />}
      </div>
    </Fragment>
  )
}
export default Home;
export async function getStaticProps() {
  // const { ronix } = ctx.req.cookies;

  // const productCategoryRes = await CategoryGetAllWithChilds();
  // const ProductInfo = {
  //   page: 1,
  //   pageSize: 8,
  // }
  let allCategory;
  try { allCategory = await CategoryGetAllWithChildsByLang2() }
  catch (error) {
    const logBody = {
      "cookieValue": ReplaceString('ronix', "-", ""),
      "environment": 3,
      "page": 'homepage',
      "action": "/Category/GetAllWithChildsByLang",
      "message": `${error}`,
      "ipAddress": "0",
      "languageCode": currentlanguageCode
    }
    const registerLogApi = await logApi(logBody)
  }
  let Article;
  let News;
     if (currentlanguageCode === 'ir') {

         Article = await GetArticle('mag');
       }
       else {
         Article = await GetArticle('blog');
       }
  

//  try {
//   // const data = await GetArticle('blog');
  
//  } catch (error) {
   
//  }
   
 console.log(Article);

  try {
     const data = await GetNews();
     News=data;
 
  } catch (error) {

  }


  let isMobileView = false;//ctx.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) != null ? true : false;

  return {
    props: {
      isMobileView: isMobileView,
      // productCategories: productCategoryRes == null ? [] : productCategoryRes.data.response,
      ArticleRes: Article == null ? [] : Article,
      NewsRes: News == null ? [] : News,
      allCategoryGrid: allCategory == null ? [] : allCategory,

    }
    , revalidate: 3600
  }
}
