import "./App.css";
import { useState } from "react";
function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message"); // ใช้เปลี่ยนค่า greeting-container
  const [newMessage, setNewMessage] = useState(""); // ใช้รับค่าใน input
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setNewMessage(event.target.value);
          }}
          value={newMessage}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage(newMessage);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
