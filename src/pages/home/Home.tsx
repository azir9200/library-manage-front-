import { Dropdown } from "@/components/dropdown/dropdown";
import { BookTable } from "../book/BookTable";

const Home = () => {
  return (
    <div>
      {/* <Landing /> */}
      <div className=" flex justify-end items-center w-full">
        {" "}
        <Dropdown  />{" "}
      </div>
      <BookTable />
    </div>
  );
};

export default Home;
