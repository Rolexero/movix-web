import * as YUP from "yup";
export const SignUpSchema = YUP.object().shape({
  full_name: YUP.string().required("Required"),
  email: YUP.string().email("Please enter a vaild email").required("Required"),
  password: YUP.string()
    .min(6, "Password is too short - should be 8 chars minimum.")
    .required("No password provided"),
});

export const SignInSchema = YUP.object().shape({
  email: YUP.string().email("Please enter a vaild email").required("Required"),
  password: YUP.string()
    .min(6, "Password is too short - should be 8 chars minimum.")
    .required("No password provided"),
});
