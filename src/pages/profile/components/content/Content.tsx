import React from "react";
import { useSelector } from "react-redux";

import styles from "./content.module.scss";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import SampleCode from "../sampleCode/SampleCode";
import MapComponent from "../../../../components/map/Map";
import Availability from "../availability/Availability";
import Environment from "../environment/Environment";
import { State } from "../../../../store/types";
import Quotation from "../quotation/Quotation";

const Content = () => {
  const data = useSelector((state: State) => state);

  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <Portfolio data={data.portfolio} />
        <Experience data={data.skills} />
        <SampleCode />

        <div className={styles.container}>
          <Availability text={data.availability} />
          <Environment text={data.environment} />
        </div>
      </div>

      <div className={styles.content}>
        <Quotation title={"The Most Amaizing..."} text={data.quotes[0]} />

        <Quotation title={"In clients I look for..."} text={data.quotes[1]} />

        <MapComponent />
      </div>
    </article>
  );
};

export default Content;
