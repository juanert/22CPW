import { useRef } from "react";

/**
 * Muestra un ejemplo de cómo utilizar useRef para
 * crear un estado mutable que persiste en el tiempo,
 * pero no dispara una re-renderización del componente.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
export default function UseRef() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1; // <-- Para acceder al estado mutable, utilizamos .current
    console.log("Clicked", countRef.current, "times");
  }

  return (
    <div className="flex gap-4 p-4">
      <p>
        Demo de useRef (Registrados {countRef.current} clicks) (Revisar consola)
      </p>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-md bg-blue-600 text-white">
        ¡Haz click aquí!
      </button>
    </div>
  );
}
