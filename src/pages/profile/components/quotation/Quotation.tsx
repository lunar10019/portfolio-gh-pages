import React, { FC } from "react";
import QuotationsSvg from "../../../../components/icons/QuotationsSvg";

import Section from "../../../../components/section/Section";
import Title from "../../../../components/title/Title";
import styles from "./quotation.module.scss";

interface Props {
  title: string;
  text: string;
}

const Quotation: FC<Props> = ({ title, text }) => {
  return (
    <Section>
      <Title text={title} />

      <div className={styles.quotation}>
        <p>{text}</p>
        <div className={styles.icon}>
          <QuotationsSvg />
        </div>

        <div className={styles.rotate_icon}>
          <QuotationsSvg />
        </div>
      </div>
    </Section>
  );
};

export default Quotation;
