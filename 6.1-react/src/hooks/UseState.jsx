import { useState } from "react";

/**
 * Componente que muestra un ejemplo de uso del hook useState.
 * El hook useState devuelve un array con dos elementos: el estado actual y una función para actualizarlo.
 * En este caso, estamos utilizando useState para crear un estado mutable que persiste en el tiempo,
 * y que se actualiza cada vez que se hace click en el botón.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 p-4">
      <p>Demo de useState (Registrados {count} clicks)</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 rounded-md bg-blue-600 text-white">
        ¡Haz click aquí!
      </button>
    </div>
  );
}
