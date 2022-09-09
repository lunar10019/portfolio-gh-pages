import React, { FC } from "react";
import Section from "../../../../components/section/Section";
import Title from "../../../../components/title/Title";

import styles from "./availability.module.scss";

interface Props {
  text: string;
}

const Availability: FC<Props> = ({ text }) => {
  return (
    <Section>
      <Title text={"Availability"} />

      <p className={styles.info}>{text}</p>
    </Section>
  );
};

export default Availability;
