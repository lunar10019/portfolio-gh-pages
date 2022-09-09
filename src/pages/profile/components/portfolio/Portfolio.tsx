import React, { FC } from "react";

import Section from "../../../../components/section/Section";
import Title from "../../../../components/title/Title";
import { IPortfolio } from "../../../../store/types";
import styles from "./portfolio.module.scss";

interface Props {
  data: IPortfolio[];
}

const Portfolio: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Title text={"Portfolio"} />

      <ul>
        {data.map((item: IPortfolio) => (
          <li key={item.id} className={styles.listItem}>
            {item.text}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Portfolio;
