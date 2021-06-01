import React from "react"

import './googleDino.styles.scss'

const GoogleDino = () => { 
    return(
        <div>
            <iframe className="video-iframe" src='https://www.youtube.com/embed/IwUZrxaX1A0?autoplay=1'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
        </div> 
    )
}

export default GoogleDino