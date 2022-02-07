import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Add components below
import Landing from "../components/Landing/Landing";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
