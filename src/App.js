import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const data = new Date();
  data.setDate(data.getDate() + count);
  return (
    <div className="App">
      <input
        type="range"
        value={step}
        min={0}
        max={10}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <span>{step}</span>

      <br />
      <button onClick={() => setCount(count - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>+</button>

      <p>
        <span>
          {count == 0
            ? "Today  "
            : count > 0
            ? `${count}  Tomorrow   `
            : `${Math.abs(count)}  Yesterday `}
        </span>
        {data.toDateString()}
      </p>

      {count != 0 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
