import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="row col-8 mt-4" style={{alignItems:'center'}}>
      <h1 style={{ textAlign: "center" }}>#todo</h1>
      <div className="row" style={{
            display: "flex",
            textAlign:'center',
            justifyContent: "space-around",
            textDecoration: "none",
          }}>
          <div className="col">
            <Link to="/">All</Link>{" "}
          </div>
          <div className="col">
            <Link to="/active">Active</Link>
          </div>
          <div className="col">
            {" "}
            <Link to="/completed">Completed</Link>
          </div></div>
    </div>
  );
};

export default HeaderComponent;
