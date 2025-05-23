import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Use Heroicons or Lucide

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlink = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <header
      className={`text-white mainHeader body-font fixed top-0 w-full z-[100000] transition-all duration-300 ${
        scrolled ? "headBack shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center max-w-[1440px] justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className={`ml-3 text-xl ${scrolled ? "text-black" : "text-white"}`}>Girish Exports</span>
        </a>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-base font-medium`}
        >
          {navlink.map((e) => (
            <Link
              key={e.id}
              to={e.link}
              className={`block mt-4 md:mt-0 hover:text-gray-300 ${scrolled ? "text-black": "text-white"}`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {e.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
