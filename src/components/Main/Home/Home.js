import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src} alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>Hello,</p>
        <p>a bit about me:</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="My resume" target="nav_resume" />
        <RoundButton text="My works" target="nav_projects" />
        <RoundButton text="My skills" target="nav_resume" />
      </section>
      <p className={styles.intro}>
        I am a computer science student at Tufts University. I have a passion to combine the knowledge of physical applications and mathematical theory. Currently, looking for jobs in technical field.
        <br />
        <br />I have interests in Machine Learning, 3D randering and Could Computing.
      </p>
    </section>
  );
};
