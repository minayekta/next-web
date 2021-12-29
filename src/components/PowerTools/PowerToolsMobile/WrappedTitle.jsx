import { useEffect } from 'react';


const WrappedTitle = (props) => {
    useEffect(() => {
        let start_animation = 'bottom bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger:'#' + props.id,
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from('#' + props.id + ">h2", { opacity: 0, y: 100 })
            .to( '#' + props.id + ">h2", { opacity: 1, y: 0 })
            .addLabel("end");
    });
    return (
        <div className="row ">
            <div className="col-12  mt-3 px-4 fadeInUp-title" id={props.id}>
                <h2 itemProp="name" className={props.classh1}>{props.title}</h2>
            </div>
        </div>
    )
}
export default WrappedTitle;