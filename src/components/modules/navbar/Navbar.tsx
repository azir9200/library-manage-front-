import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-slate-300 rounded-md max-w-[h-screen] ">
      <div className="flex items-center justify-between gap-10 px-8 py-4 ">
        <div>
          <h1 className="">📚 My Bookstore</h1>
        </div>
        <div>
          <Link className=" px-6 py-2" to="/">
            Books
          </Link>

          <Link className=" px-6 py-2" to="/books/add">
            Add Book
          </Link>
          <Link className="px-6 py-2" to="/borrow_summery">
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
