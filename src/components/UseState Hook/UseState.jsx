import React from "react";

const UseState = () => {
  //array destructuring
  const [count, setCount] = React.useState(0);
  //   const arr = React.useState(0);
  //   const count = arr[0];
  //   const setCount = arr[1];

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
