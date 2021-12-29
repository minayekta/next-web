import loadable from "@loadable/component";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Reveal, Tween } from "react-gsap";
import Config, {
  assetPrefix,
  currentlanguageCode,
  domainAddress,
  isRtl
} from "../../next.config";
import WebSiteContext from "../../src/components/Context/WebSiteContext";
import { GetReviewWithProductId } from "../../src/components/Services/CommentService";
import {
  logApi,
  ProductGetActiveSimilarByProductLang,
  ProductGetByPermalink
} from "../../src/components/Services/productService";
import {
  MakeBreadCrumbScript,
  ReplaceString
} from "../../src/components/Services/UtilityService";
const BreadcrumbItem = dynamic(() =>
  import("../../src/components/common/BreadcrumbItem")
);
const BreadcrumbWrapper = dynamic(() =>
  import("../../src/components/common/BreadcrumbWrapper")
);
const Tags = dynamic(() => import("../../src/components/NewProduct/Tags"));
const Description = dynamic(() =>
  import("../../src/components/product/Description")
);
const Feature = dynamic(() => import("../../src/components/product/Feature"));
const ImageMap = dynamic(() => import("../../src/components/product/ImageMap"));
const ProductsVideo = dynamic(() =>
  import("../../src/components/product/ProductsVideo")
);
const Specification = dynamic(() =>
  import("../../src/components/product/Specification")
);
const Specs = dynamic(() => import("../../src/components/product/Specs"));
const Custom404 = dynamic(() => import("../404"));
const Custom500 = dynamic(() => import("../500"));
const SimilarProduct = loadable(() => import("../../src/components/product/SimilarProduct")
);
const InsertComment = dynamic(() => import("../../src/components/product/InsertComment")
);
const CommentItem = dynamic(() =>
  import("../../src/components/product/CommentItem")
);
const DetaileSection = dynamic(() =>
  import("../../src/components/product/DateileSection")
);
const RateBox = dynamic(() =>
  import("../../src/components/NewProduct/RateBox")
);
const InsertRate = dynamic(() =>
  import("../../src/components/product/insertRate")
);
const TitlesFieldset = dynamic(() =>
  import("../../src/components/common/Titles/TitlesFieldset")
);
const ReviewReplyItem = dynamic(() =>
  import("../../src/components/product/ReviewReplyItem")
);
const CompareBar = dynamic(() =>
  import("../../src/components/allProducts/CompareBar")
);
const PaginationComment = dynamic(() =>
  import("../../src/components/product/PaginationComment")
);
const Faq = dynamic(() => import("../../src/components/product/Faq/Faq"));
var { text } = require("../../src/components/translate-files/" +
  currentlanguageCode +
  ".json");
