import { useEffect } from 'react';


const WrappedTitle = (props) => {
    useEffect(()=>{
                let start_animation='bottom bottom';
                    let tl = gsap.timeline({
                        scrollTrigger: {
                        trigger: ".title-sec-1",
                        start: start_animation,
                        }
                    });
                    tl.addLabel("start")
                    .from(".title-sec-1 h2 ", {opacity:0,y: 100})
                    .to(".title-sec-1 h2 ", {opacity:1,y: 0})
                    .addLabel("end"); 
    })
    return (
            <div className="col-12 px-0 title-sec-1">
                <div className="col-12 mt-3 px-4">
                    <h2 className='col-12 px-0' itemProp="name" className={props.classh1}>{props.title}</h2>
                </div>
            </div>
    )
}
export default WrappedTitle;