import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';

const CardBox1 = (props) => {
    useEffect(()=>{
                let start_animation='top bottom';
                    let tl = gsap.timeline({
                        scrollTrigger: {
                        trigger: '#'+props.id,
                        start: start_animation,
                        }
                    });
                    tl.addLabel("start")
                    .from('#'+props.id+">div", {opacity:0,y: 100})
                    .to('#'+props.id+">div", {opacity:1,y: 0})
                    .addLabel("end"); 
            })

    return (
        <div id={props.id} className={props.classColmd}>
            <div className={`alt-transition ${props.classCol}`}>
                <div className="" data-height="400" data-theme="light-thick">
                    <div className="img-box wide mb-4  overflow-hidden">
                        <img itemProp="image" className="wow fadeInUp" width={props.width} height={props.height} src={props.CardSrc} alt="" />
                    </div>
                    <h4 itemProp="name" className="text-black wow fadeInUp fontT ">{props.CardTitle}</h4>
                    {/* <Scrollbars  autoHeightMin={-3} autoHeightMax={400}>
                      
                    </Scrollbars> */}
                    <div className="overflow-hidden">
                        <p itemProp="description" className="text-justify   text-black fadeInUp wow">
                            <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph }} /> <br />
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph2 }} /><br />
                                <span dangerouslySetInnerHTML={{ __html: props.CardParaghraph3 }} />
                            </Scrollbars>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardBox1;