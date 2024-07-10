import { FC } from "react";
import { Modal } from "../App/App.types";
import style from "./ImageCard.module.css";

interface ImageCardProps extends Omit<Modal, "isOpen"> {
  onImageClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ url, description, onImageClick }) => {
  return (
    <div>
      <img
        className={style.imageCard}
        src={url}
        alt={description}
        onClick={onImageClick}
      />
    </div>
  );
};
export default ImageCard;
