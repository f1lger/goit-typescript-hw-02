export interface Photo {
  id: string;
  description: string;
  urls: {
    regular: string;
    small: string;
  };
}

export interface SearchResults {
  total: number;
  total_pages: number;
  results: Photo[];
}

export type FetchImages = (query: string, page: number) => Promise<Photo[]>;
