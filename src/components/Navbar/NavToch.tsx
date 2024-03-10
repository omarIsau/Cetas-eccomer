import { useEffect, useState } from "react";
import "./NavToch.css";
import NavTochList from "./NavTochList";
const NavToch = () => {
  const [navbar, setnavbar] = useState<undefined | boolean>(undefined);
  useEffect(() => {
    console.log(navbar);
  }, [navbar]);
  const navToch =
    typeof navbar === "undefined"
      ? "hidden"
      : navbar
      ? "block toch-on"
      : "toch-off";
  const handleNavbar = () => {
    setnavbar(!navbar);
  };
  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={handleNavbar}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className={`${navToch} w-full md:block md:w-auto`} id="navbar-default">
        <NavTochList />
      </div>
    </>
  );
};

export default NavToch;

// <li>
//   <a
//     href="#"
//     className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//     aria-current="page"
//   >
//     Home
//   </a>
// </li>
