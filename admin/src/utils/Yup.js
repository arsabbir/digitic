import { object, string, number, date, InferType } from "yup";

export const yup = () => {
  let userSchema = object({
    password: string().required(),
    email: string()
      .email("Email should be Valid")
      .required("Email is required"),
  });
  return userSchema;
};
