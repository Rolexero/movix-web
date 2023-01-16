import { Icon } from "@iconify/react";
import React from "react";
import tw, { styled } from "twin.macro";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Wrapper>
      <div className="icon">
        <Icon
          icon="fa6-brands:square-facebook"
          className="w-[24px] text-[#111827]"
        />
        <Icon
          icon="tabler:brand-instagram"
          className="w-[24px] text-[#111827]"
        />
        <Icon icon="fa-brands:twitter" className="w-[24px] text-[#111827]" />
        <Icon icon="fa-brands:youtube" className="w-[24px] text-[#111827]" />
      </div>
      <div className="link">
        <a href="/conditions">Conditions of Use</a>
        <a href="/privacy">Privacy and Policy</a>
        <a href="/press">Press Room</a>
      </div>
      <p className="text-[#6B7280] text-[18px]">
        © {new Date().getFullYear()} Movix
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`flex flex-col justify-center items-center gap-6 mt-10 mb-10`}

  .icon {
    ${tw`flex gap-4`}
  }
  .link {
    ${tw`flex flex-col md:flex-row items-center gap-4 font-semibold text-base md:text-[18px] text-[#111827]`}
  }
`;
