import $ from 'jquery';
import Link from 'next/link';
import { Children, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { currentlanguageCode, isRtl } from '../../../next.config';
import Custom404 from '../../../pages/404';
import { logApi } from '../Services/productService';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');
const CategoryAccordion = ({ Data }) => {
    const [cookies, setCookie] = useCookies(['ronix']);
    useEffect(() => {
        var currentURl = window.location.pathname;
        var selectedLink = $('.categoryaccordion-listACcordion[href="' + currentURl + '"]');
        selectedLink.addClass('active-now');
        setTimeout(() => {
            selectedLink.parents('.categoryaccordion-list-body').find('.categoryaccordion-item').slideDown();
            selectedLink.prevAll('.cursor-pointer').find('.active-title').addClass('opacityset')
        }, 100);
        $('.categoryaccordion-listACcordion').click(
            function () {
                setTimeout(() => {
                    selectedLink.removeClass('active-now');
                    $('.categoryaccordion-listACcordion').children().removeClass('active-now');
                    $('.categoryaccordion-listACcordion').children().removeClass('active');
                    var currentURl = window.location.pathname;
                    var test = currentURl.split("/");
                    var href = $(this).attr('href');
                    var split = href.split('/');
                    if (split[split.length - 1] === test[test.length - 1]) {
                        $(this).children().addClass('active-now');
                        $(this).children().removeClass('active');
                    }
                }, 2700);
            }
        )

        $('.categoryaccordion-item').slideUp()
        $('.categoryaccordion-title').removeClass('active')
        $('.categoryaccordion-title').prev('.active-title').removeClass('opacityset')
        $('.categoryaccordion-title').click(function () {
            setTimeout(() => {
                $('.categoryaccordion-item').slideUp()
                $('.categoryaccordion-title').removeClass('active')
                $('.active-title').removeClass('opacityset')
            }, 100);
            if ($(this).hasClass('active')) {
                setTimeout(() => {
                    $(this).removeClass('active')
                    $(this).parents('.categoryaccordion-list-body').find('.categoryaccordion-item').slideUp()
                    $(this).prev('.active-title').removeClass('opacityset')
                }, 100);
            } else {
                setTimeout(() => {
                    $(this).addClass('active')
                    $(this).parents('.categoryaccordion-list-body').find('.categoryaccordion-item').slideDown()
                    $(this).prev('.active-title').addClass('opacityset')
                }, 100);
            }

        })
    }, []);
    try {
        return (
            <aside className={`col-3 mb-3 accordion-show d-none d-xl-block ${isRtl ? 'rtl' : ''}`}>
                <div className="box-full-height">
                    <div className="stick-col">
                        <div className={`categoryaccordion-header p-3 ${isRtl ? 'rtl ' : ''} `}>
                            <span>{text.RonixToolsCategory}</span>
                        </div>
                        <div className="categoryaccordion-section">
                            <div className="categoryaccordion-body categoryaccordion py-3">
                                {
                                    Children.toArray(
                                        Data.map((item, index) =>
                                            index < 4 ?
                                                <ul className={`categoryaccordion-list-body categoryaccordion-lineheight all-transition m-0  `}>
                                                    {/* <Link href={`${assetPrefix}/product-category/${item.productCategoryAttributes[0].permalink}`}> */}
                                                    <a className="cursor-pointer d-flex align-items-center">
                                                        <div className="active-title"></div>
                                                        <li className={`font-weight-bold categoryaccordion-title font-14`}>
                                                            {item.productCategoryAttributes[0].title}
                                                        </li>
                                                    </a>
                                                    {/* </Link> */}
                                                    {Children.toArray(
                                                        item.childs.map((child) =>
                                                            <Link href={`/product-category/${child.productCategoryAttributes[0].permalink}`} >
                                                                <a className=" categoryaccordion-listACcordion">
                                                                    <li className={` font-14 categoryaccordion-item ${isRtl ? 'rtl-item pr-3 mr-3' : 'pl-3 ml-3'} `}>{child.productCategoryAttributes[0].title}</li>
                                                                </a>
                                                            </Link>

                                                        ))}
                                                    <Link href={`/product-category/${item.productCategoryAttributes[0].permalink}`}>
                                                        <a className=" categoryaccordion-listACcordion">
                                                            <li className={`categoryaccordion-item ${isRtl ? ' rtl-item pr-3 mr-3' : 'pl-3 ml-3'} font-14`}>
                                                                <i className="fa fa-circle mr-1 font-12"></i>
                                                                {text.ViewAllProducts + ' '}
                                                                {item.productCategoryAttributes[0].title}
                                                            </li>
                                                        </a>

                                                    </Link>
                                                </ul>
                                                :
                                                <ul className="categoryaccordion-list-body  all-transition m-0 categoryaccordion-lineheight">
                                                    {/* <Link href={`${assetPrefix}/product-category/${item.productCategoryAttributes[0].permalink}`}> */}
                                                    <a className="cursor-pointer d-flex align-items-center">
                                                        <div className="active-title "></div>
                                                        <li className=" font-weight-bold categoryaccordion-title  font-14">
                                                            {item.productCategoryAttributes[0].title}
                                                        </li>
                                                    </a>
                                                    {/* </Link> */}
                                                    {Children.toArray(
                                                        item.childs.map((child) =>
                                                            <Link href={`/product-category/${child.productCategoryAttributes[0].permalink}`} >
                                                                <a className=" categoryaccordion-listACcordion">
                                                                    <li className={`font-14 categoryaccordion-item pl-3 ml-3 ${isRtl ? ' pr-4' : ' '} `}>{child.productCategoryAttributes[0].title}</li>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    <Link href={`/product-category/${item.productCategoryAttributes[0].permalink}`}>
                                                        <a className=" categoryaccordion-listACcordion">
                                                            <li className='pl-3 ml-3 categoryaccordion-item font-14' >
                                                                <i className="fa fa-circle mr-1 font-12"></i>
                                                                {text.ViewAllProducts + ' '}
                                                                {item.productCategoryAttributes[0].title}
                                                            </li>
                                                        </a>

                                                    </Link>
                                                </ul>

                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
    catch (error) {
        const registerLogApi = async () => {
            const logBody = {
                "cookieValue": ReplaceString(cookies.ronix, "-", ""),
                "environment": parseInt('4'),
                "page": 'categoryAccordion',
                "permalink": '',
                "action": "Page loading",
                "message": `${error}`,
                "ipAddress": "0",
                "languageCode": currentlanguageCode
            }
            await logApi(logBody)
        }
        registerLogApi()
        return <Custom404 />
    }

}
export default CategoryAccordion;