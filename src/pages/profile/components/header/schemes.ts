import * as yup from "yup";

/* eslint-disable-next-line */
const regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

export const fullNameSchema = yup
  .object({
    fullName: yup.string().required(),
  })
  .required();

export const addressSchema = yup
  .object({
    address: yup.string().required(),
  })
  .required();

export const skillSchema = yup
  .object({
    skill: yup.string().required(),
  })
  .required();

export const yearSchema = yup
  .object({
    year: yup.string().max(100, { message: "max 100" }).required(),
  })
  .required();
