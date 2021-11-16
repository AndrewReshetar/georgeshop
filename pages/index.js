import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import "animate.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.blackBackground}></div>
      <div className={styles.mainHeadline}>
        <span
          className={`${styles.headlineName} animate__animated animate__fadeIn`}
        >
          GEORGE
        </span>
        <span
          className={`${styles.headlineSurname} animate__animated animate__fadeIn`}
        >
          RESHETAR
        </span>
        <span
          className={`${styles.headlineDescription} animate__animated animate__fadeInLeft`}
        >
          Official page
        </span>
        <button
          className={`${styles.linkToAboutPage} animate__animated animate__fadeIn`}
          onClick={() => router.push("/about")}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
