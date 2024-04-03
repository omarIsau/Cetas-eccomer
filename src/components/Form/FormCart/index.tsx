const index = ({ active }: { active: boolean }) => {
  return (
    <form className={`${active ? '' : 'hidden'} flex flex-col gap-2 mt-6`}>
      <h3 className="text-lg font-semibold">Detalles del cliente</h3>
      <label className="flex flex-col gap-2" htmlFor="email">
        <span>Email de destinatario:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="email"
          name="email"
          placeholder="ejemplo@gmail.com"
        />
      </label>
      <label className="flex flex-col gap-2" htmlFor="name">
        <span>Nombre de destinatario:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="text"
          name="name"
          placeholder="Felipe, Juan, Andres..."
        />
      </label>
      <label className="flex flex-col gap-2" htmlFor="last-name">
        <span>Apellido de destinatario:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="text"
          name="last-name"
          placeholder="gomez, fernandez, valbuena..."
        />
      </label>
      <label className="flex flex-col gap-2" htmlFor="phone">
        <span>Telefono de destinatario:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="tel"
          name="phone"
          placeholder="+57 ###-####-###"
        />
      </label>
      <h3 className="text-lg font-semibold">Detalles del cliente</h3>
      <label className="flex flex-col gap-2" htmlFor="ubicaciopn">
        <span>Ubicacion de destino:</span>
        <select className="border-2 p-2 w-2/3" name="ubicacion">
          <option value="bogota">Bogota</option>
          <option value="serca-bogota">Alrededores de bogota</option>
        </select>
      </label>
      <label className="flex flex-col gap-2" htmlFor="address">
        <span>Direccion de destino:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="text"
          name="address"
          placeholder="Calle 1 # 2-3"
        />
      </label>
      <label className="flex flex-col gap-2" htmlFor="postal">
        <span>Codigo postal:</span>
        <input
          className="border-2 p-2 w-2/3"
          type="text"
          name="postal"
          placeholder="110111"
        />
      </label>
      <button className="w-2/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2 mt-3">
        Continuar
      </button>
    </form>
  );
};

export default index;
