import React from "react"
import Fireworks from "fireworks-react"

import "./happyBdayPage.styles.scss"

const HappyBdayPage = () => {
    return (
        <div className="page happy-bday-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/happyBirthdayBackground.jpg` }}> 
            Happy Birthday Zheng Yang :) 
        </div>
    )
}

export default HappyBdayPage