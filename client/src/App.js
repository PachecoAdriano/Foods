import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };

  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>
      <label>Food name: </label>
      <input
        type="text"
        onChange={(event) => {
          setFoodName(event.target.value);
        }}
      />
      <label>Days since you ate it:</label>
      <input
        type="number"
        onChange={(event) => {
          setDays(event.target.value);
        }}
      />
      <button onClick={addToList}>Add To List</button>
    </div>
  );
}

export default App;
