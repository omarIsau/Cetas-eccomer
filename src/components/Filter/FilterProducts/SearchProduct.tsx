import type { Seta } from "@/types";
import Setas from "@db/Products.json";
import './SearchProducts.css'
import { useState, type ChangeEventHandler, useEffect } from "react";
const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const [setas, setSetas] = useState<Seta[]>([]);
  useEffect(() => {
    const filteredSetas = Setas.filter((seta) =>
      seta.nombre.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5);
    if (search === "") {
      setSetas([]);
    } else {
      setSetas(filteredSetas);
    }
  }, [search]);
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form className="relative">
      <label className="w-full flex p-3 gap-2 items-start" htmlFor="search">
        <span>Buscar:</span>
        <input
          name="search"
          value={search}
          type="search"
          placeholder="marilla, autraliana..."
          onChange={handleSearch}
          className="w-auto outline-none pb-1 pl-2 border-b-2 border-r-2 rounded-sm border-gray-300 focus:border-fuchsia-600 focus:shadow-sm focus:shadow-fuchsia-600 transition-all duration-300 ease-in-out"
        />
      </label>
      <ul className="absolute top-full z-10 bg-[#6F6F6F44] w-full rounded-md bl">
        {setas.map((seta) => (
          <li key={seta.id}>
            <a
              className="p-2 w-full h-max inline-block"
              href={`/productos/producto/${seta.id}`}
            >
              {seta.nombre}
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SearchProduct;
