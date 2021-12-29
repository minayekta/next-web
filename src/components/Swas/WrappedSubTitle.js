import { useEffect } from 'react';


const WrapperdSubTitle = (props) => {
    useEffect(()=>{
        let start_animation='bottom bottom';
            let tl = gsap.timeline({
                scrollTrigger: {
                trigger: ".sec-1-sub-title",
                start: start_animation,
                }
            });
            tl.addLabel("start")
            .from(".sec-1-sub-title>div", {opacity:0,y: 100})
            .to(".sec-1-sub-title>div", {opacity:1,y: 0})
            .addLabel("end"); 
    })
    return (
        <div className="col-12 px-0 sec-1-sub-title">
            <div className=" col-12 px-0 pt-3 wow slideInUp all-transition">
                <h3 itemProp="name" className={props.classname}>
                    {props.h1}
                </h3>
            </div>
            <div className="mb-5 col-12 px-0 wow slideInUp all-transition">
            <b>{props.titr}</b>
                <p itemProp="description" className="text-justify">
                <span dangerouslySetInnerHTML={{__html: props.Paragraph}} />
                </p>
            </div>
        </div>
    )
}

export default WrapperdSubTitle;