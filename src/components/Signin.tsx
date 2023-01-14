import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const dispatch = useAppDispatch();

  const passwordTypeHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const { errors, values, handleSubmit, handleChange, setFieldValue } =
    useFormik<SignInModel>({
      initialValues,
      validationSchema: SignInSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: () => {
        dispatch(addAuthUser({ token: "va;", full_name: "name" }));
      },
    });

  const persons = useAppSelector((state: RootState) => state.User);

  return (
    <Container>
      <Wrapper>
        <Icon icon="ri:movie-2-line" className="text-[70px] text-[#B91C1C]" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to start your experience</span>
        <p>person: {persons.token}</p>
        <form onSubmit={handleSubmit}>
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
          <Button value="LOGIN" type="submit" />
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
