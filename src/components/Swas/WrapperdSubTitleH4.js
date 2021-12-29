import { useEffect } from 'react';


const WrapperdSubTitle = (props) => {
    
useEffect(()=>{
            let start_animation='top bottom';
                let tl = gsap.timeline({
                    scrollTrigger: {
                    trigger: ".sec-4",
                    start: start_animation,
                    }
                });
                tl.addLabel("start")
                .from(".sec-4 h4", {opacity:0,y: 100})
                .to(".sec-4 h4", {opacity:1,y: 0})
                .addLabel("end"); 
                let tl2 = gsap.timeline({
                    scrollTrigger: {
                    trigger: ".sec-5",
                    start: start_animation,
                    }
                });
                tl2.addLabel("start")
                .from(".sec-5 div", {opacity:0,y: 100})
                .to(".sec-5 div", {opacity:1,y: 0})
                .addLabel("end"); 
        })
    return (
        <div className="">
            <div className="sec-4  pt-3 wow slideInUp">
                <h4 itemProp="name" className={'all-transition '+props.classname}>
                    {props.h1}
                </h4>
            </div>
            <div className="sec-5 mb-5 wow slideInUp">
                <div className='col-12 px-0 all-transition'>
                    <b>{props.titr}</b>
                    <p itemProp="description" className="sec-5 text-justify">
                    <span dangerouslySetInnerHTML={{__html: props.Paragraph}} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WrapperdSubTitle;