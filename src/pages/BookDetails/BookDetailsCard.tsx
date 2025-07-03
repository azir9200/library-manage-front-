// import { TBook } from "@/src/types";

import type { TBook } from "@/components/Types";

interface BookProps {
  book: TBook;
}

const DetailsCard: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Book Image */}
      <img
        alt={book.title}
        className="w-full h-40 object-cover rounded-lg"
        src={book?.image}
      />

  
      {/* Book Info */}
      <div className="py-4">
        <h3 className="text-xl font-semibold text-gray-800">📖 {book.title}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Description :</span>{" "}
          {book.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Published:</span> {book.publishedYear}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Available Copies:</span>{" "}
          {book.available}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Total Copies:</span> {book.copies}
        </p>
      </div>

      {/* Borrow Button */}
      <button className="w-full mt-4 bg-slate-600 text-white py-2 rounded-lg font-medium hover:bg-stone-800 transition duration-300">
        Borrow this Book
      </button>
    </div>
  );
};

export default DetailsCard;
