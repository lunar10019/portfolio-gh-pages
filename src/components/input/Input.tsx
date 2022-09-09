import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import CheckMarkSvg from "../icons/CheckMarkSvg";
import styles from "./input.module.scss";
import ErrorMarkSvg from "../icons/ErrorMarkSvg";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  title?: string;
  size?: string;
}

const schema = yup
  .object({
    title: yup.string().required(),
    address: yup.string().required(),
    skill: yup.string().required(),
    year: yup.number().positive().integer().required(),
  })
  .required();

const Input: FC<Props> = ({ size = "md", ...props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const onSubmit = () => {
    console.log("!!!!");
  };

  return (
    <div
      className={styles.container}
      style={{ borderBottom: errors.title ? "1px solid #FF0000" : "" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          className={classNames(styles[size])}
          {...props}
        />
        {errors.title && <span>Error Description</span>}
      </form>

      <button type={"submit"} onClick={onSubmit} className={styles.icon}>
        {errors.title ? <ErrorMarkSvg /> : <CheckMarkSvg />}
      </button>
    </div>
  );
};

export default Input;
