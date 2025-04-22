import React from "react";
const obj = {
  name: "Kim",
  age: 18,
  job: "none",
  role: "none",
};
const StateObject = () => {
  const [user, setUser] = React.useState(obj);
  function handleChangeAllInfo() {
    setUser({
      name: "Taing Sengkim",
      age: "19",
      job: "Software Developer",
      role: "Intern",
    }); // change all information
  }
  function handleChangeSpecificInfo() {
    setUser({ ...obj, job: "Frontend-Developer", role: "Intern" });
  }
  return (
    <article>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.job}</h2>
      <h2>{user.role}</h2>
      <button onClick={handleChangeSpecificInfo}>Change All Info</button>
    </article>
  );
};

export default StateObject;
