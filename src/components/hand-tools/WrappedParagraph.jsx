import { useEffect } from 'react';


const WrappedParagraph = (props) => {
    useEffect(()=>{
                let start_animation='top bottom';
                    let tl = gsap.timeline({
                        scrollTrigger: {
                        trigger: '#'+props.id,
                        start: start_animation,
                        }
                    });
                    tl.addLabel("start")
                    .from('#'+props.id+">p", {opacity:0,y: 100})
                    .to('#'+props.id+">p", {opacity:1,y: 0})
                    .addLabel("end"); 
            })
    return (
        <div id={props.id} className="overflow-hidden">
            <p itemProp="description" className="all-transition px-0 text-justify my-1 text-black"><span dangerouslySetInnerHTML={{__html: props.paragraph}} /></p>
        </div>

    )
}
export default WrappedParagraph;