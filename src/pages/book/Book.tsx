import { useGetAllBookQuery } from "@/redux/features/book/bookApi";
import BookCard from "./BookCard";
import type { TBook } from "@/components/Types";

const Book = () => {
  const { data } = useGetAllBookQuery(1);
  console.log(data);
  const books = data?.data;
  console.log("books ", books);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-300 p-4 rounded-lg">
        {books?.map((book: TBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Book;
