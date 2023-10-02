import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleAddition = () => {
    const result = number1 + number2;
    setSum(result);
  };

  const handleMultiplication = () => {
    const result = number1 * number2;
    setMultiply(result);
  };

  return (
    <div>
      <div>
        Number 1:{" "}
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
      </div>
      <div>
        Number 2:{" "}
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={handleAddition}>Tính tổng</button>
        <button onClick={handleMultiplication}>Tính tích</button>
      </div>
      <div>
        Tổng: {sum}
      </div>
      <div>
        Tích: {multiply}
      </div>
    </div>
  );
}

export default App;