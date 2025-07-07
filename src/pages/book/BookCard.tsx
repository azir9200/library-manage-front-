import { Link } from "react-router-dom";
import type { TBook } from "@/components/Types";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useDeleteBookMutation } from "@/redux/features/book/bookApi";
import toast from "react-hot-toast";
import DeleteModal from "@/components/DeleteModal/DeleteModal";

interface BookProps {
  book: TBook;
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

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
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
        {/* Book Image */}
        <img
          alt={book.title}
          className="w-full h-40 object-cover rounded-lg"
          src={book?.image}
        />

        {/* Book Info */}
        <div className="py-4">
          <h3 className="text-xl font-semibold text-gray-800">
            📖 {book.title}
          </h3>
          <p className="text-gray-600">
            <span className="font-semibold">Genre:</span> {book.genre}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Description :</span>{" "}
            {book.description}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Published:</span>{" "}
            {book.publishedYear}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Available Copies:</span>{" "}
            {book?.available}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Total Copies:</span> {book.copies}
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 ">
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

        {/* Borrow Button */}

        {/* <Link
          to={`/books/${book._id}`}
          className="w-full mt-4 bg-slate-600 text-white py-2 rounded-lg font-medium hover:bg-stone-600 transition duration-300"
        >
          Book Details
        </Link> */}
      </div>

      {/* Confirmation Modal */}
      <DeleteModal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleDelete}
        isLoading={isDeleting}
      />
    </div>
  );
};

export default BookCard;
