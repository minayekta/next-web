import $ from 'jquery';
import { useAmp } from 'next/amp';
import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Children, Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { assetPrefix, categoryBanner, currentlanguageCode, domainAddress, isRtl } from '../../next.config';
import { CategoryGetAllWithChilds, CategoryGetById, CategoryGetPermalinksByPermalinkDomain } from '../../src/components/Services/CategoryService';
import { siteSetting } from '../../src/components/Services/config.json';
import { logApi, ProductGetActiveByCategoryPermalinkLangPaged, SearchFull } from '../../src/components/Services/productService';
import { MakeBreadCrumbScript, ReplaceString } from '../../src/components/Services/UtilityService';
const CategoryAccordion = dynamic(() => import('../../src/components/allProducts/CategoryAccordion'));
const Griditem = dynamic(() => import('../../src/components/common/Griditem'));
const PaginationProductCategory = dynamic(() => import('../../src/components/common/PaginationProductCategory'));
const Breadcrumb = dynamic(() => import('../../src/components/common/Breadcrumb'));
const CompareBar = dynamic(() => import('../../src/components/allProducts/CompareBar'));
const Custom500 = dynamic(() => import('../500'));
const Custom404  = dynamic(() => import( '../404'));
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');
const GriditemAmp = dynamic(() => import('../../src/components/common/GridItemAmp'));
let description_orginal_height = 0;
// export const config = { amp: 'hybrid' }

