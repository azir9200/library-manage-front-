import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-200  py-4 max-w-[h-screen]">
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Store Info */}
        <div className="text-center ">
          <h2 className="text-xl font-bold ">📚 My Bookstore</h2>
          <p className="text-sm mt-2 ">
            Discover a world of books. From bestsellers to classics, we bring
            you the joy of reading.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center ">
          <h2 className="text-xl  font-bold">Quick Links</h2>
          <ul className=" space-y-2  grid grid-cols-2">
            <li>
              <Link color="foreground" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link color="foreground" to="/categories">
                Categories
              </Link>
            </li>
            <li>
              <Link color="foreground" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link color="foreground" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div className="text-center ">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-sm mt-2 ">Email: support@mybookstore.com</p>
          <p className="text-sm ">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-100 mt-2 border-t border-gray-4700 ">
        © {new Date().getFullYear()} My Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
