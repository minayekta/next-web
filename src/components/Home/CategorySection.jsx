import $ from 'jquery';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import { categoryBackground, categoryImage, currentlanguageCode, internationalAssets } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode+ '.json');
const CategorySection = ({ productCategories }) => {
    const Hoverfunc = () => {
        $('.hover-find').mouseenter(function () {
            let dataitem = $(this).attr('data-item')

            // $('.img-backcategory-home').fadeOut();
            // $('.img-backcategory-home').attr('src', `${categoryBackground}/${dataitem}.jpg`);
            // $('.img-backcategory-home').parent().addClass('active')
            // $('.img-backcategory-home').remove()
            // 
            // $('.img-backcategory-home').fadeIn();
            $('.parent-categoryImage').removeClass('active');
            $('.img-backcategory-home').removeClass('Z-index-2');
            let imgparent = $('[data-parent = ' + dataitem + ']');
            if (imgparent.hasClass('active')) {
            } else {
                imgparent.find('img').attr('src', `${categoryBackground}/${dataitem}.jpg`);
                imgparent.find('img').addClass('Z-index-2');
                imgparent.addClass('active')
            }
        })
    }
    useEffect(() => {
        Hoverfunc();
        const light = document.getElementById('light')
        $('.cal').mousemove(e => {
            var y = e.pageY - $('.cal').offset().top;
            if (parseInt(e.pageY - $('.cal').offset().top) > 0 && parseInt(e.pageX - $('.cal').offset().left) > 0) {
                light.style.top = e.pageY - $('.cal').offset().top + "px";
                light.style.left = e.pageX - $('.cal').offset().left + "px";
            }

        });
        const themes = document.querySelectorAll('.themes li')
        for (var i = 0; i < themes.length; ++i) {
            themes[i].addEventListener('click', e => {
                document.documentElement.classList = [e.target.classList.value]
            })
        }

    }, []);

    return (
        <Fragment>

            <section className="category-section d-md-none d-block">
                <div className="category-box">
                    <div className="Category-main-title-Mobile font-16 p-3 mb-3"><p>{text.RonixToolsCategory}</p></div>
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            {productCategories.map(item =>
                                <div className='col-6 p-2 col-sm-4' >
                                    <Link href={`/product-category/${item.productCategoryAttributes[0].permalink}`}>
                                        <a className='d-block col-12 px-0 text-white border border-white' >
                                            <img className="img-fluid" src={`${categoryImage}${item.referenceId}.jpg`} alt="" />
                                            <span className="category-title-mobile w-100">{item.productCategoryAttributes[0].title}</span>
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>



            </section>

            {/* <div className="row bg-dark">
                           <div className="col-md-4">Power Tools</div>
            
                                  
                        </div> */}
            {/* <section className="category-section">
                            <div className="container Category-Container">
            
                                <img className="img-fluid" src={`${internationalAssets}img/mock-category.jpg" />
            
                                <div className="category-box">
                                    <div className="Category-main-title"><p>Ronix Tools Company</p></div>
                                    <div className="row px-3 justify-content-between mt-3">
                                        {productCategories.map(item => <div className="category-name-box">
                                            
                                            {item.productCategoryAttributes[0].title}
                                            
                                            </div>)}
                                    </div>
            
                                    <div id="light"></div>
                                </div>
            
            
                            </div>
            
                        </section> */}
                        
            <section className="category-section d-xl-block d-none">
                <div className="category-box vh-100">

                    <ul className="img-box-category h-100 position-relative">
                        <li className=" col-12 parent-categoryImage active" data-parent={'25'}><img className="img-fluid img-backcategory-home Z-index-2" src={`${internationalAssets}/img/CAtegoryHome/25.jpg`} /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'22'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'20'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'30'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'21'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'24'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'23'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'26'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'27'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'19'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'29'}><img className="img-backcategory-home" src="" alt="" /></li>
                        <li className=" col-12 parent-categoryImage" data-parent={'73'}><img className="img-backcategory-home" src="" alt="" /></li>
                    </ul>
                    <div className="Category-main-title"><p>{text.RonixToolsCategory}</p></div>
                    <div className='grid-container theme-default'>
                        {/* <div className='mask top'></div>
            <div className='mask left'></div> */}
                        <div className='content'>
                            <div className='cal row overflow-hidden' id="cal">
                                {productCategories.map(item =>
                                    <Link href={`/product-category/${item.productCategoryAttributes[0].permalink}`}>
                                        <a className='day col-lg-4 col-xl-4 col-md-4 col-sm-6 text-white hover-find' data-item={item.referenceId}>

                                            <div tabindex='0'>
                                                {item.productCategoryAttributes[0].title}
                                            </div>
                                        </a>
                                    </Link>
                                )}




                                <div id='light'></div>
                            </div>

                        </div>
                        {/* <div className='mask right'></div>
            <div className='mask bottom'></div> */}
                    </div>
                </div>



            </section>


        </Fragment >


    );
}

export default CategorySection;