var imageExists = require('image-exists');
export default function ProductCategory({ isMobileView, categoryById, ProductCategoryByPermalink, allcategories, res, breadCrumb, categoryHrefLangs, breadCrumbScripts }) {
    const [cookies, setCookie] = useCookies(['ronix']);
    const [srcValide, setSrcValide] = useState();
    const isAmp = useAmp();
    const myLoader = ({ src, height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
    }
    useEffect(() => {

        if (ProductCategoryByPermalink.data == null) {
            var src = `${categoryBanner}${categoryById?.referenceId}.jpg`;

            imageExists(src, function (exists) {
                if (exists) {
                    setSrcValide(src)
                }
                else {
                    src = 0;
                    setSrcValide(src)
                }
            });
        }


    }, [categoryById != null ? categoryById?.referenceId : cookies])

    useEffect(() => {
        if (!isAmp) {

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
            $('.page-description .wrapper').addClass('show');
            let heightContentDescription = $('.page-description .content-description').height();
            description_orginal_height = heightContentDescription + (parseInt(window.innerHeight) < 1300 ? 1 : 0) * 50 + 30;
        }

    }, [useRouter().asPath]);

    const loc = useRouter().asPath;
    let easing = [0.175, .1, 0.42, 0.96];
    const fadeIn = {
        exit: { opacity: 0, transition: { duration: 0.3, ease: easing } },
        enter: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3,
                ease: easing
            }
        }
    };
    const headerImg = {
        exit: { y: -50, opacity: 0, transition: { duration: 0.3, ease: easing } },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.3,
                ease: easing
            }
        }
    };


    const productCategory = {
        exit: { y: 50, opacity: 0, transition: { duration: 0.3, ease: easing } },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3,
                ease: easing
            }
        }
    };
    const router = useRouter()
    // console.log(categoryById.referenceId);
    const handleMoreDiscriotion = () => {
        if ($('.page-description .wrapper').hasClass('show')) {
            $('.page-description .wrapper').removeClass('show');
            $('.page-description .wrapper').height(description_orginal_height);
            $('.page-description').addClass('open')
        }
        else {
            $('.page-description .wrapper').addClass('show');
            $('.page-description').removeClass('open');
            $('.page-description .wrapper').height(200);
        }
    }
    try {
        console.log("ProductCategoryByPermalink");
        console.log(ProductCategoryByPermalink);

        if (ProductCategoryByPermalink.length == 0) {
            return <Custom404 />;

        }



        return (
            <Fragment>
                <Head>
                    <title>{categoryById.productCategoryAttributes[0].metaTitle} </title>
                    <meta name="twitter:site" content="@ronixtools" />
                    <meta name="twitter:creator" content="@ronixtools" />
                    <meta name="twitter:title" content={`Ronix Tools | ${categoryById.productCategoryAttributes[0].title}`} />
                    <meta name="twitter:description" content="DYNAMIC" />
                    <meta name="twitter:image" content={`${siteSetting.categoryImageUrl}/${categoryById.coverImageUrl.split('/')[4]}`} />
                    <meta property="og:title" content={`Ronix Tools | ${categoryById.productCategoryAttributes[0].title}`} />
                    <meta property="og:type" content="product-category" />
                    <meta property="og:image:width" content="500" />
                    <meta property="og:image:height" content="500" />
                    <meta property="og:url" content={`${assetPrefix}/product-category/${categoryById.productCategoryAttributes[0].permalink}`} />
                    <meta property="og:description" content="DYNAMIC" />
                    <meta name="description" content={categoryById.productCategoryAttributes[0].metaDescription == null ? '' : categoryById.productCategoryAttributes[0].metaDescription} />
                    {Children.toArray(categoryHrefLangs.map(HrefLang => <link rel="alternate" hreflang={HrefLang.langugeCode} href={`${domainAddress}${HrefLang.langugeCode == "en" ? "" : `/${HrefLang.langugeCode}`}/product-category/${categoryById.productCategoryAttributes[0].permalink}`} />))}
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbScripts) }}></script>
                    <style amp-custom>

                    </style>
                </Head>

                <Fragment key={loc} initial="exit" animate="enter" exit="exit">
                    <div className={`container px-0 ${isRtl ? 'rtl' : ''}`}>
                        <Breadcrumb firstItem={{ title: `${text.AllProducts}`, link: `${assetPrefix}/all-products` }}
                            secondItem={{ title: `${breadCrumb.level1CategoryTitle}`, link: `${assetPrefix}/product-category/${breadCrumb.level1CategoryPermalink}` }}
                            thirdItem={{ title: `${breadCrumb.level2CategoryTitle}`, link: `${assetPrefix}/product-category/${breadCrumb.level2CategoryPermalink}` }} />

                        <div className="row w-100 m-0">

                            <div variants={headerImg} className="all-products-header-img m-auto">
                                {srcValide ?
                                    <Image loader={myLoader} className='img-fluid pt-3 pt-xl-0' src={`${categoryBanner}${categoryById.referenceId}.jpg`} alt="" width={1640} height={418} quality={100} loader={myLoader} />
                                    : null}

                            </div>
                            {!isMobileView ? <CategoryAccordion Data={allcategories} /> : null}
                            <div className={`${isMobileView ? "col-12" : "col-xl-9"} ${isRtl ? 'pr-xl-0' : 'pl-xl-0'} col-grid`}>
                                <h1 className="col-12 categoryaccordion-header mt-3 mt-xl-0 mb-2 pr-2 d-flex align-items-center justify-content-center font-22 py-3" >{categoryById.productCategoryAttributes[0].title}</h1>
                                {!isAmp ?
                                    <div variants={productCategory} className="product-items col-md-12 col-md-12 row p-0 m-0 my-3">
                                        {Children.toArray(ProductCategoryByPermalink.data.map((item, index) =>
                                            <Griditem id={item.id} gsap_y={index} classnames=" col-xl-3 col-lg-4 col-md-4 col-sm-6  py-3 px-0" item={item} />
                                        ))}
                                    </div>
                                    :
                                    <div className='col-12 px-0'>
                                        {Children.toArray(
                                            ProductCategoryByPermalink.data.map((item, index) =>
                                                <GriditemAmp id={item.id} gsap_y={index} item={item} />
                                            )
                                        )}

                                    </div>
                                }
                                <div variants={fadeIn} className="col-md-12 mb-3 all-products-pagination d-flex justify-content-center">
                                    <PaginationProductCategory res={res} router={router} />

                                </div>


                                {ProductCategoryByPermalink.categoryDescription != null && ProductCategoryByPermalink.categoryDescription != "" ?
                                    !isAmp ?
                                        <div className={`col-12 page-description px-0 mb-4 `}>
                                            <div className='wrapper col-12 px-0'>
                                                {/* <h1 className="col-12 title-description product_category_h1Text_forSEO" >{categoryById.productCategoryAttributes[0].title}</h1> */}
                                                {/* dangerouslySetInnerHTML={{__html: categoryById.productCategoryAttributes[0].description}}  */}
                                                <div className='col-12 content-description'>

                                                    <span className="font-14 pl-2 category-description active" dangerouslySetInnerHTML={{ __html: ProductCategoryByPermalink.categoryDescription }} >

                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-12 text-center'><span className='cursor-pointer button-page-discription' onClick={() => handleMoreDiscriotion()}>

                                                <svg width='15px' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-chevron-double-down fa-w-14 fa-3x"><path fill="currentColor" d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" className=""></path></svg>

                                                <img src={`${assetPrefix}/assets/img/page-discription-btn.png`} />

                                            </span>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-12 page-description px-0 mb-4">
                                            <div className='wrapper col-12 px-0'>
                                                <div className='col-12 content-description'>

                                                    <span className="font-14 pl-2 category-description active" dangerouslySetInnerHTML={{ __html: ProductCategoryByPermalink.categoryDescription }} >

                                                    </span>
                                                </div>
                                            </div>
                                            <div className='col-12 text-center'><span className='cursor-pointer button-page-discription' onClick={() => handleMoreDiscriotion()}>

                                                <svg width='15px' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-chevron-double-down fa-w-14 fa-3x"><path fill="currentColor" d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" className=""></path></svg>

                                                <img src={`${assetPrefix}/assets/img/page-discription-btn.png`} />

                                            </span>
                                            </div>
                                        </div>

                                    : null}

                            </div>
                        </div>
                    </div>
                </Fragment>

                <CompareBar />
            </Fragment>
        );
    }
    catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt('4'),
                "page": 'productCategory',
                "permalink": categoryById.productCategoryAttributes[0].permalink,
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


