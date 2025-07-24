import useFetch from "./../hooks/useFetch";

/**
 * Componente que muestra un ejemplo de como utilizar el hook useFetch para obtener datos
 * desde una API y mostrarlos en pantalla.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
export default function APIExample2() {
  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>API Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>ID: {data.results[0].id}</p>
          <p>Nombre: {data.results[0].name}</p>
          <p>Estado: {data.results[0].status}</p>
          <p>Especie: {data.results[0].species}</p>
        </div>
      )}
    </div>
  );
}
