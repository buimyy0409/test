import { Button, Layout } from "antd";
import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { SiderComponent } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavouriteScreen, ScheduleScreen, UserScreen } from "./screens";
import RecentScreen from "./screens/RecentScreen";

const { Content, Sider } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SiderComponent />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/schedule" element={<ScheduleScreen />} />
          <Route path="/recents" element={<RecentScreen />} />
          <Route path="/users" element={<UserScreen />} />
          <Route path="/favourites" element={<FavouriteScreen />} />
        </Routes>

  
      </Layout>
    </BrowserRouter>
  );
};

export default App;
