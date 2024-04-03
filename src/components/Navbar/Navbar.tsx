import NavToch from "./NavToch";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.webp" className="h-8" alt="Setas loog" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Setitas.com
          </span>
        </a>
        <NavToch />
      </div>
    </nav>
  );
};
export default Navbar;
