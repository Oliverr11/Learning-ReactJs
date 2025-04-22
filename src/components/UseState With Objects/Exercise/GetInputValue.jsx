import React from "react";
import "./style.css";
const GetInputValue = () => {
  const [value, setValue] = React.useState("");
  function onChangeHandler(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <h1>{value}</h1>
      <form action="">
        <input
          value={value}
          type="text"
          onChange={onChangeHandler}
          placeholder="Typing..."
        />
        <button>Reset</button>
      </form>
    </div>
  );
};

export default GetInputValue;
