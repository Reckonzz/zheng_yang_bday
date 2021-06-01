import React from "react"

import "./gameCounter.styles.scss"

const gameCounter = (props) => { 
    return(
        <div className="game-counter" onClick={props.showDino}>
            <span>Honestly this game doesnt do anything (Click to jump a few times, then click me) </span>
            {/* <span>{props.numClicks}</span> */}
        </div> 
    )    
}

export default gameCounter