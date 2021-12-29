import { useEffect } from 'react';


const WrappedTitle = (props) => {

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
            <div id={props.id} className="col-12">
                <div  className="alt-transition col-12 overflow-hidden mt-3 px-4">
                    <h2 itemProp="name"  className={props.classh1}>{props.title}</h2>
                </div>
            </div>
    )
}
export default WrappedTitle;