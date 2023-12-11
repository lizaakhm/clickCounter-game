import { useRef } from "react";
import "./App.css"
import Game from "./Game";

function App() {
  const restartGameRef = useRef(null)
  return (
    <div className="App">
      
      <div>
            <h1>Click counter game</h1>
            <p>Click the button as many times as you can within 10 seconds!</p>
        </div>
<Game ref={restartGameRef}/>
  <button className="Click" onClick={()=> restartGameRef?.current.restartGame()}>Restart</button>
    </div>
  );
}

export default App;
