import { useEffect } from 'react';

const WrappedParagraph = (props) => {
    useEffect(()=>{
        let start_animation='bottom bottom';
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
        <div id={props.id} className="sec-3-sub-content">
            <div className='col-12 px-0 all-transition'>
                
            <p itemProp="description" className="text-justify my-3 text-dark"><span dangerouslySetInnerHTML={{__html: props.paragraph}} /></p>
            </div>
        </div>

    )
}
export default WrappedParagraph;