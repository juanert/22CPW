import useFetch from "./../hooks/useFetch";

/**
 * Componente que muestra un ejemplo de como utilizar el hook useFetch para obtener datos
 * desde una API y mostrarlos en pantalla.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
export default function APIExample() {
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/deoxys"
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>API Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <p>ID: {data.id}</p>
          <p>Nombre: {data.name}</p>
          <p>Altura: {data.height}</p>
        </div>
      )}
    </div>
  );
}
