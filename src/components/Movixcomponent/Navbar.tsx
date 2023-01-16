import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import media from "../../styles/media";
import Logo from "/src/logo.png";

interface NavbarProps {
  authUserName?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  authUserName,
}: NavbarProps) => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <Container className={show ? "nav_blank" : ""}>
      <LogoSection>
        <img
          src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1674432000&Signature=ki9C6Wy90NzEuwjdgZ5VT7K~kqxuIZaQx2c1T0I4ALBeM1avMtq4DKw79c7LN1iTyJsqxyhrvWZXxdUsxEom1r6CgsPP3TUh~CiloCUT7-csYD~3CfpqL6HEcZyysHo2gQvlK8gBYF0JfK3P7OrndQ8sm0wequXrhiQePKLmgXi9-ojWXocxBMGM8AmhOPyWK1ve6PsXiWFfzIOxjgMTaCVLjOj9pC5R2WhK-1cJSaRXJYsrp1Wx8ZMh~nSO2d7d564Jf9DqZJ8VVJLJ2RXcAMgQA3Y72VxkwOLCIynZv-PT6Uw08gNllVNp0F2opLu99nOI5BO1t7XXEiAaL13IkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="logo"
        />
        <h2>Movix</h2>
      </LogoSection>
      <div className="hidden md:flex justify-between items-center gap-2 align-middle outline-none border-[1px] border-[#D1D5DB] rounded-lg p-[1px] px-2 w-[525px]">
        <div>
          <input
            placeholder="What do you want to watch?"
            className="container mx-auto p-2 outline-none bg-inherit placeholder:text-white"
            type="type"
          />
        </div>
        <div>
          <Icon icon="akar-icons:search" className="text-white" />
        </div>
      </div>
      <div className="userDiv">
        <p>Hi, {authUserName ? authUserName : "User"}</p>
        <button className="w-[36px] h-[36px] bg-[#BE123C] rounded-full flex items-center justify-center">
          <Icon
            icon="heroicons-solid:menu-alt-4"
            className="text-center text-[25px]"
          />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  ${tw`flex py-4  px-[80px]  justify-between items-center`}
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  .userDiv {
    ${tw`text-white flex gap-4 items-center`}
  }

  .nav_blank {
    height: 30px;
    background-color: #111;
  }

  ${media.smallDesktop} {
    padding: 20px 20px;
  }
`;

const LogoSection = styled.div`
  ${tw`flex gap-3 items-center cursor-pointer object-contain w-[50px] h-[50px] md:gap-3`}
  h2 {
    ${tw`font-bold text-[24px] text-white`}
  }
`;
