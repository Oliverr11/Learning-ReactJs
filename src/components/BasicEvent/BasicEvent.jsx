import React from "react";

const BasicEvent = () => {
  const onChangeHandler = () => {
    console.log("Typing");
  };
  const onClickHandler = () => {
    console.log("Clicking");
  };
  return (
    <>
      {" "}
      <form>
        <input onChange={onChangeHandler} type="text" />
      </form>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
};

export default BasicEvent;
