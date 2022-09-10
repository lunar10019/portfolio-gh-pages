import React, { FC } from "react";

import { deleteSkill } from "../../../../store/slice";
import DeleteMarkSvg from "../../../../components/icons/DeleteMarkSvg";
import PlusSvg from "../../../../components/icons/PlusSvg";
import styles from "./skill.module.scss";
import { useDispatch } from "react-redux";

interface Props {
  id?: number;
  title?: string;
  isAddButton?: boolean;
}

const Skill: FC<Props> = ({ id, title, isAddButton }) => {
  const dispatch = useDispatch();

  const deleteSkillHandler = () => {
    dispatch(deleteSkill(id));
  };

  return (
    <div className={styles.container}>
      {isAddButton ? (
        <>
          <div className={styles.item}>
            <PlusSvg />
          </div>
        </>
      ) : (
        <>
          <div className={styles.item}>{title}</div>
          <div className={styles.deleteButton} onClick={deleteSkillHandler}>
            <DeleteMarkSvg />
          </div>
        </>
      )}
    </div>
  );
};

export default Skill;
