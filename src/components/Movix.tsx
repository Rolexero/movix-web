import React from "react";
import { styled } from "twin.macro";
import { useAppSelector } from "../store/configure";
import { Banner } from "./Movixcomponent/Banner";
import { Navbar } from "./Movixcomponent/Navbar";

interface MovixProps {}

export const MovixComponent: React.FC<MovixProps> = ({}) => {
  const selector = useAppSelector((state) => state.User);

  return (
    <Container>
      <Navbar authUserName={selector?.displayName} />
      <Banner />
    </Container>
  );
};

const Container = styled.div`
  font-family: "DM Sans", sans-serif;
`;
