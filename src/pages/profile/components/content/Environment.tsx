import React, { FC } from "react";
import Section from "../../../../components/section/Section";

import styles from "./environment.module.scss";

interface Props {
  text: string;
}

const Environment: FC<Props> = ({ text }) => {
  return (
    <Section>
      <h2 className={styles.title}>{"Preferred Environment"}</h2>

      <p className={styles.info}>{text}</p>
    </Section>
  );
};

export default Environment;
