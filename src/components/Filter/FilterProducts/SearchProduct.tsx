import type { Seta } from "@/types";
import Setas from "@db/Products.json";
import { useState, type ChangeEventHandler } from "react";
const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const [setas, setSetas] = useState<Seta[]>([]);
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    const filteredSetas = Setas.filter((seta) =>
      seta.nombre.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5);
    setSetas(filteredSetas);
  };

  return (
    <form>
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
      <ul>
        {setas.map((seta) => (
          <li key={seta.id}>
            <a href={`/productos/producto/${seta.id}`}>{seta.nombre}</a>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SearchProduct;
