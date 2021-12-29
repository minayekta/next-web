import Link from 'next/link';
import { Children, Fragment } from 'react';
import { Reveal, Tween } from 'react-gsap';
import { currentlanguageCode, internationalAssets, isRtl } from '../../../next.config';
var { text } = require('../translate-files/' + currentlanguageCode + '.json');

const Category = ({ allCategoryGrid }) => {

    return (
        <section className={`bg-white col-12 overflow-hidden ${isRtl ? ' ' : ''}`}>
            <div className="container d-xl-flex align-items-center py-2 px-0 px-xl-block">
                <div className={`col-12 col-xl-5 px-0 px-xl-4 order-2 pt-5 offset-xl-1`}>
                    {currentlanguageCode == 'fr' ?
                        <Fragment>
                            <p className={`text-center ${isRtl ? ' text-sm-right' : 'text-sm-left'}  c-red font-weight-bold font-47 text-uppercase`}>{text.Category}</p>
                            <h1 className={`text-center  ${isRtl ? ' text-sm-right' : 'text-sm-left'}  font-weight-bold my-0 font-36 text-uppercase mb-4`}>{text.RonixTools}</h1>
                        </Fragment>
                        : <Fragment>
                            <h1 className={`text-center font-weight-bold my-0 font-36 text-uppercase ${isRtl ? ' text-sm-right' : 'text-sm-left'}`}>{text.RonixTools}</h1>
                            <p className={`text-center c-red font-weight-bold font-47 text-uppercase ${isRtl ? ' text-sm-right' : 'text-sm-left'}`}>{text.Category}</p>
                        </Fragment>}

                    <div className='text-justify font-sm-14 font-xl-20 ' >
                        {text.CategoryDescription}
                    </div>
                    <a className={`${isRtl ? 'float-right' : ''} px-4 py-2 mt-4 cursor-pointer d-inline-block btn-red bk-red border-r-4 font-14 c-white`} href={`/${currentlanguageCode}/all-products`}>
                        <span className='c-white'>
                            {text.ViewMore}
                        </span>
                    </a>
                </div>


                <div className='col-12 col-xl-6 order-1 text-white my-4 px-0'>
                    <Reveal threshold={.1} >
                        <Tween from={{ opacity: '0', transform: 'translateY(100px)' }} to={{ opacity: '1', transform: 'translateY(0px)' }} stagger={.1} duration={1} ease="in(.2, 0.1)" >
                            <div className='row px-1 px-xl-4 d-block'>
                                {Children.toArray(
                                    allCategoryGrid.map((item) =>
                                        <div className={`col-6 col-md-3 col-xl-3 px-2 my-1 mt-4 mt-xl-3 cursor home-item-grid overflow-hidden ${isRtl ? 'float-right' : ''}`}>
                                            <Link className="col-12 px-0 bk-grayD productCategoryImg text-center border-r-4" href={`/product-category/${item.permalink}`} >
                                                <a className="col-12 px-0 bk-grayD productCategoryImg text-center border-r-4" >
                                                    <div className="home-icon col-12 px-0" >
                                                        <img width={90} height={90} className='img-fluid h-100 ' src={`${internationalAssets}/img/categoryIcons/${item.referenceId}.svg`} alt="" />
                                                        {/* <img className='productCategoryImg' src={`${internationalAssets}/img/categoryIcons/${item.referenceId}.svg`} alt="" key={uuidv4()} /> */}

                                                    </div>
                                                    <span className="font-13 pb-3 text-white d-block" >{item.title}</span>

                                                </a>

                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>
                        </Tween>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
export default Category;