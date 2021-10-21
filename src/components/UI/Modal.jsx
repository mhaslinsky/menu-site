import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";
import { Fragment } from "react";

function Backdrop({ onClick }) {
  return <div className={classes.backdrop} onClick={onClick}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

function Modal({ children, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
