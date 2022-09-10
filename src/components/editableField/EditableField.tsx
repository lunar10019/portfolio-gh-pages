import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";

import Input from "../input/Input";
import styles from "./editableField.module.scss";

interface Props {
  size?: string;
  children: ReactNode;
  name: string;
  schema: any;
  defaultValue?: string;
  onSubmit: (data: any) => void;
}

const EditableField: FC<Props> = ({
  size = "md",
  children,
  name,
  schema,
  defaultValue,
  onSubmit,
}) => {
  const [input, setInput] = useState<boolean>(false);

  const onClickHandler = (bool: boolean) => {
    setInput(bool);
  };

  const handleSumbit = (data: any) => {
    onSubmit(data);
    setInput(false);
  };

  return (
    <div>
      {input ? (
        <Input
          placeholder={defaultValue}
          size={size}
          name={name}
          schema={schema}
          defaultValue={defaultValue}
          handleSumbit={handleSumbit}
        />
      ) : (
        <div
          onClick={() => onClickHandler(true)}
          className={classNames(
            styles.container,
            name === "fullName" && styles.hover,
            name === "address" && styles.hover,
            styles[size]
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default EditableField;
