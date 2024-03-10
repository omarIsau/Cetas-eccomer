import { useCarStore } from "@/store/card";
import CartSvg from "../Svg/CartSvg";
import HomeSvg from "../Svg/HomeSvg";
import LegalSvg from "../Svg/LegalSvg";
import ProductSvg from "../Svg/ProductSvg";
import QuestionSvg from "../Svg/QuestionSvg";
import NavLink from "./NavLink";
const NavTochList = () => {
  const productsCount = useCarStore((state) => state.getProductsCout);
  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <NavLink link="/" text="Inicio" >
        <HomeSvg />
      </NavLink>
      <NavLink link="/productos" text="Productos">
        <ProductSvg />
      </NavLink>
      <NavLink link="/preguntas-y-respuestas" text="PyR">
        <QuestionSvg />
      </NavLink>
      <NavLink link="/legal" text="Legalidad">
        <LegalSvg />
      </NavLink>
      <NavLink link="/carrito" text={`carrito - ${productsCount()}`}>
        <CartSvg />
      </NavLink>
    </ul>
  );
};

export default NavTochList;
