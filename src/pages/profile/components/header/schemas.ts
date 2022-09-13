import * as yup from "yup";

const regex = /[`!@#$%^&*()_+=[\]{};:\\|<>/?~]/;

export const fullNameSchema = yup
  .object({
    fullName: yup.string().required("Field must not be empty"),
  })
  .required();

export const addressSchema = yup

  .object({
    address: yup
      .string()
      .test(
        "exclude special characters",
        "No special characters",
        (value = "") => !regex.test(value)
      )
      .required("Field must not be empty"),
  })

  .required();

export const skillSchema = yup
  .object({
    skill: yup.string().required("Field must not be empty").max(50, "Max 50"),
  })
  .required();

export const yearSchema = yup
  .object({
    year: yup
      .number()
      .typeError("Only digits")
      .max(100, "Max 100")
      .required("Non empty"),
  })
  .required();
