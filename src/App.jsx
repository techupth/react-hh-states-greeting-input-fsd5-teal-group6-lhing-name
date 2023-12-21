import "./App.css";
import { useState } from "react";

function App() {
  const [GreetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [Greetinginputtext, setGreetinginputtext] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{GreetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setGreetinginputtext(event.target.value);
          }}
          value={Greetinginputtext}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage(Greetinginputtext);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
