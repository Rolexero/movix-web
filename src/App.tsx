import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import { Route, Routes } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { SignupComponent } from "./components/Signup";
import { SigninComponent } from "./components/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupComponent />} />
      <Route path="/signin" element={<SigninComponent />} />
    </Routes>
  );
}

const Container = styled.div`
  ${tw`h-[100vh] bg-[#fe3]`}
`;

export default App;
