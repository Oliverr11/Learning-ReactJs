import React from "react";
import Profile from "./Profile";
const userData = [
  {
    id: 1,
    name: "kim",
    position: "fullstack-developer",
  },
  {
    id: 2,
    name: "kim2",
    position: "fullstack-developer",
  },
  {
    id: 3,
    name: "kim2",
    position: "fullstack-developer",
  },
];
/*
function getIdUser(id) {
  const newUser = userData.find((user) => user.id === id);
  console.log(id);
  console.log(newUser);
}
  */
function getIdUser(id) {
  // will be use in the future for delete by id
  const newUser = userData.filter((user) => user.id !== id);
  console.log(newUser);
}

const Users = () => {
  return (
    <div>
      {userData.map((u) => {
        return <Profile key={u.id} {...u} getId={getIdUser} />;
      })}
    </div>
  );
};

export default Users;
