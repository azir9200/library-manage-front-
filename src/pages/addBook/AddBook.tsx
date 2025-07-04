import type { TBook } from "@/components/Types";
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
import { useAddBookMutation } from "@/redux/features/book/bookApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [addBook] = useAddBookMutation();

  const form = useForm<TBook>();

  const bookSubmit = async (data: TBook) => {
    try {
      const payload = {
        ...data,
        isDeleted: false,
      };
      const createBook = await addBook(payload).unwrap();
      console.log("add product", createBook);
      toast.success("Book added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("An error occurred while adding the book.");
    }
  };

  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8   ">
        <h1 className="text-2x font-bold text-center mb-4">Add New Book</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(bookSubmit)} className="space-y-8">
            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full md:mb-0 ">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="title" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder="author" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem className="w-full md:mb-0 ">
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Input placeholder="genre" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input placeholder="isbn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="w-full md:mb-0 ">
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input placeholder="image" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="description" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:flex justify-center w-full  gap-4">
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem className="w-full md:mb-0 ">
                    <FormLabel>Copies</FormLabel>
                    <FormControl>
                      <Input placeholder="copies" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormLabel>Available</FormLabel>
                    <FormControl>
                      <Input placeholder="available" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full" type="submit">
              Add New Book
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
