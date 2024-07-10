import axios from "axios";
import { FetchImages } from "./api.types";

axios.defaults.baseURL = `https://api.unsplash.com/search/photos/`;
const API_KEY = "qPMkJMWpW1utcfkRf6cWtBSWUDpjALPdeMylrJF8hsk";

const options = {
  headers: { Authorization: `Client-ID ${API_KEY}` },
};

export const fetchImages: FetchImages = async (query: string, page: number) => {
  const searchParams = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: "20",
  });

  return (await axios(`?${searchParams}`, options)).data.results;
};