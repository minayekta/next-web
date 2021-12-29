import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';


const TopPageHead2 = (props) => {
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
            <div className="all-transitions pt-3 pb-5 wow ">
                <h1 itemProp="name" className=" text-dark text-uppercase font-weight-bold text-center ">
                    {props.title}
                </h1>
            </div>
            <div className="all-transitions row overflow-hidden youProb">
                <div className="all-transition col-md-6 col-12 wow fadeInUp">
                    <div className="img-box">
                        <img itemProp="image" width={props.width} height={props.height} className="d-block mx-auto img-fluid" src={props.src} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12 wow fadeInUp mt-3 youProb">
                    <div  data-height="250" data-theme="light-thick">
                        <p itemProp="description" className="text-justify trigerCordedDrills">
                            <Scrollbars className="ScrollBar-Box text-dark" autoHeightMin={-3} autoHide={true}>

                                <span dangerouslySetInnerHTML={{ __html: props.paragraph }} />
                            </Scrollbars>
                        </p>
                    </div>
                </div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default TopPageHead2;