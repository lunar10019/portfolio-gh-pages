import React, { FC } from "react";

import styles from "./title.module.scss";

interface Props {
  text: string;
}

const Title: FC<Props> = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default Title;
