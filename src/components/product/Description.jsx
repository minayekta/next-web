import { assetPrefix, currentlanguageCode } from "../../../next.config";
var { text } = require('../../components/translate-files/' + currentlanguageCode + '.json');
import { Reveal, Tween } from 'react-gsap';

const Description = (props) => {
    return (
        <section className="col-12 px-0 description-content bg-BlackA py-4 overflow-hidden">
            <Reveal threshold={.1}>
                <Tween from={{ transform: 'translateX(-300px)' }} to={{ transform: 'translateX(0)' }} stagger={.2} duration={1.5} ease="in(.2, 0.1)">
                    <img src={`${assetPrefix}/assets/img/Mask-description.svg`} className="img-fluid product_description_1" alt="" />
                </Tween>
            </Reveal>
            <Reveal threshold={.1}>
                <Tween from={{ transform: 'translateX(500px)' }} to={{ transform: 'translateX(0)' }} stagger={.2} duration={1.5} ease="in(.2, 0.1)">
                    <img src={`${assetPrefix}/assets/img/Mask-description2.svg`} className="img-fluid product_description_2" alt="" />
                </Tween>
            </Reveal>
            <Reveal threshold={.1}>
                <Tween from={{ transform:'scale(.96)', opacity:'0' }} to={{ transform:'scale(1)', opacity:'1' }} stagger={.2} duration={1.5} ease="in(.2, 0.1)">
            <div className="col-12 col-lg-8 offset-lg-2 py-5 ">
                <span className="c-red font-25 font-weight-bold mb-5 d-blocke">{text.DetailedDescription}</span>
                <span className="text-white description_product pr-2 my-4 d-block custome-scroll-bar-new" dangerouslySetInnerHTML={{ __html: props.productDescription }}></span>
            </div>
            </Tween>
            </Reveal>
        </section>
    )
}
export default Description;