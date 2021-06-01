import React, { useEffect, useState } from "react"

import "./gamePage.styles.scss"

import Game from "../../components/game/game"

const GamePage = () => {
    const [dinoShown, setDinoShown] = useState(false)

    const showDino = () => {
      setDinoShown(true)
      
    }

    
    return (
        <div className="page"> 
            <Game dinoShown={dinoShown} showDino={showDino}/>
        </div>
    )
}

export default GamePage