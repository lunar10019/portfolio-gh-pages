import React from "react";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Content />
    </main>
  );
};

export default Profile;
