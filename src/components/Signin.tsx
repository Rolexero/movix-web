import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { SignInSchema } from "../models/SignUpSchema";
import { RootState, useAppDispatch, useAppSelector } from "../store/configure";
import { addAuthUser } from "../store/userslice";
import { SignInModel, SignUpModel } from "../types/model";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { Container, LoginSwitchWrapper, Wrapper } from "./Signup";

interface SigninProps {}

const initialValues: SignInModel = {
  email: "",
  password: "",
};

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

  const { signIn, isLoading } = useHttp();

  const { errors, values, handleSubmit, handleChange, setFieldValue } =
    useFormik<SignInModel>({
      initialValues,
      validationSchema: SignInSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: () => {
        signIn(values);
      },
    });

  return (
    <Container>
      <Wrapper>
        <Icon icon="ri:movie-2-line" className="text-[70px] text-[#B91C1C]" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to start your experience</span>
        <form onSubmit={handleSubmit}>
          <InputField
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            isError={Boolean(errors.email)}
            helperText={errors.email ? `*${errors.email}` : ""}
          />
          <InputField
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            type={passwordType}
            showPassword={true}
            isError={Boolean(errors.password)}
            helperText={errors.password ? `*${errors.password}` : ""}
            rightIcon={
              passwordType === "text"
                ? "akar-icons:eye-open"
                : "akar-icons:eye-slashed"
            }
            onClickIcon={passwordTypeHandler}
          />
          <Button
            value={isLoading ? "Please wait..." : "LOGIN"}
            type="submit"
            disabled={isLoading}
            className="disabled:cursor-not-allowed"
          />
        </form>
        <LoginSwitchWrapper>
          <span className="">Don't have an account?</span>
          <Link to="/" className="mt-2 text-[#B91C1C]  hover:underline">
            Register
          </Link>
        </LoginSwitchWrapper>
      </Wrapper>
    </Container>
  );
};
