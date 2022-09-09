import React from "react";
import { useSelector } from "react-redux";

import styles from "./content.module.scss";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import SampleCode from "./SampleCode";
import Map from "../../../../components/map/Map";
import Availability from "./Availability";
import Environment from "./Environment";
import { State } from "../../../../store/types";

const Content = () => {
  const availability = useSelector((state: State) => state.availability);
  const environment = useSelector((state: State) => state.availability);
  const portfolio = useSelector((state: State) => state.portfolio);
  const skills = useSelector((state: State) => state.skills);

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <Portfolio data={portfolio} />
        <Experience data={skills} />
        <SampleCode />

        <div className={styles.container}>
          <Availability text={availability} />
          <Environment text={environment} />
        </div>
      </div>

      <div className={styles.content}>
        <Availability text={availability} />

        <Availability text={availability} />

        <Map />
      </div>
    </article>
  );
};

export default Content;
