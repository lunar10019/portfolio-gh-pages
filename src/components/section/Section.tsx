import React, { FC, ReactNode } from "react";

import styles from "./section.module.scss";

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
