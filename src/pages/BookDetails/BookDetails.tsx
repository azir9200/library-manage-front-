import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookDetailsQuery,
} from "@/redux/features/book/bookApi";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation(id);

  const { data, isLoading, isError } = useGetBookDetailsQuery(id || "");
  const singleBook = data?.data;

  if (isLoading) return <p>Loading book details...</p>;
  if (isError) return <p>Error loading book details.</p>;
  if (!singleBook) return <p>No book found.</p>;

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book deleted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete book");
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl rounded-2xl overflow-hidden shadow-lg bg-white p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Book Image */}
      <img
        alt={singleBook.title}
        className="w-2/3 h-40 object-cover rounded-lg"
        src={singleBook?.image}
      />

      {/* Book Info */}
      <div className="py-4">
        <h3 className="text-xl font-semibold text-gray-800">
          📖 {singleBook.title}
        </h3>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {singleBook.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Description :</span>{" "}
          {singleBook.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Published:</span>{" "}
          {singleBook.publishedYear}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Available Copies:</span>{" "}
          {singleBook.available}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Total Copies:</span>{" "}
          {singleBook.copies}
        </p>
      </div>

      <div className="lg:flex justify-center items-center">
        <Link
          to="/books/add"
          className="w-2/4 mt-4 mr-4 bg-slate-600 text-white p-2 rounded-lg font-medium hover:bg-green-500 transition duration-300"
        >
          Add New Book
        </Link>
        <Button
          onClick={handleDelete}
          className=" w-2/4 mt-4 bg-slate-600  text-white py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300"
        >
          Delete This Book
        </Button>
      </div>
    </div>
  );
};

export default BookDetails;
