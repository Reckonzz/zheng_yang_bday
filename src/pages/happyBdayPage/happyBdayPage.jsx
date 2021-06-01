import React from "react"

import "./happyBdayPage.styles.scss"

const HappyBdayPage = () => {
    return (
        <div id="happy-bday-page" className="page happy-bday-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png` }}> 
            <div className="birthday-wish"> Happy Birthday Zheng Yang!</div>
        
        </div>
    )
}

export default HappyBdayPage