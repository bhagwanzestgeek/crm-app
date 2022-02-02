import React from "react";

import UserCard from "./UserCard";
import UserList from "./UserList";

const Dashboard = () => {
  console.log("dashboard index");
  return (
    <div>
      <UserCard/>
      <UserList/>
    </div>
  );
}

export default Dashboard;