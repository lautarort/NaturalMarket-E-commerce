import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Add components below
import Landing from "../components/Landing/Landing";
import SignUp from "../components/SignUp/SignUp";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
