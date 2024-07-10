import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";
import { HandleVoidFn, Modal } from "../App/App.types";
import { FC } from "react";

interface ImageModalProps extends Modal {
  onClose: HandleVoidFn;
}
const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  url,
  description,
  onClose,
}) => {
  return (
    <ReactModal
      portalClassName={styles.modalPortal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      <img src={url} alt={description} className={styles.modalImage} />
    </ReactModal>
  );
};
export default ImageModal;
