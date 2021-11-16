import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SuccessPage.module.scss";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    window.history.pushState({}, null, "/");
  }, []);

  return (
    <div className={styles.successPageWrapper}>
      <div className={styles.successPageContent}>
        <div className={styles.successImageBlock}>
          <div className={styles.successIcon}></div>
        </div>
        <div className={styles.successMessageBlock}>
          <h2>Payment Successful</h2>
          <p>
            Your payment was successful! The notes will be available on your
            email during 24 hours.
          </p>
        </div>
        <div className={styles.backHomeBlock}>
          <button onClick={() => router.push("/")}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

SuccessPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
