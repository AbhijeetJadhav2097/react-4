import { useState, useEffect } from "react";
import "./App.css";
import Child1 from "./component/Child1";
const App = () => {
  const [count, setCount] = useState(0);
  const [showChildComponent, setShowChildComponent] = useState(true);

  useEffect( () => {
    console.log("parent : component has mounted")
  } , [] )

  useEffect( () => {
    console.log("parent : component has updated")
  } , [count, showChildComponent] )

  return (
    <div className="App">
      <h1>abhi</h1>
      <h1>{count}</h1>
      {/* <Child1/> */}
      <button onClick={() => setCount(count + 1)}>increment</button>
      {showChildComponent && <Child1 />} <br/>
      
      <button onClick={() => setShowChildComponent(!showChildComponent)}>Show/Hide</button>

    </div>
  );
};

export default App;
