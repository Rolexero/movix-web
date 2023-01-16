import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import tw, { styled } from "twin.macro";
import axios from "../../Requests/axios";
import media from "../../styles/media";
import { BannerData, base_url } from "./Banner";
import { Rating } from "./Rating";

interface MovixCardProps {
  title: string;
  fetchUrl: string;
}

export const MovixCard: React.FC<MovixCardProps> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<BannerData[]>();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <Wrapper>
      <div className="top">
        <h1>{title}</h1>
        <a
          className="flex items-center  gap-1 font-normal text-[18px] text-[#BE123C]"
          href="/"
        >
          See more <Icon icon="material-symbols:arrow-forward-ios-rounded" />
        </a>
      </div>
      <div className="row no-scrollbar">
        {movies?.map((movie, index) => {
          return (
            <div className="cardDiv">
              <div
                className="h-[270px] p-4"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
                }}
              >
                <div className="flex justify-between items-center">
                  <p className="rounded-full bg-[#F3F4F6] text-center bg-opacity-50 flex items-center justify-center  w-[74px] h-[22px] text-black font-bold text-[12px]">
                    {movie?.media_type === "tv"
                      ? "TV SERIES"
                      : movie?.media_type.toUpperCase()}
                  </p>
                  <button className="rounded-full text-[#F3F4F6] text-opacity-75 text-[30px]">
                    <Icon icon="mdi:heart-circle" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3 font-bold ">
                <p className="text-sm text-[#9CA3AF]">
                  {movie?.origin_country ? movie?.origin_country[0] : "USA"}{" "}
                  {movie?.first_air_date
                    ? new Date(movie ? movie?.first_air_date : "").getFullYear()
                    : movie?.release_date
                    ? new Date(movie ? movie?.release_date : "").getFullYear()
                    : new Date().getFullYear()}
                </p>
                <p className="text-[18px] text-[#111827]">
                  {movie?.original_name
                    ? movie?.original_name
                    : movie?.original_title
                    ? movie?.original_title
                    : ""}
                </p>
                <Rating />
                <p className="text-sm text-[#9CA3AF]">
                  Action, Adventure, Horror
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex py-4 px-[80px] flex-col  gap-6 mt-10`}
  .top {
    ${tw`flex justify-between items-center`}
    h1 {
      ${tw`font-bold text-[20px] md:text-[36px] text-[#000000]`}
    }
  }
  ${media.smallDesktop} {
    padding: 20px 20px;
  }
  .cardDiv {
    ${tw`h-[490px] min-w-[250px] flex gap-6 flex-col`}
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 50px;
    padding: 10px;
  }
`;
