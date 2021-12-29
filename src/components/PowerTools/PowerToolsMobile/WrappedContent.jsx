import { useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars';


const WrappedContent = (props) => {
    useEffect(() => {
        let start_animation = 'bottom bottom';
        let tl = gsap.timeline({
                 scrollTrigger: {
                trigger: '#' + props.id,
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from("#" + props.id +  ">div", { opacity: 0, y: 100 })
            .to("#" + props.id +  ">div", { opacity: 1, y: 0 })
            .addLabel("end");
    })
    return (
        <div className="container fadeInUp-WrappedContent" id={props.id}>
            <div className={props.reverse}>
                <div className={props.reverse1}>
                    <h2 itemProp="name" className={props.pstyle}> {props.title}</h2>
                    <div className="scroll-box " data-height="220" data-theme="dark-thick">
                        <p itemProp="description" className="text-justify wow slideInUp">
                            <Scrollbars className="ScrollBar-Box" autoHeightMin={-3} autoHide={true}>
                                {props.paragraph}
                            </Scrollbars>
                        </p>
                    </div>
                </div>
                <div className={props.reverse2}>
                    <div className="img-box wide overflow-hidden" >
                        <img itemProp="image" className="img-fluid" width="540" height="340" src={props.src} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WrappedContent;