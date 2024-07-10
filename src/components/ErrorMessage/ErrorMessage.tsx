import { FC } from "react";
import style from "./ErrorMessage.module.css";
interface ErorMessageProps {
  message: string;
}
const ErorMessage: FC<ErorMessageProps> = ({ message }) => {
  return <p className={style.erorMsg}>{message}</p>;
};
export default ErorMessage;