export async function getServerSideProps(ctx) {
    let isMobileView = ctx.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i) != null ? true : false;
    const { ronix } = ctx.req.cookies;
    const productcategoryBody = {
        "page": ctx.query.page == undefined ? 1 : parseInt(ctx.query.page),
        "pageSize": 20,
        "text": ctx.params.categoryId
    }
    const body = {
        page: ctx.query.page === '...' || undefined ? 1 : ctx.query.page,
        pageSize: 20,
        categoryId: -1,
        orderBy: 1,
        isDescending: true,
        text: '',
        minPrice: -1,
        maxPrice: -1
    }
    const getPermalinksByPermalinkDomainBody = {
        permalink: ctx.params.categoryId.toString(),
        domainName: siteSetting.domain.toString()
    }
    let categoryGetPermalinksByPermalinkDomainResponse;
    try {
        categoryGetPermalinksByPermalinkDomainResponse = await CategoryGetPermalinksByPermalinkDomain(getPermalinksByPermalinkDomainBody);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'productCategory',
            "permalink": ctx.params.categoryId.toString(),
            "action": "/Category/GetPermalinksByPermalinkDomain",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    let categoryByIdBody;
    if (categoryGetPermalinksByPermalinkDomainResponse?.data?.response != null) {
        categoryByIdBody = {
            Id: parseInt(categoryGetPermalinksByPermalinkDomainResponse.data.response.id)
        }
    } else {
        categoryByIdBody = {
            Id: parseInt(11)
        }
    }

    let categoryById;
    let allproducts;
    try {
        categoryById = await CategoryGetById(categoryByIdBody);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'productCategory',
            "permalink": ctx.params.categoryId.toString(),
            "action": "/Category/GetByIdLang",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    try {
        allproducts = await SearchFull(body);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'productCategory',
            "permalink": ctx.params.categoryId.toString(),
            "action": "/Product/SearchFull",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    let allCategoryWithChild;
    try {
        allCategoryWithChild = await CategoryGetAllWithChilds();
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'productCategory',
            "permalink": ctx.params.categoryId.toString(),
            "action": "/Category/GetAllWithChildsByLang",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    let getProductCategoryResponse;
    try { getProductCategoryResponse = await ProductGetActiveByCategoryPermalinkLangPaged(productcategoryBody); }

    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'productCategory',
            "permalink": ctx.params.categoryId.toString(),
            "action": "/Product/GetActiveByCategoryPermalinkLangPaged",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    if (getProductCategoryResponse?.data?.response == null) {
        ctx.res.statusCode = 404;

    }
    return {
        props: {

            isMobileView: isMobileView,
            categoryById: categoryById == null ? [] : categoryById.data.response,
            allcategories: allCategoryWithChild == null ? [] : allCategoryWithChild.data.response,
            ProductCategoryByPermalink: getProductCategoryResponse?.data?.response == null ? [] : getProductCategoryResponse?.data?.response,
            res: getProductCategoryResponse?.data?.response == null ? [] : getProductCategoryResponse?.data?.response,
            breadCrumb: getProductCategoryResponse?.data?.response == null ? [] : getProductCategoryResponse?.data?.response.breadCrumb,
            categoryHrefLangs: getProductCategoryResponse?.data?.response == null ? [] : getProductCategoryResponse?.data?.response.hrefLangs,

            breadCrumbScripts: getProductCategoryResponse?.data?.response == null ? [] : MakeBreadCrumbScript({ "title": "Home", "link": `https://ronixtools.com${assetPrefix}` },
                { "title": text.AllProducts, "link": `https://ronixtools.com${assetPrefix}/all-products` },
                { "title": `${getProductCategoryResponse?.data?.response.breadCrumb.level1CategoryTitle}`, "link": `https://ronixtools.com${assetPrefix}/product-category/${getProductCategoryResponse?.data?.response.breadCrumb.level1CategoryPermalink}` },
                { "title": `${getProductCategoryResponse?.data?.response.breadCrumb.level2CategoryTitle}`, "link": `https://ronixtools.com${assetPrefix}/product-category/${getProductCategoryResponse?.data?.response.breadCrumb.level2CategoryPermalink}` })

        }
    }
}