import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [addNumber, setAddNumber] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddCount = (e) => {
    const value = +e.target.value;
    setAddNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + addNumber);
    setAddNumber(0);
  };

  return (
    <Panel className="flex flex-col gap-5">
      <h1>Count is {count}</h1>
      <div className="flex gap-3">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <hr />
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 items-start">
        <label htmlFor="">Add count</label>
        <input
          className="p-1.5 border"
          type="number"
          value={addNumber || ""}
          onChange={handleAddCount}
        />
        <Button onClick={handleSubmit}>Add number</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
