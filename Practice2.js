import "./App.css";
import react, { useState } from "react";

//Through this code,basically we are displaying the data from the array using RECT HOOKS & on clicking the button ,clearing the whole data//
function App() {
  const array = [
    {
      Name: "Mukesh",
      Age: "20",
    },

    {
      Name: "Raja ",
      Age: "21",
    },
    {
      Name: "Singh",
      Age: "21",
    },
  ];
  const [newArray, setNewArray] = useState(array);
  const clearData = () => {
    setNewArray([]);
  };
  return (
    <>
      {newArray.map((curelem) => {
        return (
          <div className="Component">
            <h1 className="Component_title">
              {curelem.Name} & {curelem.Age}
            </h1>
          </div>
        );
      })}
      <button onClick={clearData}> Click Here To Erase All</button>
    </>
  );
}

export default App;
