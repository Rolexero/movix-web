import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  );
}

export default App;
