import React from "react";
import { useAppSelector } from "../store/configure";

interface MovixProps {}

export const MovixComponent: React.FC<MovixProps> = ({}) => {
  const selector = useAppSelector((state) => state.User);

  return (
    <div>
      <p>{selector.displayName}</p>
      <p>{selector.email}</p>
    </div>
  );
};
