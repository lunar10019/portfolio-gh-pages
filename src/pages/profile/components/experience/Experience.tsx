import React, { FC } from "react";

import Section from "../../../../components/section/Section";
import Title from "../../../../components/title/Title";
import { ISkills } from "../../../../store/types";
import styles from "./experience.module.scss";

interface Props {
  data: ISkills[];
}

const Experience: FC<Props> = ({ data }) => {
  return (
    <Section>
      <Title text={"Experience"} />

      <ul>
        {data.map((item: ISkills) => (
          <li key={item.id} className={styles.listSkills}>
            <span>{item.name}</span>
            <div className={styles.button}>
              {item.years}
              {" years"}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experience;
