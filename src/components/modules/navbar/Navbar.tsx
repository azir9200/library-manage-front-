import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[h-screen] bg-gradient-to-r from-slate-600 to-slate-600 text-white shadow-xl rounded-2xl p-2   mt-4">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="text-indigo-400 animate-pulse">📚</span>
          <span>My Bookstore</span>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/*         {
        path: "/edit-book/:id",
        Component: EditBook,
      },
      {
        path: "/books/:id",
        Component: BookDetails,
      },
      {
        path: "/borrow/:id",
        Component: BorrowBook,
      },
      {
        path: "/borrow_summery",
        Component: BorrowSummery, */}

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-indigo-400 transition border-b-2 border-transparent hover:border-indigo-400"
          >
            Books
          </Link>
          <Link
            to="/create-book"
            className="hover:text-indigo-400 transition border-b-2 border-transparent hover:border-indigo-400"
          >
            Add Book
          </Link>
          <Link
            to="/borrow_summery"
            className="hover:text-indigo-400 transition border-b-2 border-transparent hover:border-indigo-400"
          >
            Borrow Summary
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-indigo-400 transition border-b border-slate-600 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          <Link
            to="/create-book"
            className="hover:text-indigo-400 transition border-b border-slate-600 pb-2"
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to="/borrow_summery"
            className="hover:text-indigo-400 transition pb-2"
            onClick={() => setIsOpen(false)}
          >
            Borrow Summary
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
