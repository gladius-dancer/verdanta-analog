import ReactModal from "react-modal";
import cls from "./Modal.module.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
function Modal({ isOpen, onRequestClose, children, modalClass }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={classNames(cls.Modal, modalClass)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1300,
        },
      }}
    >
      <IconButton onClick={onRequestClose} className={cls.Close}>
        <CloseIcon />
      </IconButton>
      {children}
    </ReactModal>
  );
}

export default Modal;
