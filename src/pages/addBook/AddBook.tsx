import type { TBook } from "@/components/Types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddBookMutation } from "@/redux/features/book/bookApi";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const form = useForm();
  const dispatch = useAppDispatch();
  const [addBook] = useAddBookMutation();

  const onSubmit = (data: TBook) => {
    console.log(data);
    // dispatch(addBook(data));
  };

  return (
    <div>
      <p>Add book page here</p>

      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}

          className="space-y-2"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-1 ">
                <FormLabel>Title </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Author"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Genre </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>ISBN </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Image </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Description </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Copies </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem className=" flex gap-2 bg-slate-200 rounded-md p-2 ">
                <FormLabel>Available </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddBook;
