import type { TBook } from "@/components/Types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookQuery } from "@/redux/features/book/bookApi";
import { Edit } from "lucide-react";

import { Link } from "react-router-dom";

export function BookTable() {
  const { data } = useGetAllBookQuery(1);
  console.log(data);
  const books = data?.data;

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
            <TableCell className="font-medium">{book.genre}</TableCell>
            <TableCell className="font-medium">{book.isbn}</TableCell>
            <TableCell className="font-medium">{book.copies}</TableCell>
            <TableCell className="font-medium">{book.available}</TableCell>

            <div className="space-x-6 flex justify-center items-center my-2">
              <Link
                to={`/books/edit/${book._id}`}
                className="text-right flex gap-2 bg-slate-200 rounded-md p-2"
              >
                Edit <Edit />
              </Link>
              <Link to={`/borrow}`} className="text-right">
                Borrow
              </Link>
              <Link to={`/books/delete/${book._id}`} className="text-right">
                Action
              </Link>
            </div>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
