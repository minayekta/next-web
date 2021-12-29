import dynamic from "next/dynamic";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Children, Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { currentlanguageCode, domainAddress, internationalAssets, isRtl, websiteLanguages } from '../../next.config';
import { CategoryGetAllWithChilds } from '../../src/components/Services/CategoryService';
import { logApi, SearchFull } from '../../src/components/Services/productService';
import { ReplaceString } from '../../src/components/Services/UtilityService';
const CategoryAccordion = dynamic(() => import('../../src/components/allProducts/CategoryAccordion'));
const Griditem = dynamic(() => import('../../src/components/common/Griditem'));
const Pagination = dynamic(() => import('../../src/components/common/Pagination'));
const Breadcrumb = dynamic(() => import('../../src/components/common/Breadcrumb'));
const CompareBar = dynamic(() => import('../../src/components/allProducts/CompareBar'));
const Custom500 = dynamic(() => import('../500'))
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');
const allproduct2 = ({ allcategories, allproduct, res, isMobileView, searchTerm }) => {
  const [cookies, setCookie] = useCookies(['ronix']);
  const [allProductscript, setAllProductscript] = useState();
  const router = useRouter();
  useEffect(() => {
    if ($('body').width() <= 991) {
      setTimeout(() => {
        $('.accordion-show').addClass('d-none')
        $('.col-grid').addClass('col-md-12 padding-0')
      }, 100);
    } else {
      setTimeout(() => {
        $('.accordion-show').removeClass('d-none')
        $('.col-grid').removeClass('col-md-12')
      }, 100);
    }
    $(window).resize(() => {
      if ($('body').width() <= 991) {
        setTimeout(() => {
          $('.accordion-show').addClass('d-none')
          $('.col-grid').addClass('col-md-12 padding-0')
        }, 100);
      } else {
        setTimeout(() => {
          $('.accordion-show').removeClass('d-none')
          $('.col-grid').removeClass('col-md-12')
        }, 100);
      }
    })

    if (router.query.searchTerm !== undefined) {
      setAllProductscript(
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://ronixtools.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ronixtools.com/search?&q={" + router.query.searchTerm + "}",
            "query": "required"
          }
        }
      )
    }



  }, [router]);
  const getSiteContent = () => {
    try {
      return (
        <Fragment>
          <Head>
            <title>{`${text.AllProducts} | Ronix`}</title>
            <meta name="description" content={`${text.AllProducts} | Ronix`} />
            {router.query.searchTerm == undefined ? null : <meta name="robots" content="noindex" />}
            {Children.toArray(websiteLanguages.map(languageCode => languageCode == currentlanguageCode ? null : <link rel="alternate" hreflang={languageCode} href={`${domainAddress}${languageCode == "en" ? "" : `/${languageCode}`}/${languageCode == "ir" ? 'allproducts' : 'all-products'}`} />))}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allProductscript) }}></script>
          </Head>
          <div className="container">
            <div className="row">
              <div className={`${isRtl ? 'text-right' : ''} col-12 px-0`}><Breadcrumb firstItem={{ title: `${text.AllProducts}`, link: '/all-products' }} /></div>
              <div className={`all-products-header-img my-3 mt-xl-0 col-12 ${isMobileView ? 'px-0' : ''}`}>
                <img className='img-fluid' src={`${internationalAssets}/img/header-allproducts.svg`} alt="" />
              </div>
              {!isMobileView ? <CategoryAccordion Data={allcategories} /> : null}
              <div className={`${isMobileView ? "col-12" : "col-xl-9"} ${isRtl ? 'pl-xl-3 px-0 rtl-content' : 'pr-xl-3 px-0'} col-grid`}>
                <div className="col-md-12 px-0 row  m-0 mb-3">
                  {Children.toArray(
                    allproduct.map((item, index) =>
                      <Griditem gsap_y={index} id={item.id} classnames={` col-xl-3 col-lg-4 col-md-4 col-sm-6 py-3 px-0`} item={item} />
                    )
                  )}
                </div>
                <div className="col-md-12 mb-3 all-products-pagination d-flex justify-content-center">
                  <Pagination res={res} router={router} />
                </div>


              </div>
            </div>
          </div>
          <CompareBar />
        </Fragment>
      );
    }
    catch (error) {
      console.log(error);
      const registerLogApi = async () => {
        const logBody = {
          "cookieValue": ReplaceString(cookies.ronix, "-", ""),
          "environment": parseInt('4'),
          "page": 'allProducts',
          "permalink": '',
          "action": "Page loading",
          "message": `${error}`,
          "ipAddress": "0",
          "languageCode": currentlanguageCode
        }
        await logApi(logBody)
      }
      registerLogApi()
      return <Custom500 />;
    }
  }
  let pageContent = getSiteContent()
  return (
    pageContent
  );

}

export default allproduct2;
export async function getServerSideProps(ctx) {
  let isMobileView = ctx.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) != null ? true : false;
  const { ronix } = ctx.req.cookies;
  let res;
  const body = {
    page: ctx.query.page === '...' || undefined ? 1 : ctx.query.page,
    pageSize: 20,
    categoryId: -1,
    orderBy: 1,
    isDescending: true,
    text: ctx.query.searchTerm == undefined ? '' : ctx.query.searchTerm,
    minPrice: -1,
    maxPrice: -1
  }
  let allCategoryWithChild;
  let allproducts;
  try {
    allproducts = await SearchFull(body);
  }
  catch (error) {
    const logBody = {
      "cookieValue": ReplaceString(ronix, "-", ""),
      "environment": 4,
      "page": 'allProducts',
      "permalink": '',
      "action": "/Product/SearchFullActive",
      "message": `${error}`,
      "ipAddress": "0",
      "languageCode": currentlanguageCode
    }
    const registerLogApi = await logApi(logBody)
  }
  try {
    allCategoryWithChild = await CategoryGetAllWithChilds();
  }
  catch (error) {

    const logBody = {
      "cookieValue": ReplaceString(ronix, "-", ""),
      "environment": 4,
      "page": 'allProducts',
      "permalink": '',
      "action": "/Product/GetAllWithChildsByLang",
      "message": `${error}`,
      "ipAddress": "0",
      "languageCode": currentlanguageCode
    }
    const registerLogApi = await logApi(logBody)
  }
  return {
    props: {
      allcategories: allCategoryWithChild == null ? [] : allCategoryWithChild.data.response,
      allproduct: allproducts == null ? [] : allproducts.data.response.data,
      res: allproducts == null ? [] : allproducts.data.response,
      isMobileView: isMobileView
    }
  }
}