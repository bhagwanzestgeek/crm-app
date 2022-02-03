import React from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import Navbar  from '../Dashboard/Navbar/Index'
const Dashboard = () => {
  console.log("dashboard index");
  return (
    <div>
      <Navbar />
      <UserCard/>
      <UserList/>
    </div>
  );
}

export default Dashboard;