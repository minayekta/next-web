import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';


const CardBox2 = (props) => {
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
        <div id={props.id} className={props.classname}>

            <div className={`alt-transition ${props.classP}`}>
                <h4 itemProp="name" className="font-weight-bold h6 wow fadeInUp ">{props.CardBox2Title}</h4>
                <div className="scroll-box  overflow-hidden" data-height="400" data-theme="dark-thick">
                    <p className="text-justify wow fadeInUp">
                        <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                            {props.CardBox2Paragraph}
                            <br /><br /><br /><br />
                        </Scrollbars>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardBox2;