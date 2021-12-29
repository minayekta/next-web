import { useEffect } from 'react';


const BoxedCard1 = (props) => {
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
        <>
            <div id={props.id} className=" wow zoomIn" >
                <div className="alt-transition bg-gray-medium ">
                    <div className="wide">
                        <img itemProp="image" className="wow zoomIn"width={props.width} height={props.height} src={props.Src} alt="" />
                    </div>
                    <h2 itemProp="name" className="text-black my-3">{props.title}</h2>
                    <div>
                        <p itemProp="description" className="text-justify text-black">
                            {props.Paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoxedCard1;