import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { SignUpSchema } from "../models/SignUpSchema";
import { SignUpModel } from "../types/model";
import { Button } from "./Button";
import { InputField } from "./InputField";
import useHttp from "../hooks/useHttp";

interface SignupProps {}

const initialValues: SignUpModel = {
  displayName: "",
  email: "",
  password: "",
};

export const SignupComponent: React.FC<SignupProps> = ({}) => {
  const [passwordType, setPasswordType] = useState("password");

  const { signUp, isLoading, isSuccess } = useHttp();

  const passwordTypeHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const {
    errors,
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik<SignUpModel>({
    initialValues,
    validationSchema: SignUpSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      signUp(values);
    },
  });

  return (
    <Container>
      <Wrapper>
        <Icon icon="ri:movie-2-line" className="text-[70px] text-[#B91C1C]" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-up to your account and start your experience</span>
        <form onSubmit={handleSubmit}>
          <InputField
            placeholder="Full Name"
            type="text"
            name="displayName"
            onChange={handleChange}
            value={values.displayName}
          />
          <InputField
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <InputField
            name="password"
            value={values.password}
            onChange={handleChange}
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
          <Button
            value={isLoading ? "Please wait..." : "REGISTER"}
            type="submit"
            disabled={isLoading}
            className="disabled:cursor-not-allowed"
          />
        </form>
        <LoginSwitchWrapper>
          <span className="">Already have an account ?</span>
          <Link to="/signin" className="mt-2 text-[#B91C1C]  hover:underline">
            Login
          </Link>
        </LoginSwitchWrapper>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  ${tw`h-[100vh] flex justify-center items-center `}
  font-family: 'Work Sans', sans-serif;
`;

export const LoginSwitchWrapper = styled.div`
  ${tw`flex gap-2 mt-4 items-center font-medium text-sm text-center`}
`;

export const Wrapper = styled.div`
  ${tw` h-[604px] w-[450px] flex flex-col justify-center items-center m-auto container border-[1px] rounded-lg p-6`}
  h1 {
    ${tw`font-bold text-[18px] mt-4`}
  }
  span {
    ${tw`font-medium text-[14px] mt-2 text-[#747474]`}
  }

  form {
    ${tw`mt-6 w-full`};
    input {
      padding: 11px 20px;

      ${tw`outline-none border-[1px] border-gray-300 rounded-lg w-full my-3 `}
    }
  }
`;
