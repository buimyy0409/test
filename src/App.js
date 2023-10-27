import { Layout } from "antd";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./screens/Home";


const { Content, Sider } = Layout;

const App = () => {
  return (
    <BrowserRouter>
            <div className="container-fluid" style={{alignItems:'center'}}>

      <Layout style={{alignItems:'center'}}>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
  
      </Layout>        </div>

    </BrowserRouter>
  );
};

export default App;
