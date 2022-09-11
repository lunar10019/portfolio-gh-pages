import React, { useState } from "react";
import ChangeSvg from "../../../../components/icons/ChangeSvg";

import styles from "./avatar.module.scss";

const Avatar = () => {
  const [image, setImage] = useState<string>(
    process.env.PUBLIC_URL + "/images/avatar.png"
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.upload}>
        <label className={styles.changeAvatar}>
          <input type="file" onChange={handleChange} />
          <ChangeSvg />
        </label>
        <div className={styles.avatar}>
          <img src={image} alt="avatar" />
          <div className={styles.cover} />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
