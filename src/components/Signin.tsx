import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { Container, LoginSwitchWrapper, Wrapper } from "./Signup";
import Logo from "/src/assets/Vector.png";

interface SigninProps {}

export const SigninComponent: React.FC<SigninProps> = ({}) => {
  const [passwordType, setPasswordType] = useState("password");

  const passwordTypeHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Icon icon="ri:movie-2-line" className="text-[70px] text-[#B91C1C]" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to start your experience</span>
        <form>
          <InputField placeholder="Email" type="email" />
          <InputField
            placeholder="Password"
            type={passwordType}
            showPassword={true}
            rightIcon={
              passwordType === "text"
                ? "akar-icons:eye-open"
                : "akar-icons:eye-slashed"
            }
            onClickIcon={passwordTypeHandler}
          />
          <Button value="LOGIN" />
        </form>
        <LoginSwitchWrapper>
          <span className="">Don't have an account?</span>
          <Link to="/" className="mt-2 text-[#B91C1C]  hover:underline">
            Login
          </Link>
        </LoginSwitchWrapper>
      </Wrapper>
    </Container>
  );
};
