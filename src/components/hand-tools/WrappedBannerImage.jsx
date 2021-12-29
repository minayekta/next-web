import { useEffect } from 'react';


const WrappedBannerImage = (props) => {
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
    
            <div id={props.id} className="text-white wow">
                <div className="alt-transition wide overflow-hidden">
                    <img width={props.width} height={props.height} itemProp="image" className="wow slideInUp" src={props.Src} alt="" />
                </div>
        </div>

    )
}
export default WrappedBannerImage;