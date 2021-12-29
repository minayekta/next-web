import { useEffect } from 'react';


const WrappedBannerImage = (props) => {
   useEffect(() => {
            let start_animation='bottom bottom';
                let tl = gsap.timeline({
                    scrollTrigger: {
                    trigger: '#'+props.id,
                    start:start_animation,
                    }
                });
                tl.addLabel("start")
                .from('#'+props.id+">div", {opacity:0,y: 100})
                .to('#'+props.id+">div", {opacity:1,y: 0})
                .addLabel("end"); 
   });
    return (
    
            <div id={props.id} className="col-12 px-0">
                <div className="wide col-12 px-0 all-transition">
                    <img width={props.width} height={props.height} itemProp="image" className="wow slideInUp img-fluid" src={props.Src} alt="" />
                </div>
        </div>

    )
}
export default WrappedBannerImage;