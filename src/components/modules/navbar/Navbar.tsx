import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-slate-700 rounded-md max-w-[h-screen] ">
      <div className="flex items-center justify-between gap-10 px-8 py-4 ">
        <div>
          {" "}
          {/* <p>
            <FaBook className="text-amber-50 text-xl" />{" "}
          </p> */}
          <h1 className="text-amber-50">📚 My Bookstore</h1>
        </div>
        <div>
          <Link className="text-amber-50 px-6 py-2" to="/">
            Books
          </Link>
          <Link className="text-amber-50 px-6 py-2" to="/books">
            Add Book
          </Link>
          <Link className="text-amber-50 px-6 py-2" to="/user">
            Borrow Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
