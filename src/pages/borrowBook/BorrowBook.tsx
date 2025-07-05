
import type { TBorrow } from "@/components/Types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetBookDetailsQuery } from "@/redux/features/book/bookApi";
import { useBorrowBookMutation } from "@/redux/features/borrow/borrowApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const BorrowBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [borrowBook] = useBorrowBookMutation();

  const { data: singleBook } = useGetBookDetailsQuery(id || "");
  const book = singleBook?.data;
 
  const form = useForm<TBorrow>();

  const borrowSubmit = async (data: TBorrow) => {
    try {
      const payload = {
        ...data,
        book: book._id,
      };
      const createBorrow = await borrowBook(payload).unwrap();
      console.log("add product", createBorrow);
      toast.success("book borrowed successfully!");
      navigate("/borrow_summery");
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("An error occurred while adding the book.");
    }
  };

  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8   ">
        <h1 className="text-2x font-bold text-center mb-4">
          Borrowing Book Information
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(borrowSubmit)}
            className="space-y-8"
          >
            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel>Quantity </FormLabel>
                    <FormControl>
                      <Input placeholder="isbn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex justify-center w-full  gap-4"></div>

            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="w-full md:mb-0 ">
                    <FormLabel>Due Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    {/* <DatePicker /> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full" type="submit">
              Borrow This Book
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BorrowBook;
