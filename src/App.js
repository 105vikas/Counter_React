import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incer = () => (
    setCount(count + 1)
  )
  const deccre=()=>(
    setCount(count-1)
  )
  const reset = () => (
    setCount(0)
  )
  return (
    <div className="App">
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={incer}>Incrrement</button>
        <button onClick={deccre}>Deccrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}
export default App;