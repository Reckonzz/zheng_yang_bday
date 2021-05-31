import React from "react"

import "./imageSection.styles.scss"

import ImageComponent from "./imageComponent/imageComponent"

const ImageSection = (props) => { 

    return( 
        <section className="image-section">
            {props.wishes.map(wish => <ImageComponent wish={wish}/>)}
        </section>
    )
}

export default ImageSection