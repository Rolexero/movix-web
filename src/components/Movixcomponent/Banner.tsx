import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import axios from "../../Requests/axios";
import requests from "../../Requests/requests";
import media from "../../styles/media";
import { Rating } from "./Rating";

interface BannerProps {}

export interface BannerData {
  backdrop_path: string;
  id: string;
  media_type: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string;
  origin_country: string[];
  release_date: string;
}

export const base_url = "https://image.tmdb.org/t/p/original/";

export const Banner: React.FC<BannerProps> = ({}) => {
  const [bannerData, setBannerData] = useState<BannerData>({
    backdrop_path: "",
    id: "",
    media_type: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    first_air_date: "",
    title: "",
    vote_average: 0,
    vote_count: 0,
    original_name: "",
    origin_country: [],
    release_date: "",
  });

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTrending);
      console.log(request.data);

      setBannerData(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      ); // using prettier
    }
    fetchMovie();
  }, []);
  return (
    <HeaderWrapper
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${bannerData?.backdrop_path}')`,
      }}
    >
      <div className="banner_contents">
        <h1>
          {bannerData?.original_title
            ? bannerData?.original_title
            : bannerData?.original_name
            ? bannerData?.original_name
            : ""}
        </h1>
        <Rating className="w-[184px]" />
        <p className="w-[302px] font-medium text-[14px]">
          {bannerData?.overview.length > 250}
          {bannerData?.overview.substring(0, 250)}
        </p>
        <button className="flex justify-center items-center gap-2">
          <Icon icon="material-symbols:play-circle" />
          <span className="font-bold text-[14px]">WATCH TRAILER</span>
        </button>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  color: white;
  height: 448px;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .banner_contents {
    ${tw`flex flex-col md:px-[80px] gap-3  h-auto  w-[100%] md:w-[700px]`}
    h1 {
      color: white;
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
              margin-top: 60px;


      ${media.smallDesktop} {
        font-size: 30px;
        margin-top: 60px;
      }
    }

    button {
        ${tw`bg-[#BE123C] w-[169px] h-[36px]`}
        padding: 6px, 16px, 6px, 16px;
        border-radius: 8px;
    }

  ${media.smallDesktop} {
    padding: 20px 20px;
  }

  ${media.mobile} {
    height: auto;
    div {
      width: 100%;
      h1 {
        font-size: 32px;
      }
    }
  }
`;
