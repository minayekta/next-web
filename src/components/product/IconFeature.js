
import { Reveal, Tween } from 'react-gsap';

const IconFeature = (props) => {
    return (
        <div className='col-12 px-0 bk-white border-bottom py-5'>
            
        <div className='container'>
            <div className='col-12 col-md-10 py-md-5 offset-md-1 col-xl-8 offset-xl-2 icon-feature'>
                <div className='col-6 col-md-3 mb-4 mb-md-0 px-0 text-center'>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'scale(0.2)' }} to={{ opacity: 1, transform: 'scale(1)' }} delay={0.3} duration={0.5} ease="easein(.02, 0.1)">
                            <img width={'80px'} src={'/assets/img/mock/sample-icon.png'} />
                        </Tween>
                    </Reveal>
                </div>
                <div className='col-6 col-md-3 mb-4 mb-md-0 px-0 text-center'>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'scale(0.2)' }} to={{ opacity: 1, transform: 'scale(1)' }} delay={0.6} duration={0.5} ease="easein(.02, 0.1)">
                            <img width={'80px'} src={'/assets/img/mock/sample-icon.png'} />
                        </Tween>
                    </Reveal>
                </div>
                <div className='col-6 col-md-3 mb-4 mb-md-0 px-0 text-center'>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'scale(0.2)' }} to={{ opacity: 1, transform: 'scale(1)' }} delay={0.9} duration={0.5} ease="easein(.02, 0.1)">
                            <img width={'80px'} src={'/assets/img/mock/sample-icon.png'} />
                        </Tween>
                    </Reveal>
                </div>
                <div className='col-6 col-md-3 mb-4 mb-md-0 px-0 text-center'>
                    <Reveal threshold={.001}>
                        <Tween from={{ opacity: 0, transform: 'scale(0.2)' }} to={{ opacity: 1, transform: 'scale(1)' }} delay={1.2} duration={0.5} ease="easein(.02, 0.1)">
                            <img width={'80px'} src={'/assets/img/mock/sample-icon.png'} />
                        </Tween>
                    </Reveal>
                </div>
            </div>
        </div>
        </div>
    )
}
export default IconFeature;