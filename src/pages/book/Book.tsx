import { useGetAllBookQuery } from "@/redux/features/book/bookApi";
import BookCard from "./BookCard";
import type { TBook } from "@/components/Types";
import Dropdown from "@/components/dropdown/Dropdown";

const Book = () => {
  const { data } = useGetAllBookQuery(1);
  console.log(data);
  const allBooks = data?.data;
  const books = allBooks?.filter((item: any) => item.isDeleted == false);
  console.log("books ", books);
  return (
    <div>
      <div className=" flex justify-end items-center w-full">
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-300 p-4 rounded-lg">
        {books?.map((book: TBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Book;
