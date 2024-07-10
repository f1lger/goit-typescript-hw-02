import { useState, useEffect, useRef } from "react";
import { fetchImages } from "../api/api";

import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import {
  HandleImageClick,
  HandleSearch,
  HandleVoidFn,
  Modal,
} from "./App.types";
import { Photo } from "../api/api.types";

const initModalInfo: Modal = {
  isOpen: false,
  url: "",
  description: "",
};
function App() {
  const [value, setValue] = useState<string>("");
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalInfo, setModalInfo] = useState(initModalInfo);

  const scrollToEnd = useRef<HTMLDivElement>(null);

  const handleLoadMore: HandleVoidFn = () => setPage((prev) => prev + 1);

  const handleSearch: HandleSearch = (newValue) => {
    if (newValue === value) return;

    setValue(newValue);
    setPage(1);
    setGallery([]);
  };

  const handleModalClose = () => setModalInfo(initModalInfo);

  const handleImageClick: HandleImageClick = ({ url, description }) => {
    setModalInfo({ isOpen: true, url, description });
  };
  useEffect(() => {
    if (value === "") {
      return;
    }
    setError(null);
    setLoading(true);
    async function handleSearch() {
      try {
        const res: Photo[] = await fetchImages(value, page);
        console.log(res);

        setGallery((prev) => [...prev, ...res]);
        if (res.length === 0) throw new Error("No results found");
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    handleSearch();
  }, [value, page]);

  useEffect(() => {
    scrollToEnd.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [gallery]);

  return (
    <div ref={scrollToEnd}>
      <SearchBar onSubmit={handleSearch} />

      {gallery.length > 0 && (
        <ImageGallery galleryList={gallery} onImageClick={handleImageClick} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {gallery.length > 0 && <LoadMoreBtn loadMore={handleLoadMore} />}

      {modalInfo.isOpen && (
        <ImageModal
          isOpen={modalInfo.isOpen}
          url={modalInfo.url}
          description={modalInfo.description}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
