import type { TBook } from "@/components/Types";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBookDetailsQuery } from "@/redux/features/book/bookApi";
import { Link, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const { data: bookResponse } = useGetBookDetailsQuery(id || "");

  console.log("bookResponse", bookResponse);
  const books = bookResponse?.data;
  console.log("book single", books);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-xl"> Title</TableHead>
          <TableHead className="text-sm">Author</TableHead>
          <TableHead className="text-sm">Genre</TableHead>
          <TableHead className="text-sm">ISBN</TableHead>
          <TableHead className="text-sm">Copies</TableHead>
          <TableHead className="text-sm">Availability</TableHead>
          <TableHead className="text-sm">Action</TableHead>
        </TableRow>
      </TableHeader>
      {/* Columns: Title, Author, Genre, ISBN, Copies, Availability, and Actions. */}

      <TableBody>
        {books?.map((book: TBook) => (
          <TableRow key={book._id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell className="">{book.copies}</TableCell>
            <TableCell className="">{book.available}</TableCell>
            {/* <Button to={`/books/:${book._id}`} className="text-right">
              Submit
            </Button> */}

            <Link to={`/books/edit/${book._id}`}>
              <Button>Edit</Button>
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EditBook;
