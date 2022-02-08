import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Datagrid from "./pages/Datagrid";
import Profile from "./pages/Profile";
import Forms from "./pages/Forms";
import UsersList from "./pages/UsersList";
// const drawerWidth = 240;

const RoutesFiles = () => {
  return (
    <>
      <Box
        sx={{
          // width: `calc(100vw - ${drawerWidth}px)`,
          width: "100vw",
          // backgroundColor: "rgb(247, 249, 252)",
          // height: "100vh",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route
            path="/tables/dataGrid"
            element={<Datagrid title="Data-Grid" />}
          />
          <Route path="/pages/profile" element={<Profile title="Profile" />} />
          <Route path="/forms" element={<Forms title="Form" />} />
          <Route path="/list" element={<UsersList title="Users-List" />} />
        </Routes>
        {/* <Toolbar /> */}
      </Box>
    </>
  );
};

export default RoutesFiles;
