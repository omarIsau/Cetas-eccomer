import type { Seta } from "@/types";
import { useState } from "react";
import { useCarStore } from "@/store/card";
const index = ({ product }: { product: Seta }) => {
  const [count, setCount] = useState(0);
  const addProduct = useCarStore((state) => state.addProduct);
  const addProductToCar = () => {
    if (count === 0) return;
    addProduct({ ...product, count });
    location.href = "/carrito";
  };
  const redusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="mt-auto flex justify-between">
      <div className="flex gap-6 items-center">
        <button
          onClick={redusCount}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          - 1
        </button>
        <p className="font-bold text-xl">{count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          + 1
        </button>
      </div>
      <div>
        <button onClick={addProductToCar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default index;
