import React, { FC } from "react";

import DeleteMarkSvg from "../../../../components/icons/DeleteMarkSvg";
import PlusSvg from "../../../../components/icons/PlusSvg";
import styles from "./skill.module.scss";

interface Props {
  title?: string;
  isAddButton?: boolean;
  onClick?: () => void;
}

const Skill: FC<Props> = ({ title, isAddButton, onClick }) => {
  return (
    <div className={styles.container}>
      {isAddButton ? (
        <>
          <div className={styles.item} onClick={onClick}>
            <PlusSvg />
          </div>
        </>
      ) : (
        <>
          <div className={styles.item}>{title}</div>
          <div className={styles.deleteButton}>
            <DeleteMarkSvg />
          </div>
        </>
      )}
    </div>
  );
};

export default Skill;
