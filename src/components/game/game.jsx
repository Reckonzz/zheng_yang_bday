import React, {useEffect, useState} from "react"
import reactDom from "react-dom"
import Sketch from "react-p5"

import "./game.styles.scss"

import GameCounter from "./gameCounter/gameCounter"
import GoogleDino from "./googleDino/googleDino"

class GameChar {
    constructor(p5){
        this.p5 = p5 
        this.r = 50
        this.x = this.r
        this.y = this.p5.height - this.r
        this.vy = 0 
        this.gravity = 2
    }

    jump() {
        if (this.y == this.p5.height-this.r){
            this.vy = -25;
        }        
    }

    move(){
        this.y += this.vy 
        this.vy += this.gravity
        this.y = this.p5.constrain(this.y, 0, this.p5.height-this.r) 
    }

    show() {
        this.p5.rect(this.x, this.y, this.r, this.r )
        this.p5.rect(this.x + 70, this.y, this.r, this.r )
        this.p5.rect(this.x + 140, this.y, this.r, this.r )
        this.p5.rect(this.x + 35, this.y - 70, this.r, this.r )
        this.p5.rect(this.x + 105, this.y - 140, this.r, this.r )
        this.p5.rect(this.x , this.y -210, this.r, this.r )
        this.p5.rect(this.x + 70, this.y - 210 , this.r, this.r )
        this.p5.rect(this.x + 140, this.y - 210 , this.r, this.r )

        this.p5.rect(this.x + 350, this.y, this.r, this.r )
        this.p5.rect(this.x + 350, this.y - 70, this.r, this.r )
        this.p5.rect(this.x + 315, this.y - 140, this.r, this.r )
        this.p5.rect(this.x + 385, this.y - 140, this.r, this.r )
        this.p5.rect(this.x + 105, this.y - 140, this.r, this.r )
        this.p5.rect(this.x + 280 , this.y - 210, this.r, this.r )
        this.p5.rect(this.x + 420, this.y - 210 , this.r, this.r )
        this.p5.rect(this.x + 140, this.y - 210 , this.r, this.r )
    }
}

const Game = (props) => {
    let a = 300;
    let b = 300;
    let speed = 3;
    let gameChar
    let setup = (p5, canvasParentRef) => {
      let xyz = p5.createCanvas(700, 500).parent(canvasParentRef);
      let x = (p5.windowWidth - p5.width) / 2;
      let y = (p5.windowHeight - p5.height) / 2;
      gameChar = new GameChar(p5)
      xyz.position(x, y);
      xyz.mousePressed(e => keyPress(e))
    };
    function keyPress(e){
        gameChar.jump()
    }
    let draw = (p5) => {
      p5.background("rgb(20%,30%,50%)");
      gameChar.show()
      if (p5.key == ' '){
          gameChar.jump()
      }
      p5.stroke(255);
      p5.strokeWeight(4);
      p5.noFill();
      p5.ellipse(a, b, 100, 100);
      if (a >= p5.width) {
        speed = -3;
      }
      if (a === 90) {
        speed = 3;
      }
      a = a + speed;
      gameChar.move()
    };

    return(
        <div className="game"> 
            <GameCounter showDino={props.showDino}/>
            {props.dinoShown ? <GoogleDino/> : <Sketch setup={setup} draw={draw} className="App" />}
        </div>
    )
}

export default Game 