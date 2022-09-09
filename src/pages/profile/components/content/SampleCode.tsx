import React from "react";
import Section from "../../../../components/section/Section";

import styles from "./sampleCode.module.scss";

const SampleCode = () => {
  return (
    <Section>
      <h2 className={styles.container}>{"Sample code"}</h2>

      <div className={styles.code}></div>
    </Section>
  );
};

export default SampleCode;
