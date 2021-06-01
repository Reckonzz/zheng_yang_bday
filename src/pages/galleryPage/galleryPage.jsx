import React from "react"

import "./galleryPage.styles.scss"

import ImageSection from "../../components/gallery/imageSection/imageSection"

const GalleryPage = () => {
    const wishes = [
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
            src: '/images/zy_lecture.jpg',
            name: 'Chun Hui',
            caption: '', 
            message:`Happy birthday zy2! Hope you adjourned all your meetings and had a great day today- oh nevermind we're meeting later. Thanks for being a great friend, here's to more fun and games in the future :")`  
        },
        {
            src: '/images/stephanie_with_zy.jpg',
            name: 'Stephanie',
            caption: '', 
            message:'Happy birthday zy!! Hope you continue to be just as sarcastic and knowledgeable as you are! Funny how you always want gossip drama from others?!',  
        },
        {
            src: '/images/ribena.jpg',
            name: 'Pin',
            caption: '', 
            message:'Happy birthday Zheng Yang :)',  
        },
        {
            src: '/images/kush_with_zy.jpg',
            name: 'Kushagra',
            caption: '', 
            message:`Happy birthday Zheng Yang! Thanks for being such an excellent roomie for 8 whole months and putting up with all my usual nonsense haha. You're an incredible guy, thanks for all your help!`,  
        },
        {
            src: '/images/zy_sleep.jpg',
            name: 'Bryan',
            caption: '', 
            message:`Happy birthday Dr Zheng Yang, hope you have a fun time in your 22st year`
        },
        {
            src: '/images/zy_study.jpg',
            name: 'Jafni',
            caption: '', 
            message:`Hey Zheng Yang. HAPPY BIRTHDAY!! Really thankful for all the help and tutoring you’ve given us the past year. I’m glad that you’re happy in your internship and everything else in your life right now. I hope things continue to be great for you. Stay as smart and sarcastic as ever kay and whatever happens “c'est la vie” right? :P We’ll be here for you if you need us~ (although we probably need your tutoring more)
            :)`,  
            fontSize: '0.8em',
        },
        {
            src: '/images/zy_pose.jpg',
            name: 'Clarence',
            caption: 'When life gives you lemons', 
            message:`Hi Zheng Yang, Happy Birthday :))). Even though you flame me alot and I flame you alot, you have been a really great friend to me :'). I really appreciated all the times that you comforted and checked up on me and all the Dstar bistro dinners. I hope that you will achieve all your ambitions in SUTD and that we will continue to have more fruitful and enriching memories in SOAR :). Jiayous and stay awesome`,
            fontSize: '0.8em',
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