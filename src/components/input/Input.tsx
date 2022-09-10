import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import classNames from "classnames";
import CheckMarkSvg from "../icons/CheckMarkSvg";
import styles from "./input.module.scss";
import ErrorMarkSvg from "../icons/ErrorMarkSvg";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  title?: string;
  size?: string;
  name: string;
  schema: any;
  defaultValue?: string;
  handleSumbit: (data: any) => void;
}

const Input: FC<Props> = ({
  size = "md",
  name,
  schema,
  defaultValue,
  handleSumbit,
  ...props
}) => {
  const {
    register,
    getValues,
    formState: { errors, isValid, isDirty },
    setFocus,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus(name);
  }, [setFocus, name]);

  const onSubmit = () => {
    if (!isValid) {
      return;
    }
    handleSumbit(getValues());
  };
  const error = errors[name]?.message;

  return (
    <div
      className={classNames(
        styles.container,
        !isValid && isDirty && styles.errorMessage
      )}
    >
      <input
        {...register(name)}
        defaultValue={defaultValue}
        className={classNames(styles[size])}
        {...props}
      />
      {errors[name] && <span>{error as string}</span>}

      <button type={"submit"} onClick={onSubmit} className={styles.icon}>
        {errors[name] ? <ErrorMarkSvg /> : <CheckMarkSvg />}
      </button>
    </div>
  );
};

export default Input;
