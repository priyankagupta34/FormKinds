import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormKindOne from "./FormKindOne";
import FormKindThree from "./FormKindThree";
import FormKindTwo from "./FormKindTwo";

import "./styles.css";
import UseReducer from "./UseReducer";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "john",
      gender: "m"
    },
    {
      id: 2,
      name: "mary",
      gender: "f"
    }
  ]);
  const [klk, setklk] = useState("");

  const updateFieldChanged = (index) => (e) => {
    console.log("index: " + index);
    console.log("property name: " + e.target.name);
    let newArr = [...data]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    setData(newArr);
  };

  const addMe = () => {
    data.push(...data, { id: 9, gender: "f", name: klk });
    setData(data);
    setklk("");
  };
  console.log("hi", data);
  return (
    <React.Fragment>
      <input value={klk} onChange={(e) => setklk(e.target.value)} />
      <button onClick={addMe}>addMe</button>
      {data.map((datum, index) => {
        <li key={index}>{datum.name}</li>;
      })}
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
