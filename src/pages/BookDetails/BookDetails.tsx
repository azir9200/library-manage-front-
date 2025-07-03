import { useParams } from "react-router-dom";

import { useGetBookDetailsQuery } from "@/redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetBookDetailsQuery(id || "");
  const singleBook = data?.data;
  console.log("dataaaa", data);
  console.log("booksinglrrr ", singleBook);

  return (
    <div>
      <p> details page</p>
      {/* Book Info */}

      <div className="py-4">
        <h3 className="text-xl font-semibold text-gray-800">
          📖 {singleBook?.title}
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
    </div>
  );
};

export default BookDetails;
