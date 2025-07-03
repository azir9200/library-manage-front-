import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-700  text-white py-4 max-w-[h-screen]">
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Store Info */}
        <div className="text-center ">
          <h2 className="text-xl font-bold text-white">📚 My Bookstore</h2>
          <p className="text-sm mt-2 text-white">
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
          <p className="text-sm mt-2 text-gray-400">
            Email: support@mybookstore.com
          </p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>

          {/* Social Media */}
          {/* <div className="flex mt-4 space-x-3">
            <Button
           
              as={Link}
              color="primary"
              to="#"
         
            >
              📘
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              to="#"
              variant="light"
            >
              🐦
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              to="#"
              variant="light"
            >
              📷
            </Button>
            <Button
              isIconOnly
              as={Link}
              color="primary"
              to="#"
              variant="light"
            >
              🔗
            </Button>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-2 border-t border-gray-700 ">
        © {new Date().getFullYear()} My Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
