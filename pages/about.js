import React from "react";
import "animate.css";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.aboutDescription}>
        <h2 className="animate__animated animate__fadeIn">
          George (Yuriy) Reshetar
        </h2>
        <p className="animate__animated animate__fadeIn">
          is a Ukrainian composer, jazz pianist, song-writer and arranger.
          Member of National Composer Union of Ukraine. His music contains
          elements of neoclassicism, impressionist tendencies, synthesis of jazz
          with an academic musical culture, stylistic features of Slavic folk
          traditions. He is the author of many works for the symphony orchestra,
          chamber instrumental and piano.
        </p>
      </div>
      <section className={styles.aboutWrapper}>
        <div className={styles.aboutLeftBlock}></div>
        <div
          className={`${styles.aboutRightBlock} animate__animated animate__pulse`}
        ></div>
      </section>
    </>
  );
};

export default About;
