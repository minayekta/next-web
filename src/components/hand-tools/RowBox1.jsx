import { useEffect } from 'react';

const RowBox1 = (props) => {
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
        <React.Fragment>
<div id={props.id}>
            <div  className="alt-transition row no-gutters bg-white overflow-hidden" >
                <div className="col-md-6">
                    <div className="wide wow fadeInUp">
                        <img itemProp="image" width="100%" height="auto" src={props.RowBox1Src} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="px-3 py-4 mb-0 bg-white text-black wow slideInRight">{props.RowBox1}</h4>
                    <div className="px-3 py-4 scroll-box text-black overflow-hidden" data-height="295" data-theme="dark-thick">
                        <p itemProp="description" className="text-justify wow slideInRight">
                            <span>
                                {props.RowBox1Paragraph}
                            </span>
                        </p>
                    </div>
                </div>
            </div></div>
        </React.Fragment>
    )
}
export default RowBox1;