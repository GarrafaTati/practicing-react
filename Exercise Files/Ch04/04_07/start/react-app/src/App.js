import "./App.css";
// import { useState } from "react";
import { useReducer } from "react";

function App() {

  //better way to manage the checkbox
  const [checked, setChecked] = useReducer(checked => !checked, false);
  
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  )
  // it's ok to do this way
  // const [checked, setChecked] = useState(false);
  
  // return (
  //   <div className="App">
  //     <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
  //     <label>{checked ? "checked" : "not checked"}</label>
  //   </div>
  // );
}

export default App;
