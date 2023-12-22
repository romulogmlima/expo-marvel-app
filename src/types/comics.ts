import { Thumbnail } from "./characters";

interface Price {
  type: string;
  price: number;
}

interface Date {
  type: string;
  date: string;
}

export interface Comic {
  id: string;
  description: string;
  prices: Price[];
  thumbnail: Thumbnail;
  title: string;
  dates: Date[];
  modified: string;
  format: string;
  isbn: string;
  upc: string;
}
