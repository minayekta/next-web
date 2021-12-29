import { Children } from 'react';
import { Reveal, Tween } from 'react-gsap';
import Config, { assetPrefix, currentlanguageCode } from '../../../next.config';
var { text } = require('../../components/translate-files/' + currentlanguageCode + '.json');

const Specification = ({ productCode, images, pecificationsContent, isMobile }) => {

    const Images = images;
    return (
     pecificationsContent==""?null:<div className="col-12 px-0 bg-redA d-lg-flex equal overflow-h specification">
     {
         isMobile
             ?
             <div className="col-12 col-lg-6 px-0 specification-background-mobile" style={{ 'z-index': '2', 'backgroundImage': 'url(' + `${assetPrefix}/_next/image?url=${Config.productImageUrl + '/' + productCode + '/' + Images[3]?.originalImagUrl} &w=640&q=80` + ')' }}></div>
             :

             <Reveal threshold={.001}>
                 <Tween from={{ opacity: 0, transform: 'rotate(-10deg)' }} to={{ opacity: 1, transform: 'rotate(0deg)' }} stagger={.3} duration={1} ease="in(.2, 0.1)">
                     <div className="col-12 col-lg-6 px-0 specification-background" style={{ 'z-index': '2', 'backgroundImage': 'url(' + `${assetPrefix}/_next/image?url=${Config.productImageUrl + '/' + productCode + '/' + Images[3]?.originalImagUrl}&w=640&q=80` + ')' }}></div>
                 </Tween>
             </Reveal>}
     <div className="col-12 col-lg-6 pl-0">
         <div className="container">
             <Reveal threshold={.1}>
                 <Tween from={{ opacity: 0, }} to={{ opacity: 1 }} stagger={.2} duration={1} ease="in(.2, 0.1)">
                     <div className="background_specification_1"><img className='img-fluid' src={`${assetPrefix}/assets/img/back_red1.svg`} alt="" /></div>
                 </Tween>
             </Reveal>
             <Reveal threshold={.1}>
                 <Tween from={{ opacity: 0, }} to={{ opacity: 1 }} stagger={.2} duration={1} ease="in(.2, 0.1)">
                     <div className="background_specification_2"><img src={`${assetPrefix}/assets/img/Triangle2.svg`} className="img-fluid" alt="" /></div>
                 </Tween>
             </Reveal>
             <div className="col-12 col-md-8 offset-md-2 py-4 pl-0 table-specification">
                 <Reveal threshold={.1}>
                     <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} ease="in(.2, 0.1)">
                         <p className="text-white font-weight-bold font-30">{text.Specification}</p>
                         {
                             pecificationsContent != null ?

                                 Children.toArray(
                                     pecificationsContent.map(item =>
                                         <div className="col-12 text-white border-bottom px-0">
                                             <div className='col-6 col-md-4 col-xl-4 px-0'>
                                                 <div className='  mb-xl-1  py-1'><span className={'font-13'}>{item.title}</span></div>
                                             </div>

                                             <div className='col-6 col-md-8 col-xl-8 px-0 px-xl-0'>
                                                 <div className=' col-12 col-xl-10  mb-1 py-1 '><span className={'font-13'}>{item.value}</span></div>
                                             </div>
                                         </div>
                                     )
                                 )
                                 : null
                         }
                     </Tween>
                 </Reveal>
             </div>
         </div>
     </div>
 </div>
    )
}

export default Specification;