import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";
import { Fragment } from "react";

function Backdrop() {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

function Modal({ children }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
