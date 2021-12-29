
import Image from 'next/image';
import { Reveal, Tween } from 'react-gsap';
import { assetPrefix } from '../../../next.config';
const ProductVideo = (props) => {
    const myLoader = ({ src, height, width, quality }) => {
        return `${assetPrefix}/_next/image?url=${src}&w=${width}&q=${quality || 75}`
    }
    return (
        <Reveal threshold={.01}>
            <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} stagger={.2} duration={.3} ease="easein(.2, 0.1)">

                <div style={{ height: "440px" }} className={'video-box col-12 my-4 bk-white py-2 px-xl-0 py-xl-0 d-flex flex-wrap equal'}>
                    {props.mappedName !== '' || props.mappedName == null ? <div className={props.videoSrc !== null ? 'col-12 mb-xl-0 my-2 my-xl-0 col-xl-6 px-0' : 'col-12 mb-xl-0 my-2 my-xl-0 col-xl-6 px-0 offset-xl-3'}>
                        <Image loader={myLoader} className='img-fluid' src={props.img} alt={props.alt} width={820} height={438} quality="70" />
                    </div> : null}
                    {props.videoSrc ? <div className={props.mappedName !== '' || props.mappedName == null ? 'col-12 col-xl-6 my-2 my-xl-0 px-0' : 'col-12 col-xl-6 my-2 my-xl-0 px-0 offset-xl-3'}>
                        <iframe id="player" type="text/html" width="100%" height={props.img !== '' ? '100%' : '440px'}
                            src={`${props.videoSrc}?rel=0`}
                            frameBorder="0"></iframe>
                    </div> : null}
                </div>
            </Tween>
        </Reveal>
    );
}
export default ProductVideo;

