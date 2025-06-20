
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
        <p>{`Button clicked ${count} times`}</p>
        <button onClick={() => setCount(prev => prev+1)}>Click me</button>
    </>
  )
}

export default App
