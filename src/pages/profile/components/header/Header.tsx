import React, { useState } from "react";
import { useSelector } from "react-redux";

import EditableField from "../../../../components/editableField/EditableField";
import PrinterSvg from "../../../../components/icons/PrinterSvg";
import { State } from "../../../../store/types";
import styles from "./header.module.scss";
import Skill from "./Skill";

const Header = () => {
  const [input, setInput] = useState<boolean>(false);

  const data = useSelector((state: State) => state);

  const openInputHandler = () => {
    setInput(true);
  };

  return (
    <header className={styles.header_container}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src="./images/avatar.png" alt="avatar" />
          </div>

          <div className={styles.user_information}>
            <EditableField size={"lg"}>
              <div className={styles.text}>{data.name}</div>
            </EditableField>

            <EditableField size={"md"}>
              <div className={styles.text}>{data.address}</div>
            </EditableField>

            <div className={styles.language}>
              <img src="./images/flag.png" alt="flag" />
              <p>{data.language}</p>
            </div>

            <div className={styles.skills}>
              {data.skills.map((item) => (
                <Skill key={item.id} title={item.name} />
              ))}

              <EditableField size={"sm"}>
                <Skill isAddButton onClick={openInputHandler} />
              </EditableField>
            </div>
          </div>
        </div>

        <div className={styles.printer}>
          <PrinterSvg />
          <p>{"Print this page"}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
