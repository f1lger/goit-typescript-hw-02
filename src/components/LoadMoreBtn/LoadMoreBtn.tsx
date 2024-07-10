import { FC } from "react";
import style from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  loadMore: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div className={style.loadMoreCont}>
      <button onClick={() => loadMore()}>Load more</button>
    </div>
  );
};
export default LoadMoreBtn;
