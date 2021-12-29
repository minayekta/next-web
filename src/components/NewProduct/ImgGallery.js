import $ from 'jquery';
import { useContext, useEffect, useState } from 'react';
import WebSiteContext from '../Context/WebSiteContext';
import Config, { assetPrefix } from './../../../next.config';
const ImgGallery = (props) => {
    const context = useContext(WebSiteContext)
    const [imgIndex, setImgIndex] = useState(context.counter);
    let imageCompressorAddress=assetPrefix+'/_next/image?url=';
    let imageAppendix='&w=640&q=80'
    useEffect(() => {
        $('.overlay-popup').click(function(){
            $('.img-gallery').removeClass('d-flex')
            $('.img-gallery').addClass('d-none')
        })
        setTimeout(function(){
            $('.img-gallery').addClass('d-flex')
            $('.img-gallery').removeClass('d-none')
        },300)
        setImgIndex(context.counter)
    }, [context.counter])
    return (
        <>
        <div className='col-12 d-none equal img-gallery'>

                <span className={`${imgIndex===0?'disable':''} px-5 pt-5 cursor-pointer d-inline-block`} onClick={() => {imgIndex!==0?setImgIndex(imgIndex - 1):null}}>
                    
                <svg width='40px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 19"><path fill='#fff' d="M9.5,19a.47.47,0,0,0,.35-.15.48.48,0,0,0,0-.7L1.21,9.5,9.85.85a.48.48,0,0,0,0-.7.48.48,0,0,0-.7,0l-9,9a.48.48,0,0,0,0,.7l9,9A.47.47,0,0,0,9.5,19Z"/></svg>
                </span>
            <div className='col-8 px-0'>
                {props.data.map((item, index) => {
                    return (
                        <img className={`${index === imgIndex ? 'active' : ''} img-fluid`} src={index === imgIndex ?imageCompressorAddress+ Config.productImageUrl + '/' + props.Productcode + '/' + props.data[imgIndex].originalImagUrl+imageAppendix:index === imgIndex+1 ? imageCompressorAddress+Config.productImageUrl + '/' + props.Productcode + '/' + props.data[imgIndex+1].originalImagUrl +imageAppendix:index === imgIndex-1 ?imageCompressorAddress+ Config.productImageUrl + '/' + props.Productcode + '/' + props.data[imgIndex-1].originalImagUrl +imageAppendix: ''} />
                    )
                })}
            </div>

            <span className={`${imgIndex>=(props.data.length-1)?'disable':''} px-5 pt-5 cursor-pointer d-inline-block`}  onClick={() => {imgIndex<(props.data.length-1)?setImgIndex(imgIndex + 1):null}}>
                    

                    <svg width="40px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 19"><path fill={'#fff'} d="M.5,19a.47.47,0,0,1-.35-.15.48.48,0,0,1,0-.7L8.79,9.5.15.85a.48.48,0,0,1,0-.7.48.48,0,0,1,.7,0l9,9a.48.48,0,0,1,0,.7l-9,9A.47.47,0,0,1,.5,19Z"/></svg>


                </span>
        </div></>
    );
}
export default ImgGallery;