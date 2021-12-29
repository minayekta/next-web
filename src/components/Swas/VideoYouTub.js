import { useEffect } from 'react';



const VideoYouTub = (props) => {
    useEffect(() => {
        let start_animation = 'bottom bottom';
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-saws",
                start: start_animation,
            }
        });
        tl.addLabel("start")
            .from(".video-saws>div", { opacity: 0, y: 100 })
            .to(".video-saws>div", { opacity: 1, y: 0 })
            .addLabel("end");
    })
    return (
        <div className="video-saws col-12 px-0">
            <div className='col-12 px-0 all-transition'>
                <iframe className="wow slideInUp" width="100%" height="auto" src={`${props.Src}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default VideoYouTub;