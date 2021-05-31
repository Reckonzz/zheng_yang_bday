import React from "react"

import "./videoPage.styles.scss"

const VideoPage = () => {
    return(
        <div className="page">
            <iframe className="video-iframe" src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
        </div>
    )
}

export default VideoPage