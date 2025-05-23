import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navlink = [
    {id:1, name: "Home", link: "/" },
    {id:2, name: "About Us", link: "/about" },
    {id:3, name: "Services", link: "/services" },
    {id:4, name: "Contact Us", link: "/contact" },
  ]

  return (
    <header
      className={`text-white body-font fixed top-0 w-full z-[100000] transition-all duration-300 ${scrolled ? "headBack shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center max-w-[1440px] justify-around">
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
          <span className="ml-3 text-xl">Girish Exports</span>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center">
          {navlink.map((e) => (

            <Link to={e.link} id={e.id} className="mr-5 hover:text-gray-900 font-medium">
              {e.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