const ProductDetailPage = ({
  resData,
  res,
  ProductDetail,
  allproduct,
  rate,
  productId,
  productAttr,
  isMobile,
  listHRFLanguages,
  reviewResponse,
  breadCrumbScripts,
}) => {
  const context = useContext(WebSiteContext);
  const [cookies, setCookie] = useCookies(["ronix"]);
  const [allReviews, setSllReviews] = useState([]);
  const [filter, setFilter] = useState();
  const [showReplyId, setShowReplyId] = useState(0);
  const [Productscript, setProductscript] = useState();
  const router = useRouter();
  let easing = [0.175, 0.1, 0.42, 0.96];
  const fadeIn = {
    exit: { opacity: 0, transition: { duration: 0.3, ease: easing } },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  useEffect(() => {
    context.setProductRateVlue(rate);
    console.log(ProductDetail);
    let recordCount = 1;
    if (reviewResponse.recordCount > 0) {
      recordCount = reviewResponse.recordCount;
    }
    if (ProductDetail != null) {
      setSllReviews(resData);
      setProductscript({
        "@context": "https://www.schema.org",
        "@type": "Product",
        name: `${ProductDetail.metaTitle}`,
        image: [
          `${ProductDetail.images.map(
            (item) =>
              `https://api1.ronixtools.com/Images/Products/${ProductDetail.code}/${item.originalImagUrl}`
          )}`,
        ],
        price: "0",
        description: `${ProductDetail.summary}`,
        sku: ProductDetail.code,
        mpn: ProductDetail.code,
        brand: {
          "@type": "Brand",
          name: "Ronix",
        },

        review: reviewResponse.data.map((review) => ({
          "@type": "Review",
          author: review.author,
          datePublished: review.publishDate,
          name: "",
          reviewBody: review.reviewText,
          reviewRating: {
            "@type": "Rating",
            bestRating: "5",
            ratingValue: parseInt(Math.random() * 6),
            worstRating: "1",
          },
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ProductDetail.rates.totalAverage,
          reviewCount: recordCount,
        },
      });
    }
  }, [router.query.page]);

  const handleCompareProduct = (product_name, product_id, product_img) => {
    const body = [
      {
        id: product_id,
      },
    ];
    async function addProductCompare() {
      const res = await CompareProduct(body);
    }
    addProductCompare();
    let currentCompareItem = window.localStorage.getItem(
      `compareProduct/${currentlanguageCode}`
    );
    if (currentCompareItem == null) {
      currentCompareItem = "[]";
      // window.localStorage.setItem('compareProduct',[]);
    }
    if (JSON.parse(currentCompareItem).length < 4) {
      let currentCompareItem = window.localStorage.getItem(
        `compareProduct/${currentlanguageCode}`
      );
      let currentCompareItemArray = [];
      if (currentCompareItem === null) {
        currentCompareItemArray.push({
          productName: product_name,
          productId: product_id,
          productImg: product_img,
        });
        window.localStorage.setItem(
          `compareProduct/${currentlanguageCode}`,
          JSON.stringify(currentCompareItemArray)
        );
      } else {
        if (
          window.localStorage
            .getItem(`compareProduct/${currentlanguageCode}`)
            .indexOf(product_name) === -1
        ) {
          currentCompareItemArray = JSON.parse(currentCompareItem);
          currentCompareItemArray.push({
            productName: product_name,
            productId: product_id,
            productImg: product_img,
          });
          window.localStorage.setItem(
            `compareProduct/${currentlanguageCode}`,
            JSON.stringify(currentCompareItemArray)
          );
        }
      }
      currentCompareItem = JSON.parse(
        window.localStorage.getItem(`compareProduct/${currentlanguageCode}`)
      );
      let products_id = "";
      for (let i = 0; i < currentCompareItem.length; i++) {
        products_id += currentCompareItem[i].productId + ".";
      }
      setCookie(`compareProductId/${currentlanguageCode}`, products_id),
        { path: "/", sameSite: true };
      context.setProductAdded(currentCompareItem);
      router.push(assetPrefix + "/compare/" + products_id.replaceAll(".", "/"));
    } else {
    }
  };

  try {
    if (ProductDetail == null) {
      return <Custom404 />;
    }
    return (
      <Fragment>
        <Head>
          <title> {productAttr.metaTitle}</title>
          <meta name="twitter:site" content="@ronixtools" />
          <meta name="twitter:creator" content="@ronixtools" />
          <meta
            name="twitter:title"
            content={`Ronix Tools | ${productAttr.title}`}
          />
          <meta name="twitter:description" content="DYNAMIC" />
          <meta
            property="og:title"
            content={productAttr.title == null ? "" : productAttr.title}
          />
          <meta property="og:type" content="product" />
          <meta
            property="og:image"
            content={
              Config.productImageUrl +
              "/" +
              productAttr.code +
              "/" +
              productAttr.images[0].originalImagUrl
            }
          />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
          <meta
            property="og:description"
            content={productAttr.metaDescription}
          />
          <meta
            name="description"
            content={
              productAttr.metaDescription == null
                ? ""
                : productAttr.metaDescription
            }
          />
          <meta property="og:type" content="product" />
          <meta
            property="og:title"
            content={productAttr.title == null ? "" : productAttr.title}
          />
          {listHRFLanguages.map((HrefLang) => (
            <link
              rel="alternate"
              hreflang={HrefLang.langugeCode}
              href={`${domainAddress}${HrefLang.langugeCode == "en" ? "" : `/${HrefLang.langugeCode}`
                }/product${HrefLang.langugeCode == "ir" ? "s" : ""}/${productAttr.permalink
                }`}
            />
          ))}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(Productscript) }}
          ></script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadCrumbScripts),
            }}
          ></script>
        </Head>

        <div
          className={`${isRtl ? "rtl-product-detail rtl-content" : ""
            } col-12 product-detail px-0`}
        >
          <div>
            <BreadcrumbWrapper>
              <div className="container px-1">
                {breadCrumbScripts.itemListElement.map((item, index) => {
                  return (
                    <BreadcrumbItem
                      lastItem={
                        breadCrumbScripts.itemListElement.length === index + 1
                          ? true
                          : false
                      }
                      url={item.item}
                      text={item.name}
                      key={index}
                    />
                  );
                })}
              </div>
            </BreadcrumbWrapper>
            <DetaileSection
              lngStatus={currentlanguageCode}
              isMobile={isMobile}
              favoriteStatus={false}
              userManualLink={ProductDetail.manualFile}
              explodedMapLink={ProductDetail.explodedViewFile}
              catalogLink={ProductDetail.catalogFile}
              catalogFile={ProductDetail.catalogFile}
              summery={ProductDetail.summary}
              images={ProductDetail.images}
              productName={ProductDetail.title}
              productId={productId}
              productCode={ProductDetail.code}
              facebookLink={`https://www.facebook.com/sharer/sharer.php?u=https://stage.ronixtools.com/product/${ProductDetail.permalink}`}
              instagramLink={
                "http://localhost:3000/product/cutting-wheel-180-3-22-2mm-rh-3703"
              }
              linkedinLink={`https://linkedin.com/sharing/share-offsite/?url=https://stage.ronixtools.com/product/${ProductDetail.permalink}`}
              telegramLink={`https://t.me/share/url?url=https://stage.ronixtools.com/product/${ProductDetail.permalink}`}
              whatsappLink={`https://wa.me?text=https://stage.ronixtools.com/product/${ProductDetail.permalink}`}
              mailLink={`mailto:?subject=Ronix Tools&body=https://stage.ronixtools.com/product/${ProductDetail.permalink}`}
            />
            <Specs
              isMobile={isMobile}
              status={isRtl}
              images={ProductDetail.images}
              Productcode={ProductDetail.code}
            />
            {/* <IconFeature /> */}
            <Feature
              isMobile={isMobile}
              productCode={ProductDetail.code}
              images={ProductDetail.images}
              featuredValues={ProductDetail.featuredValues}
              FeaturesItem={ProductDetail.featuredValues}
            />
            <ImageMap
              isMobile={isMobile}
              img={`${Config.productImageUrl}/${ProductDetail.code}/mapped-${ProductDetail.mappedImageUrl}`}
            />
            {isMobile ? (
              <section className="video-section bg-redA d-lg-inline-block d-lg-flex col-12 px-0  overflow-hidden">
                <div
                  className="col-12 col-lg-4 img-video-section-mobile order-lg-2"
                  style={{
                    backgroundImage:
                      "url(" +
                      `${assetPrefix}/_next/image?url=${Config.productImageUrl +
                      "/" +
                      ProductDetail.code +
                      "/" +
                      ProductDetail.images[2]?.originalImagUrl
                      }&w=640&q=80` +
                      " )",
                  }}
                ></div>
                <div className="col-12 col-lg-8 order-lg-1">
                  <Reveal threshold={0.1}>
                    <Tween
                      from={{ transform: "rotateX(45deg)" }}
                      to={{ transform: "rotateX(0)" }}
                      stagger={0.1}
                      duration={1}
                      ease="in(.2, 0.1)"
                    >
                      <div className="product_video_back_1">
                        <img
                          src={`${assetPrefix}/assets/img/Mask1.svg`}
                          alt=""
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal threshold={0.1}>
                    <Tween
                      from={{ transform: "rotateX(45deg)" }}
                      to={{ transform: "rotateX(0)" }}
                      stagger={0.1}
                      duration={1}
                      ease="in(.2, 0.1)"
                    >
                      <div className="product_video_back_2">
                        <img
                          src={`${assetPrefix}/assets/img/Mask2.svg`}
                          alt=""
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <ProductsVideo
                    title={"Product Videos"}
                    isMobile={isMobile}
                    ProductDetail={ProductDetail}
                  />
                </div>
              </section>
            ) : (
              <section className="video-section bg-redA col-12 px-0 d-flex equal overflow-hidden">
                <div className="col-8">
                  <Reveal threshold={0.1}>
                    <Tween
                      from={{ transform: "rotateX(45deg)" }}
                      to={{ transform: "rotateX(0)" }}
                      stagger={0.1}
                      duration={1}
                      ease="in(.2, 0.1)"
                    >
                      <div className="product_video_back_1">
                        <img
                          src={`${assetPrefix}/assets/img/Mask1.svg`}
                          alt=""
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <Reveal threshold={0.1}>
                    <Tween
                      from={{ transform: "rotateX(45deg)" }}
                      to={{ transform: "rotateX(0)" }}
                      stagger={0.1}
                      duration={1}
                      ease="in(.2, 0.1)"
                    >
                      <div className="product_video_back_2">
                        <img
                          src={`${assetPrefix}/assets/img/Mask2.svg`}
                          alt=""
                        />
                      </div>
                    </Tween>
                  </Reveal>
                  <ProductsVideo
                    title={text.ProductVideos}
                    ProductDetail={ProductDetail}
                  />
                </div>
                <Reveal threshold={0.001}>
                  <Tween
                    from={{ opacity: 0, transform: "rotate(10deg)" }}
                    to={{ opacity: 1, transform: "rotate(0deg)" }}
                    stagger={0.3}
                    duration={1}
                    ease="in(.2, 0.1)"
                  >
                    <div
                      className="col-4 img-video-section"
                      style={{
                        backgroundImage:
                          "url(" +
                          `${Config.productImageUrl +
                          "/" +
                          ProductDetail.code +
                          "/" +
                          ProductDetail.images[2]?.originalImagUrl
                          }` +
                          " )",
                      }}
                    ></div>
                  </Tween>
                </Reveal>
              </section>
            )}
            {ProductDetail.description != null ? (
              <Description productDescription={ProductDetail.description} />
            ) : null}
            <Specification
              isMobile={isMobile}
              productCode={ProductDetail.code}
              images={ProductDetail.images}
              pecificationsContent={ProductDetail.specs}
            />
            <SimilarProduct
              status={isRtl}
              isMobile={isMobile}
              productItems={allproduct}
            />

            <RateBox
              isMobile={isMobile}
              rateImgSrc={
                Config.productImageUrl +
                "/" +
                ProductDetail.code +
                "/" +
                ProductDetail.images[4]?.originalImagUrl
              }
              alt={
                ProductDetail.images[1]
                  ? `${ProductDetail.images[1].imageAlt}`
                  : ""
              }
              rate={rate}
              productRateVlueVar={context.productRateVlue}
            />
            {ProductDetail.tags.length > 0 ? (
              <Tags data={ProductDetail.tags} isRtl={isRtl} title={text.Tags} />
            ) : null}
            {ProductDetail.productFAQs.length > 0 ? (
              <Faq
                isRtl={isRtl}
                title={text.FAQ}
                data={ProductDetail.productFAQs}
              />
            ) : null}
            {allReviews.length > 0 ? (
              <Reveal threshold={0.001}>
                <Tween
                  from={{ opacity: 0, transform: "translateY(100px)" }}
                  to={{ opacity: 1, transform: "translateY(0px)" }}
                  duration={0.3}
                  ease="easein(.02, 0.1)"
                >
                  <div className="col-12 bk-white px-0">
                    <div className="container">
                      <div className="col-12 mt-xl-0 comment-box px-0">
                        <div className="col-12 bg-white pt-4 mb-4 px-0">
                          <TitlesFieldset
                            titleContent={text.Comments}
                            titleClass={
                              "font-18 c-black d-flex justify-content-between alighn-items-center"
                            }
                            titleContent2={filter}
                          />

                          {allReviews.map((review, index) => {
                            return (
                              <Fragment>
                                <CommentItem
                                  data={review}
                                  commentRate={4.5}
                                  productId={ProductDetail.id}
                                  parentId={review.id}
                                  showReplyId={showReplyId}
                                  setShowReplyId={setShowReplyId}
                                  setAllReviews={setSllReviews}
                                />
                                {review.replies.map((reply) => (
                                  <ReviewReplyItem
                                    data={reply}
                                    parentId={review.id}
                                    productId={ProductDetail.id}
                                    showReplyId={showReplyId}
                                    setShowReplyId={setShowReplyId}
                                    setAllReviews={setSllReviews}
                                    res={res}
                                  />
                                ))}
                              </Fragment>
                            );
                          })}

                          <div className="justify-content-center d-flex col-12 border-top border-bottom">
                            <PaginationComment res={res} router={router} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tween>
              </Reveal>
            ) : null}
            <div
              className={`col-12 px-0  pt-4 pb-4 bk-white ${isRtl ? "ltr" : ""
                }`}
            >
              <div className="container">
                <div className="row d-block">
                  <div
                    className={`col-12 px-0 d-md-flex equal ${isRtl ? "flex-row-reverse" : ""
                      }`}
                  >
                    <InsertRate
                      userAvgRate={rate.userAverageRate}
                      productIdVal={productId}
                      rateData={rate.userRates}
                    />
                    <InsertComment id={productId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CompareBar />
      </Fragment>
    );
  } catch (error) {
    console.log(error);
    const registerLogApi = async () => {
      const logBody = {
        cookieValue: ReplaceString(cookies.ronix, "-", ""),
        environment: parseInt("4"),
        page: "product",
        permalink: ProductDetail.permalink,
        action: "Page loading",
        message: `${error}`,
        ipAddress: "0",
        languageCode: currentlanguageCode,
      };
      await logApi(logBody);
    };
    registerLogApi();
    return <Custom500 />;
  }
};
export default ProductDetailPage;

export async function getServerSideProps(ctx) {

  const { ronix } = ctx.req.cookies;
  let productGetByPermalinkResponse;
  let isMobileView =
    ctx.req.headers["user-agent"].match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ) != null
      ? true
      : false;
  const productGetByPermalinkBody = {
    permalink: ctx.params.productid,
    userCookie: ronix,
  };
  try {
    productGetByPermalinkResponse = await ProductGetByPermalink(
      productGetByPermalinkBody
    );
  } catch (error) {
    const logBody = {
      cookieValue: ReplaceString(ronix, "-", ""),
      environment: 4,
      page: "product",
      permalink: ctx.params.productid,
      action: "/Product/GetByPermalink",
      message: `${error}`,
      ipAddress: "0",
      languageCode: currentlanguageCode,
    };

    const registerLogApi = await logApi(logBody);
  }

  const ProductDetail = productGetByPermalinkResponse.data.response;
  const body = {
    id: ProductDetail == null ? 22 : ProductDetail.id,
    count: 20,
  };

  let allproducts;
  try {
    allproducts = await ProductGetActiveSimilarByProductLang(body);
  } catch (error) {
    const logBody = {
      cookieValue: ReplaceString(ronix, "-", ""),
      environment: 4,
      page: "product",
      permalink: ctx.params.productid,
      action: "/Product/GetActiveSimilarByProductLang",
      message: `${error}`,
      ipAddress: "0",
      languageCode: currentlanguageCode,
    };

    const registerLogApi = await logApi(logBody);
  }

  let bodyNew;
  if (ProductDetail == null) {
    bodyNew = {
      page: ctx.query.page == null ? 1 : parseInt(ctx.query.page),
      pageSize: 500,
      productId: 1,
      cookieValue: ronix,
    };

    ctx.res.statusCode = 410;
  } else {
    bodyNew = {
      page: ctx.query.page == null ? 1 : parseInt(ctx.query.page),
      pageSize: 500,
      productId: ProductDetail.id,
      cookieValue: ronix,
    };
  }
  // const bodyNew = {
  //     "page": ctx.query.page == undefined ? 1 : parseInt(ctx.query.page),
  //     "pageSize": 400,
  //     "productId": ProductDetail.id,
  //     "cookieValue": ronix
  // }
  let GetReviewWithProductIdResponse;
  try {
    GetReviewWithProductIdResponse = await GetReviewWithProductId(bodyNew);
  } catch (error) {
    const logBody = {
      cookieValue: ReplaceString(ronix, "-", ""),
      environment: 4,
      page: "product",
      permalink: ctx.params.productid,
      action: "/Product/GetReviewWithProductId",
      message: `${error}`,
      ipAddress: "0",
      languageCode: currentlanguageCode,
    };

    const registerLogApi = await logApi(logBody);
  }
  console.log(GetReviewWithProductIdResponse);
  
  return {
    props: {
      ProductDetail: ProductDetail,
      allproduct: allproducts == null ? [] : allproducts.data.response,
      productId: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.id,
      productCode: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.code,
      productAttr: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response,
      productImages: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.images,
      ProductFeatureRes: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.specs,
      breadCrumb: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.breadCrumb,
      listHRFLanguages: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.listHRFLanguages,
      rate: productGetByPermalinkResponse.data.response == null ? [] : productGetByPermalinkResponse.data.response.rates,
      resData: GetReviewWithProductIdResponse.data.response.data,
      res: GetReviewWithProductIdResponse.data.response,
      reviewResponse: GetReviewWithProductIdResponse.data.response,
      isMobile: isMobileView,
      breadCrumbScripts: productGetByPermalinkResponse.data.response == null ? [] : MakeBreadCrumbScript(
        {
          title: text.Home,
          link: `https://ronixtools.com/${currentlanguageCode}`,
        },
        {
          title: text.AllProducts,
          link: `https://ronixtools.com/${currentlanguageCode}/all-products`,
        },
        {
          title: `${productGetByPermalinkResponse.data.response.breadCrumb.level1CategoryTitle}`,
          link: `https://ronixtools.com/${currentlanguageCode}/product-category/${productGetByPermalinkResponse.data.response.breadCrumb.level1CategoryPermalink}`,
        },
        {
          title: `${productGetByPermalinkResponse.data.response.breadCrumb.level2CategoryTitle}`,
          link: `https://ronixtools.com/${currentlanguageCode}/product-category/${productGetByPermalinkResponse.data.response.breadCrumb.level2CategoryPermalink}`,
        },
        {
          title: `${productGetByPermalinkResponse.data.response.title}`,
          link: `https://ronixtools.com/${currentlanguageCode}/product/${productGetByPermalinkResponse.data.response.permalink}`,
        }
      ),
    },
  };
}
