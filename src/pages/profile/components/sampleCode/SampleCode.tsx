import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

import Section from "../../../../components/section/Section";

import styles from "./sampleCode.module.scss";

const CODE = `<div class='golden-grid'> 
  <div style='grid-area: 
      11 / 1 / span 10 / span 
      12;'> 
  </div> 
</div>`;

const SampleCode = () => {
  return (
    <Section>
      <h2 className={styles.container}>{"Sample code"}</h2>

      <div className={styles.code}>
        <SyntaxHighlighter
          customStyle={{
            backgroundColor: "transparent",
            marginTop: "12px",
          }}
          language="markup"
          style={coy}
          wrapLongLines={true}
          showLineNumbers
        >
          {CODE}
        </SyntaxHighlighter>
      </div>
    </Section>
  );
};

export default SampleCode;
