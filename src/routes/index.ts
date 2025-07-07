import App from "@/App";
import AddBook from "@/pages/addBook/AddBook";
import Book from "@/pages/book/Book";
import BookDetails from "@/pages/BookDetails/BookDetails";
import BorrowBook from "@/pages/borrowBook/BorrowBook";
import BorrowSummery from "@/pages/borrowBook/BorrowSummery";
import EditBook from "@/pages/editBook/EditBook";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Book,
      },
      {
        path: "/bookCards",
        Component: Book,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/edit-book/:id",
        Component: EditBook,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/borrow/:id",
        Component: BorrowBook,
      },
      {
        path: "/borrow_summery",
        Component: BorrowSummery,
      },
    ],
  },
]);
export default router;
