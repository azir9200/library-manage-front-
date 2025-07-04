import { useAddBookMutation } from "@/redux/features/book/bookApi";

const AddBook = () => {
    const [addBook] = useAddBookMutation();
    
  return (
    <div>
      <p>Add book page here</p>
    </div>
  );
};

export default AddBook;
