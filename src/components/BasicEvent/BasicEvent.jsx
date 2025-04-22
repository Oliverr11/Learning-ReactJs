import React from "react";

const BasicEvent = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };
  const onClickHandler = (e) => {
    console.log("Clicking");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("You're submitting ");
  };
  return (
    <>
      {" "}
      <form>
        <input onChange={onChangeHandler} type="text" />
        <button onClick={onSubmitHandler}>Click Me</button>
      </form>
    </>
  );
};

export default BasicEvent;
