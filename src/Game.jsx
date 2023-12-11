import React, { useEffect, useState, forwardRef, useImperativeHandle} from "react";
import "./App.css"


const Game = (props, ref) => {


const [timeLeft, setTimeLeft] = useState(10)
const [clickCount, setClickCount] = useState(0)
const [isGameOver, setIsGameOver] = useState(false)

useEffect(() =>{
if(timeLeft > 0){
    setTimeout(() => {
        setTimeLeft(timeLeft - 1)
    }, 1000);
}else{
    setIsGameOver(true)
}
}, [timeLeft])

const increaseCount = () => {
if (!isGameOver)setClickCount(clickCount +1)
}

const restartGame = () =>{
    setTimeLeft(10)
    setClickCount(0)
    setIsGameOver(false)
}

useImperativeHandle(
     ref, () => {
        return{
   restartGame
        }

},[]
)


    return(
        <div>
            
            <h3>Time left  {timeLeft} seconds</h3>
            <h4>Click count - {clickCount}</h4>
            <button className="Click" onClick={increaseCount}>Click Me!</button>

            {
                isGameOver && (
                    <>
                    <h1>Game over!</h1>
                    </>
                )
            }
        </div>
    )
}

export default forwardRef(Game);
