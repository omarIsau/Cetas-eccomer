interface NavLinkProps {
  text: string;
  link: string;
  children: React.JSX.Element
}
const NavLink = ({ text, link, children }: NavLinkProps) => {
  return (
    <li>
      <a
        href={link}
        className="flex gap-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        aria-current="page"
      >
        {children}
        {text}
      </a>
    </li>
  );
};

export default NavLink;
