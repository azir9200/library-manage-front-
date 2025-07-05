export type TBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  image: string;
  description: string;
  publishedYear: number;
  copies: number;
  available: number;
  createdAt: string;
  updatedAt: string;
};
export type TBorrow = {
  book: string;
  quantity: number;
  dueDate: string;
};
