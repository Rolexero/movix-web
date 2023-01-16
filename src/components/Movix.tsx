import React from "react";
import { styled } from "twin.macro";
import requests from "../Requests/requests";
import { useAppSelector } from "../store/configure";
import { Banner } from "./Movixcomponent/Banner";
import { MovixCard } from "./Movixcomponent/MovixCard";
import { Navbar } from "./Movixcomponent/Navbar";

interface MovixProps {}

export const MovixComponent: React.FC<MovixProps> = ({}) => {
  const selector = useAppSelector((state) => state.User);

  return (
    <Container>
      <Navbar authUserName={selector?.displayName} />
      <Banner />
      <MovixCard title="Featured Movie" fetchUrl={requests.fetchTrending} />
      <MovixCard
        title="Trending Movie"
        fetchUrl={requests.fetchTrending}
      />{" "}
      <MovixCard title="New Arrival" fetchUrl={requests.fetchTrending} />{" "}
      <MovixCard title="Exclusive Movies" fetchUrl={requests.fetchTrending} />
    </Container>
  );
};

const Container = styled.div`
  font-family: "DM Sans", sans-serif;
`;
