import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-2xl">lolo</h1>
      </div>
      <h1>Vite + React</h1>
      <div>
        <div className="badge badge-secondary">secondary</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
