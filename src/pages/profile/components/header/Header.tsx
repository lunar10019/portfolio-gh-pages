import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fullNameSchema, addressSchema, skillSchema } from "./schemes";
import EditableField from "../../../../components/editableField/EditableField";
import PrinterSvg from "../../../../components/icons/PrinterSvg";
import { State } from "../../../../store/types";
import styles from "./header.module.scss";
import Skill from "./Skill";
import { editName, editAddress, addSkill } from "../../../../store/slice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state);

  const handleEditName = (data: { fullName: string }) =>
    dispatch(editName(data));

  const handleEditAddress = (data: { address: string }) =>
    dispatch(editAddress(data));

  return (
    <header className={styles.header_container}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src="./images/avatar.png" alt="avatar" />
          </div>

          <div className={styles.user_information}>
            <EditableField
              onSubmit={handleEditName}
              size="lg"
              name="fullName"
              schema={fullNameSchema}
              defaultValue={user.fullName}
            >
              <div className={styles.text}>{user.fullName}</div>
            </EditableField>

            <EditableField
              onSubmit={handleEditAddress}
              size="md"
              name="address"
              schema={addressSchema}
              defaultValue={user.address}
            >
              <div className={styles.text}>{user.address}</div>
            </EditableField>

            <div className={styles.language}>
              <img src="./images/flag.png" alt="flag" />
              <p>{user.language}</p>
            </div>

            <div className={styles.skills}>
              {user.skills.map((skill) => (
                <Skill key={skill.id} title={skill.name} id={skill.id} />
              ))}

              <EditableField
                size="sm"
                name="skill"
                schema={skillSchema}
                onSubmit={(data) => dispatch(addSkill(data))}
              >
                <Skill isAddButton />
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
