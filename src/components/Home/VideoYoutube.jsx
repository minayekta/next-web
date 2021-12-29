import React from 'react';



const VideoYoutube = (props) => {
    return (
        <>
            <div className="youtube-video overflow-hidden">
                <iframe className="wow slideInUp desktop" width="560" height="315" src={`${props.Src}?rel=0`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
    )
}
export default VideoYoutube;