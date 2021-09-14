import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <h1>Product Manager</h1>
      <Form />
      <List />
    </div>
  );
};

export default Dashboard;
