import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import { Navigate, Route, Routes } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { SignupComponent } from "./components/Signup";
import { SigninComponent } from "./components/Signin";
import { Protectedroute } from "./Route/Protectedroute";
import { MovixComponent } from "./components/Movix";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="signup" />} />
      <Route path="/signup" element={<SignupComponent />} />
      <Route path="/signin" element={<SigninComponent />} />
      <Route
        path="/homepage"
        element={
          <Protectedroute>
            <MovixComponent />
          </Protectedroute>
        }
      />
    </Routes>
  );
}

const Container = styled.div`
  ${tw`h-[100vh] bg-[#fe3]`}
`;

export default App;
