import type { productsCard } from "@/store/card";
import { useCarStore } from "@/store/card";
import { useState } from "react";
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
  }
  return (
    <article
      className="h-auto p-2 overflow-hidden bg-green-300 flex justify-between"
      key={product.id}
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-[500]">{product.nombre}</h2>
        <p className="mt-3 font-[500]">precio : {product.precio}</p>
        <p className="mt-3 font-[500]">Total : {product.precio * count}</p>
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
      <figure className="w-[35%]">
        <img
          className="aspect-square"
          src={product.imagenes[0]}
          alt={product.descripcion}
        />
      </figure>
    </article>
  );
};

export default ProductCart;
