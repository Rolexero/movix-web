import { doc } from "firebase/firestore";
import React from "react";
import { Navigate } from "react-router-dom";
import { MovixComponent } from "../components/Movix";
import { db } from "../firebase.config";
import { useAppSelector } from "../store/configure";

interface ProtectedrouteProps {
  children: JSX.Element;
}

export const Protectedroute: React.FC<ProtectedrouteProps> = ({ children }) => {
  const selector = useAppSelector((state) => state.User.token);
  return selector !== null ? children : <Navigate to="/signin" replace />;
};
