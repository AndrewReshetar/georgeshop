import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.scss";
import "animate.css";

const Modal = ({
  open,
  children,
  onClose
}) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.background}></div>
      <div className={styles.closeModalButton} onClick={onClose}>
          &#10006;
      </div>
      <div
        className={`${styles.modalPopUp} animate__animated animate__fadeIn`}
      >  
        {children}
      </div>
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
