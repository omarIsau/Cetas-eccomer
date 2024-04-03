import type { productsCard } from "@/store/card";
import { useCarStore } from "@/store/card";
import { useState } from "react";
import Carousel from "../CaruselProduct";
const ProductCart = ({ product }: { product: productsCard }) => {
  const updateCountProduct = useCarStore((state) => state.updateCountProduct);
  const deleteProduct = useCarStore((state) => state.deleteProduct);
  const [count, setCount] = useState(product.count);
  const redusCount = () => {
    if (count > 0) {
      setCount(count - 1);
      updateCountProduct(product.id, count - 1);
    }
  };
  const addCount = () => {
    setCount(count + 1);
    updateCountProduct(product.id, count + 1);
  };
  const deleteProductCar = () => {
    deleteProduct(product.id);
  };
  return (
    <article
      className="h-auto p-2 overflow-hidden bg-slate-100 rounded-lg flex"
      key={product.id}
    >
      <div className="w-2/3 flex flex-col gap-2">
        <h2 className="text-lg font-[500]">{product.nombre}</h2>
        <p className="mt-3 font-[500]">precio : {product.precio}</p>
        <p className="mt-3 font-[500]">subTotal : {product.precio * count}</p>
        <div className="flex justify-between px-4 mt-auto">
          <div className="flex gap-2">
            <button
              onClick={redusCount}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              - 1
            </button>
            <p className="font-bold text-xl">{count}</p>
            <button
              onClick={addCount}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              + 1
            </button>
          </div>
          <div>
            <button
              onClick={deleteProductCar}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              eliminar
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-1/3 flex items-center justify-center">
        <div className="max-w-md">
          <Carousel
            slides={product.imagenes}
            autoSlide={false}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCart;
