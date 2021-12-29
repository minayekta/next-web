import Image from "next/image";

import { Reveal, Tween } from 'react-gsap';
const ImageMap = (props) => {
    return (
        <div className={'col-12 px-0'}>

            {props.isMobile
                ?
                <section className="col-12 px-0 bg-BlackA "><Reveal threshold={.001}>
                    <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} duration={0.7} ease="easein(.02, 0.1)">

                        <div className='col-12 px-0'>

                            <Image width={1246} height={666} className="img-fluid" src={props.img} alt="" />

                        </div>
                    </Tween>
                </Reveal>
                </section>
                :

                <section className="col-12 px-0 bg-BlackA py-5"><Reveal threshold={.001}>
                    <Tween from={{ opacity: 0, transform: 'translateY(100px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }} duration={0.7} ease="easein(.02, 0.1)">

                        <div className="col-8 offset-2">
                            <Image loading={'eager'} width={1246} height={666} className="img-fluid" src={props.img} alt="" />

                        </div>
                    </Tween>
                </Reveal>
                </section>
            }
        </div>
    )
}

export default ImageMap;