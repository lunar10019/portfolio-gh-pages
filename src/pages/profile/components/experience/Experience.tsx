import React, { FC } from "react";
import EditableField from "../../../../components/editableField/EditableField";

import Section from "../../../../components/section/Section";
import Title from "../../../../components/title/Title";
import { ISkills } from "../../../../store/types";
import styles from "./experience.module.scss";
import { yearSchema } from "../header/schemas";
import { editExperience } from "../../../../store/slice";
import { formatNumber, pluralize } from "../../../../utils";
import { useDispatch } from "react-redux";

interface Props {
  data: ISkills[];
}

const Experience: FC<Props> = ({ data }) => {
  const dataSorted = [...data].sort(
    (a, b) => Number(b.years) - Number(a.years)
  );

  const dispatch = useDispatch();
  return (
    <Section>
      <Title text={"Experience"} />

      <ul className={styles.container}>
        {dataSorted.map((item: ISkills) => (
          <li key={item.id} className={styles.listSkills}>
            <span>{item.name}</span>{" "}
            <EditableField
              onSubmit={(data) =>
                dispatch(editExperience({ data: data, id: item.id }))
              }
              size={"xs"}
              name={"year"}
              schema={yearSchema}
              defaultValue={item.years ? String(item.years) : ""}
            >
              {item.years ? (
                <button className={styles.button}>
                  {`${formatNumber(item.years)} ${pluralize(
                    Math.ceil(item.years),
                    "year"
                  )}`}
                </button>
              ) : (
                <button className={styles.button}>{"add years"}</button>
              )}
            </EditableField>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experience;
