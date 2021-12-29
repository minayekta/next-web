import { useEffect } from 'react';



const VideoYouTub = (props) => {
    useEffect(() => {
        let start_animation = 'top bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#' + props.id,
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from('#' + props.id + ">iframe", { opacity: 0, y: 100 })
            .to('#' + props.id + ">iframe", { opacity: 1, y: 0 })
            .addLabel("end");
    })
    return (
        <>
            <div id={props.id} className="youtube-video overflow-hidden">
                <iframe className="wow slideInUp" width="100%" height="auto" src={`${props.Src}?rel=0`} frameBorder="0" allow="all-transition accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    )
}
export default VideoYouTub;