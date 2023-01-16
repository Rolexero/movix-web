import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import tw, { styled } from "twin.macro";
import axios from "../../Requests/axios";
import requests from "../../Requests/requests";
import media from "../../styles/media";

interface BannerProps {}

interface BannerData {
  backdrop_path: string;
  id: string;
  media_type: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string;
}

const base_url = "https://image.tmdb.org/t/p/original/";

export const Banner: React.FC<BannerProps> = ({}) => {
  const [bannerData, setBannerData] = useState<BannerData>({
    backdrop_path: "",
    id: "",
    media_type: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0,
    vote_count: 0,
    original_name: "",
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
      <Carousel></Carousel>
      <div className="banner_contents">
        <h1>
          {bannerData?.original_title
            ? bannerData?.original_title
            : bannerData?.original_name
            ? bannerData?.original_name
            : ""}
        </h1>
        <div className="w-[184px] flex justify-between">
          <div className="flex gap-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1674432000&Signature=HOkiCk9E~hQFg6uRSb62iPVHBjvqDhcnqiq3L~quhQhIUeq22xrNslkgHh0RxeoM5MdbwxKXPBCXC6T6TUHgVRqNoR1KY5o3DYRu5NVlzsS6OpAZ51PiJWYn3BtrmA5u3Z0l-wQjhB7H5LLuW2oqWko8pJR5HSNEwjsSMJIAQOtX4M4sYK44sURcVC6--fy7wtJAlNUxY0E5X7J~zQ0VWzVil-aYsgcs7MxQnr3wIL8Uv~c~-41TONc5dwTLQZ1qKkkTnBjPFh5RcQqTiPGhstc7~zaAbwQqeoW90QF-bfL7H3YHfV~xtMfAWvkylNBhWfGj2Efy51ljvckvaj4A0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="imbd logo"
              className="w-[35px] rounded"
            />
            <span className="font-normal text-sm">86.0 / 100</span>
          </div>
          <div className="flex  gap-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1674432000&Signature=BP6alqOldXDDw86L1BD9UZkDPXC01kwz7VG5yaUt6syDQ40AZ5ZyxSX8q556-BVJeaKlNBfWcpenceene-BMuLmYx~mCj9~ZrXKxyZ1o4aqrEEO-3ov4kGh2R~VSY0NOKtfaoiEP~n0JKEUYvFyWMebnkoSDSZwyEghrJsvZlegwatcJJ4drcIx~OWcvcgKtt9SDy3s~rGLYCPH4BEtJvw3cAGNQRDZfDIkSprxN18uKalDTXHbsSvFsb9sn~P-N6rUFL0mBfXGY~xQZaVwbNRGqKsHp~AcIZmaGnQ4V2zxalvz0E~EbylaZtS64N9Ij5uJE9oYUDTyIerJ5IU6c7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="imbd logo"
              className="w-[16px] "
            />
            <span className="font-normal text-sm">97%</span>
          </div>
        </div>
        <p className="w-[302px] font-medium text-[14px]">
          {bannerData?.overview}
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
