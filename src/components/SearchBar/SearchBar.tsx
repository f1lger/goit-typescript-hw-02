import { IoIosSearch } from "react-icons/io";
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FC, FormEvent } from "react";
import { HandleSearch } from "../App/App.types";
import { FormElements } from "./SearchBar.types";

interface SearchBarProps {
  onSubmit: HandleSearch;
}
const notification = () => toast.error("please fill in the fields");
const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const searchQuery = (e.currentTarget.elements as FormElements).search.value;
    if (searchQuery === "") {
      notification();
      return;
    }

    onSubmit(searchQuery);
  };
  return (
    <>
      <header className={style.header}>
        <form className={style.form} onSubmit={handleSubmit}>
          <button className={style.submitBtn} type="submit">
            <IoIosSearch color="#000" className={style.searchIcon} />
          </button>
          <input
            className={style.searchInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        <Toaster position="top-right" />
      </header>
    </>
  );
};
export default SearchBar;
