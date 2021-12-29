import { useEffect } from 'react';



const VideoYouTub = (props) => {
    useEffect(() => {
        let start_animation = 'bottom bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#' + props.id,
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from('#' + props.id + '>iframe', { opacity: 0, y: 100 })
            .to('#' + props.id + '>iframe', { opacity: 1, y: 0 })
            .addLabel("end");
    })
    return (
        <>
            <div className="youtub-video overflow-hidden" id={props.id}>
                <iframe className="img-fluid all-transition" width="560" height="315" src={`${props.Src}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    )
}
export default VideoYouTub;