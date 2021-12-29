import { motion } from 'framer-motion';
import $ from 'jquery';
import dynamic from "next/dynamic";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Children, Fragment, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { assetPrefix, categoryBanner, currentlanguageCode, isRtl } from '../../next.config';
import { CategoryGetAllWithChilds } from '../../src/components/Services/CategoryService';
import { logApi } from '../../src/components/Services/productService';
import { ProductGetAllTags, ProductGetTagByPermalink } from '../../src/components/Services/TagsServices';
import { ReplaceString } from '../../src/components/Services/UtilityService';
const GridItem = dynamic(() => import('../../src/components/common/Griditem'));
const PaginationProductCategory = dynamic(() => import('../../src/components/common/PaginationProductCategory'));
const Breadcrumb = dynamic(() => import('../../src/components/common/Breadcrumb'));
const CompareBar = dynamic(() => import('../../src/components/allProducts/CompareBar'));
const Custom500 = dynamic(() => import('../500'));
var { text } = require('../../src/components/translate-files/' + currentlanguageCode + '.json');
const TagsAccordion = dynamic(() => import('../../src/components/product-tags/TagsAccordion'));
const TagsCategoryAccordion = dynamic(() => import('../../src/components/product-tags/TagsCategoryAccordion'));
let description_orginal_height = 100;

