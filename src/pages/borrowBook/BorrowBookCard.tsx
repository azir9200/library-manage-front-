// import { Badge } from "@/components/ui/badge";

// const BorrowBookCard = ({ borrow }) => {
//   //   console.log(borrow._id);
//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="border-b border-gray-200">
//             <th className="text-left py-4 px-4 font-semibold text-gray-900">
//               Book Title
//             </th>
//             <th className="text-left py-4 px-4 font-semibold text-gray-900">
//               ISBN
//             </th>
//             <th className="text-left py-4 px-4 font-semibold text-gray-900">
//               Total Quantity Borrowed
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {borrow?.map((item, index) => (
//             <tr
//               key={item.isbn}
//               className="border-b border-gray-100 hover:bg-gray-50"
//             >
//               <td className="py-4 px-4">
//                 <div>
//                   <p className="font-medium text-gray-900">{item.bookTitle}</p>
//                 </div>
//               </td>
//               <td className="py-4 px-4">
//                 <code className="text-sm bg-gray-100 px-2 py-1 rounded">
//                   {item.isbn}
//                 </code>
//               </td>
//               <td className="py-4 px-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-semibold text-gray-900">
//                     {item.quantity}
//                   </span>
//                   <span className="text-sm text-gray-600">
//                     copy: {item.quantity === 1 ? "y" : "ies"}
//                   </span>
//                 </div>
//               </td>
//               <td className="py-4 px-4">
//                 <Badge
//                   variant={
//                     index === 0
//                       ? "default"
//                       : item.totalQuantityBorrowed >= 5
//                       ? "secondary"
//                       : "outline"
//                   }
//                   className={
//                     index === 0
//                       ? "bg-amber-100 text-amber-800"
//                       : item.totalQuantityBorrowed >= 5
//                       ? "bg-green-100 text-green-800"
//                       : ""
//                   }
//                 >
//                   {index === 0
//                     ? "Most Popular"
//                     : item.totalQuantityBorrowed >= 5
//                     ? "Popular"
//                     : "Standard"}
//                 </Badge>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BorrowBookCard;
