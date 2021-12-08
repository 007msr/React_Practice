import "./App.css";
import react, { useState } from "react";

function App() {
  const [name, setName] = useState("Mukesh");
  const changeName = () => {
    if (name === "Mukesh") setName("Raja");
    else setName("Mukesh");
  };

  return (
    <div>
      <h1> {name}</h1>
      <button onClick={changeName}> Click Here To Change Name</button>
    </div>
  );
}

export default App;
