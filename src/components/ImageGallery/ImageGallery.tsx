import { Photo } from "../api/api.types";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { HandleImageClick } from "../App/App.types";
import { FC } from "react";

interface ImageGalleryProps {
  galleryList: Photo[];
  onImageClick: HandleImageClick;
}
const ImageGallery: FC<ImageGalleryProps> = ({ galleryList, onImageClick }) => {
  return (
    <ul className={style.galleryCont}>

      {galleryList.map(({ description, id, urls: { small, regular } }) => (
        <li key={id} className={style.imageCont}>
          <div>
            <ImageCard
              description={description}
              url={small}
              onImageClick={() => onImageClick({ url: regular, description })}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