const AllProductsCatByTag = ({ allcategories, res, productTags, pagePermalink }) => {
    const [cookies, setCookie] = useCookies(['ronix']);
    const [srcValide, setSrcValide] = useState();

    const myLoader = ({ src, height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
    }
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
        let heightContentDescription = $('.tagPage-description .content-description').height();
        description_orginal_height = heightContentDescription + (parseInt(window.innerHeight) < 1300 ? 1 : 0) * 50;
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
    const handleMoreDiscriotionTags = () => {
        if ($('.tagPage-description .wrapper').height() === 100) {
            $('.tagPage-description .wrapper').height(description_orginal_height);
            $('.tagPage-description').addClass('open');
            $('.tagPage-descriptionMore').html('less');
        }
        else {
            $('.tagPage-description .wrapper').height(100);
            $('.tagPage-description').removeClass('open');
            $('.tagPage-descriptionMore').text('more');

        }
    }

    try {
        return (
            <Fragment>
                <Head>
                    <title>{res.metaTitle}</title>
                </Head>
                <motion.Fragment key={loc} initial="exit" animate="enter" exit="exit">
                    {/* <div className='d-none d-md-flex align-items-center justify-content-start text-white' style={{ height: "55px", fontSize: "25px", backgroundColor: '#414141' }} > */}
                    <div className='container px-0'>
                        <div className={` ${isRtl ? 'rtl' : ''}`}>
                            <Breadcrumb firstItem={{ title: `${text.Tags}`, link: `/tags` }}
                                secondItem={{ title: `${res.title}`, link: `/tags/${res.permalink}` }}
                            />
                        </div>
                    </div>
                    {/* </div> */}
                    <div className={`container px-0 ${isRtl ? 'rtl' : ''} `}>
                        <div className="row w-100 m-0">
                            <motion.div variants={headerImg} className="all-products-header-img m-auto">
                                {srcValide ?
                                    <Image loader={myLoader} className='img-fluid pt-3 pt-xl-0 mt-3' src={`${categoryBanner}${categoryById.referenceId}.jpg`} alt="" width={1640} height={418} quality={100} loader={myLoader} />
                                    : null}
                            </motion.div>
                            <div className='col-lg-3  my- accordion-sho d-none d-xl-block'>
                                <TagsCategoryAccordion Data={allcategories} />
                                <TagsAccordion Data={productTags.response} />
                            </div>
                            <div className={`col-xl-9 col-12 col-grid text-justify ${isRtl ? 'pr-xl-0' : 'pl-xl-0'} `}>
                                <h1 className="col-12 categoryaccordion-header mt-3 mb-3 mt-xl-0 pr-2 d-flex align-items-center justify-content-center " style={{ height: "55px", fontSize: "25px" }} >{res.title}</h1>
                                {/* <h1 className="col-12 categoryaccordion-header mt-3 pr-2 d-flex align-items-center justify-content-center " style={{ height: "55px", fontSize: "25px" }} >{res.permalink}</h1> */}
                                <div className={`col-12 tagPage-description px-0 mb-4 bk-white py-2 ${res.description ? '' : 'd-none'}`}>
                                    <div className='wrapper col-12 px-0'>
                                        {/* <h1 className="col-12 title-description product_category_h1Text_forSEO font-16 mt-1 font-weight-bold" >{res.title}</h1> */}
                                        {/* dangerouslySetInnerHTML={{__html: categoryById.productCategoryAttributes[0].description}}  */}
                                        <div className='col-12 content-description'>
                                            <span className="font-14 category-description active" dangerouslySetInnerHTML={{ __html: res.description }} >
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-12 text-center px-3 '>
                                        <span className=' cursor-pointer button-page-discription d-flex align-items-center mt-2' onClick={() => handleMoreDiscriotionTags()}>
                                            <span className='mr-2 tagPage-descriptionMore '>more</span>
                                            <i className='fa fa-chevron-down font-12 ml-1'></i>
                                            {/* <svg width='10px' aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-chevron-double-down fa-w-14 fa-3x"><path fill="currentColor" d="M441.9 89.7L232.5 299.1c-4.7 4.7-12.3 4.7-17 0L6.1 89.7c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L224 233.6 405.1 52.9c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17zm0 143l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 393.6 42.9 212.9c-4.7-4.7-12.3-4.7-17 0L6.1 232.7c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" className=""></path></svg> */}
                                            {/* <img src={`${assetPrefix}/assets/img/page-discription-btn.png`} /> */}
                                        </span>
                                    </div>
                                </div>
                                <motion.div variants={productCategory} className="product-items col-md-12 row p-0 m-0 my-3">
                                    {Children.toArray(res?.data?.map((item, index) =>
                                        <Fragment>
                                            <GridItem isTag={true} id={item.id} gsap_y={index} classnames=" col-xl-3 col-lg-4 col-md-4 col-sm-6  py-3 px-0" item={item} />
                                        </Fragment>
                                    ))}
                                </motion.div>
                                <motion.div variants={fadeIn} className="col-md-12 mb-3 all-products-pagination d-flex justify-content-center">
                                    <PaginationProductCategory isTag={true} res={res} router={router} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.Fragment>
                <CompareBar />
            </Fragment>
        );
    }
    catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt('4'),
                "page": 'tags',
                "permalink": pagePermalink,
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
export default AllProductsCatByTag;
export async function getServerSideProps(ctx) {
    const { ronix } = ctx.req.cookies;
    let getAllProductsByTag;
    const productcategoryTagBody = {
        "page": ctx.query.page == undefined ? 1 : parseInt(ctx.query.page),
        "pageSize": 20,
        "permalink": ctx.query.tag
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
    try {
        getAllProductsByTag = await ProductGetTagByPermalink(productcategoryTagBody);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'tags',
            "permalink": ctx.query.tag,
            "action": "/Product/GetTagByPermalink",
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
            "page": 'tags',
            "permalink": ctx.query.tag,
            "action": "/Category/GetAllWithChildsByLang",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    let TagsBody = {
        text: ''
    }
    let productTags = '';
    try {
        productTags = await ProductGetAllTags(TagsBody);
    }
    catch (error) {
        const logBody = {
            "cookieValue": ReplaceString(ronix, "-", ""),
            "environment": 4,
            "page": 'tags',
            "permalink": ctx.query.tag,
            "action": "/Product/GetAllTag",
            "message": `${error}`,
            "ipAddress": "0",
            "languageCode": currentlanguageCode
        }
        const registerLogApi = await logApi(logBody)
    }
    return {
        props: {
            productTags: productTags.data,
            allcategories: allCategoryWithChild == null ? [] : allCategoryWithChild.data.response,
            res: getAllProductsByTag.data.response == null ? [] : getAllProductsByTag.data.response,
            pagePermalink: ctx.query.tag
        }
    }
}