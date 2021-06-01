import React from "react"

import "./galleryPage.styles.scss"

import ImageSection from "../../components/gallery/imageSection/imageSection"

const GalleryPage = () => {
    const wishes = [
        {
            src: '/images/zy_pose.jpg',
            name: 'Clarence',
            caption: 'put a qoute or caption here', 
            message:'Hi Zheng Yang, Happy Birthday :)))',    
        },
        {
            src: '/images/zy_design.jpg',
            name: 'Jonathan',
            caption: '', 
            message:'Happy Bday ZY! Hope your stress decreases along with your remaining age lol jk ',  
        },
        {
            src: '/images/zy_grp_photo.jpg',
            name: 'Lisa Francis',
            caption: '', 
            message:'Happy birthday Zheng Yang! Thank you for being such a great friend and group mate :)) You helped me a lot both in terms of academics and other things too and i’m rly v grateful for everything. Thank you for all the advice and support throughout the term. I genuinely wouldn’t have survived without your help hahaha. Anyways, hope your work is gg well and that you’re doing okay! Have a great dayy and once agn happy bday!',  
            fontSize: '0.8em' 
        },
        {
            src: '/images/zy_sleep.jpg',
            name: 'Name',
            caption: 'put a qoute or caption here', 
            message:'Put a message here',  
        },
        {
            src: '/images/zy_sleep.jpg',
            name: 'Stephanie',
            caption: '', 
            message:'Happy birthday zy!! Hope you continue to be just as sarcastic and knowledgeable as you are! Funny how you always want gossip drama from others?!',  
        },
        {
            src: '/images/zy_sleep.jpg',
            name: 'Pin',
            caption: '', 
            message:'Happy birthday Zheng Yang :)',  
        },
    ]
    return (
        <div className="page gallery-page">
            <div className="gallery-page-container">
                <ImageSection wishes={wishes}/>
            </div>
        </div> 
    )
}

export default GalleryPage