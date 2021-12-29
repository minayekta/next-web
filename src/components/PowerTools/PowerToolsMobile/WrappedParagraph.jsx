import { Fragment, useEffect } from 'react';


const WrappedParagraph = (props) => {
    useEffect(() => {
        let start_animation = 'top bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#' + props.id,
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from('#' + props.id + '>P', { opacity: 0, y: 100 })
            .to('#' + props.id + '>P', { opacity: 1, y: 0 })
            .addLabel("end");
    });
    return (
        <Fragment>
            <div className="overflow-hidden  " id={props.id}>
                <p itemProp="description" className="all-transition  text-justify m-3 text-dark"><span dangerouslySetInnerHTML={{ __html: props.paragraph }} /></p>
            </div>
        </Fragment>

    )
}
export default WrappedParagraph;