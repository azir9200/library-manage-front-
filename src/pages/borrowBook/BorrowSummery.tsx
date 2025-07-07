
import { useGetBorrowBookQuery } from "@/redux/features/borrow/borrowApi";

const BorrowSummery = () => {
  const { data } = useGetBorrowBookQuery(undefined);
  const borrowBook = data?.data;
  // console.log("summery", BorrowSummery);
  console.log("book as ", borrowBook);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Book Title
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                ISBN
              </th>
              <th className="text-left py-4 px-4 font-semibold text-gray-900">
                Total Quantity Borrowed
              </th>
            </tr>
          </thead>
          <tbody>
            {borrowBook?.map((item, index) => (
              <tr
                key={item.isbn}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4">
                  <p className="font-medium text-gray-900">
                    {item?.book?.title}
                  </p>
                </td>
                <td className="py-4 px-4">
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {item?.book?.isbn}
                  </code>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {item?.quantity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummery;
