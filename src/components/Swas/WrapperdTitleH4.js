import { useEffect } from 'react';


const WrapperdTitleH4 = (props) => {
    useEffect(()=>{
                let start_animation='bottom bottom';
                    let tl = gsap.timeline({
                        scrollTrigger: {
                        trigger: "#"+props.id,
                        start: start_animation,
                        }
                    });
                    tl.addLabel("start")
                    .from("#"+props.id+">div", {opacity:0,y: 100})
                    .to("#"+props.id+">div", {opacity:1,y: 0})
                    .addLabel("end"); 
            })
    return (
            <div id={props.id} className="row sec-3-sub-title">
                <div className="col-12 all-transition mt-3 px-4">
                    <h4 itemProp="name" className={props.classh1}>{props.title}</h4>
                </div>
            </div>
    )
}
export default WrapperdTitleH4;