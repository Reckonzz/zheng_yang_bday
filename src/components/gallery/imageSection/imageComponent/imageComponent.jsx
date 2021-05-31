import React from "react"

import "./imageComponent.styles.scss"

const ImageComponent = (props) => { 
    return(
        <div className="image-component">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={`${process.env.PUBLIC_URL + props.wish.src}`} alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <h1>{props.wish.name}</h1>
                        <p>{props.wish.caption}</p>
                        <p>{props.wish.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageComponent