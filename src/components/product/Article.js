// import React from 'react';
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/lib/styles.css';
// import TitlesFieldset from "../common/Titles/TitlesFieldset";
// import Link from 'next/link';


// const Article = (props) => {

//     const options = {
//         items: 1,
//         margin: 10,
//         rtl: true,
//         loop: true,
//         autoplay: true,
//         nav: false,
//         dots: true,
//         responsive: {
//             300: {
//                 items: 1,
//             },
//             400: {
//                 items: 1,
//             },
//             768: {
//                 items: 2,
//             },
//             1000: {
//                 items: 3,
//             },
//             1280: {
//                 items: 4,
//             },

//         },
//     };

//     return (
//         <div className='col-12 px-0'>
//             <div className='Article-slider bk-white col-12 '>
//                 <div className={'col-10 offset-1 position-static py-4 pb-5'}>
//                     <TitlesFieldset titleContent={'Article'} titleClass={'font-18 c-black'} />
//                     {props.data.length !== 0 ? <OwlCarousel options={options}>
//                         {props.data.map((item, index) =>
//                             <div className='col-12 px-0 my-4 '>
//                                 <Link href={`${item.link}`}>
//                                     <a href={`${item.link}`} className="griditem-image col-12 px-0 text-dark">
//                                         <div className="col-md-12 griditem-content">
//                                             <div className='col-12 px-0 parent-article-img position-relative all-transition'>
//                                             {item._embedded['wp:featuredmedia']? <img className={'show-product-img mw-100 griditem-margin Img-Article'} src={`${item._embedded['wp:featuredmedia'][0].media_details.sizes["medium"].source_url}`} alt={``} />: null}
//                                             </div>
//                                         </div>
//                                         <div className="col-12 font-16 pt-3 font-weight-bold title-article ltr">
//                                             <span dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
//                                         </div>
//                                         <div className="col-12 my-2 font-13 ltr content-article">
//                                             <span dangerouslySetInnerHTML={{ __html: item.excerpt.rendered.substring(0, 200) }} />

//                                         </div>
//                                         {/* <div className="col-12">
//                                             <a className="font-12 c-grayD px-2 bk-grayA py-1" href={`${item.link}`}>Read more</a>
//                                         </div> */}
//                                     </a>
//                                 </Link>
//                             </div>
//                         )}


//                     </OwlCarousel> : null}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Article;