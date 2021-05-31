import React from "react"

import "./galleryPage.styles.scss"

import ImageSection from "../../components/gallery/imageSection/imageSection"

const GalleryPage = () => {
    const wishes = [
        {
            src: '/images/zy_building.jpg',
            name: 'Clarence',
            caption: 'put a qoute or caption here', 
            message:'Hi Zheng Yang, Happy Birthday :)))',    
        },
        {
            src: '/images/zy_design.jpg',
            name: 'Name',
            caption: 'put a qoute or caption here', 
            message:'Put a message here ',  
        },
        {
            src: '/images/zy_grp_photo.jpg',
            name: 'Name',
            caption: 'put a qoute or caption here', 
            message:'Put a message here',  
        },
        {
            src: '/images/zy_sleep.jpg',
            name: 'Name',
            caption: 'put a qoute or caption here', 
            message:'Put a message here',  
        },
    ]
    return (
        <div className="page">
            <ImageSection wishes={wishes}/>
        </div> 
    )
}

export default GalleryPage