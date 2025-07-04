import type { TBook } from "@/components/Types";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useEditBookMutation,
  useGetBookDetailsQuery,
} from "@/redux/features/book/bookApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();

  const form = useForm<TBook>({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      image: "",
      description: "",
      copies: 0,
      available: 0,
    },
  });

  const { id } = useParams();
  const [editBook] = useEditBookMutation();
  const { data: singleBook } = useGetBookDetailsQuery(id || "");

  const book = singleBook?.data;
  console.log("book res", singleBook);

  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        image: book.image,
        description: book.description,
        copies: book.copies,
        available: book.available,
      });
    }
  }, [book, form]);

  const onSubmit = async (data: TBook) => {
    try {
      await editBook({ id: id as string, data }).unwrap();
      toast.success("Book updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update book");
      console.log(error);
    }
  };
  return (
    <div className="px-8 py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="md:flex justify-center w-full  gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full md:mb-0 mb-2">
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
                <FormItem className="w-full md:mb-0 mb-2">
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
                <FormItem className="w-full md:mb-0 mb-2">
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
                <FormItem className="w-full md:mb-0 mb-2">
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
            Update Book
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditBook;
