import DeleteModal from "@/components/DeleteModal/DeleteModal";
import type { TBook } from "@/components/Types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteBookMutation,
  useGetAllBookQuery,
} from "@/redux/features/book/bookApi";

import { Edit } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export function BookTable() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const { data } = useGetAllBookQuery(1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const books = data?.data.filter((item: any) => item.isDeleted == false);

  const handleDelete = async () => {
    if (!selectedBookId) return;
    try {
      await deleteBook(selectedBookId).unwrap();
      toast.success("Book deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete book");
      console.error(err);
    } finally {
      setShowConfirm(false);
      setSelectedBookId(null);
    }
  };

  return (
    <>
      <Table>
        <TableCaption>A list of your book items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book: TBook) => (
            <TableRow key={book._id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    book.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {book.available ? "Available" : "Not Available"}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link
                    to={`/edit-book/${book._id}`}
                    className="bg-slate-200 hover:bg-slate-300 text-sm px-3 py-1 rounded flex items-center gap-1"
                  >
                    Edit <Edit size={16} />
                  </Link>
                  <Link
                    to={`/borrow/${book._id}`}
                    className="bg-slate-200 hover:bg-slate-300 text-sm px-3 py-1 rounded"
                  >
                    Borrow
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedBookId(book._id);
                      setShowConfirm(true);
                    }}
                    className="bg-red-100 hover:bg-red-200 text-sm px-3 py-1 rounded text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Confirmation Modal */}
      <DeleteModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
      />
    </>
  );
}
