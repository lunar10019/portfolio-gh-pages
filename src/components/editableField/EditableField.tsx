import classNames from "classnames";
import React, { FC, ReactNode, useState } from "react";
import Input from "../input/Input";

import styles from "./editableField.module.scss";

interface Props {
  title?: string;
  size?: string;
  children: ReactNode;
}

const EditableField: FC<Props> = ({ title, size = "md", children }) => {
  const [input, setInput] = useState<boolean>(false);

  const onClickHandler = () => {
    setInput(true);
  };

  return (
    <div onClick={onClickHandler}>
      {input ? (
        <Input placeholder={title} size={size} />
      ) : (
        <div className={classNames(styles.container, styles[size])}>
          {children}
        </div>
      )}
    </div>
  );
};

export default EditableField;
