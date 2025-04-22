import React from "react";

const UseState = () => {
  const [count, setCount] = React.useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseState;
