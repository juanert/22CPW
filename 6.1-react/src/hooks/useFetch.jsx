import { useEffect, useState } from "react";

/**
 * useFetch es un hook personalizado que utiliza la API fetch para obtener datos de una URL.
 * Se puede utilizar en cualquier componente que lo importe.
 * Los hooks personalizados siempre deben iniciar con "use".
 *
 * @param {string} url - URL de la API
 * @returns {object} - Object con 3 propiedades: data, loading, error
 * - data: El objeto de datos obtenido de la API
 * - loading: Un booleano que indica si la petición esta en curso o no
 * - error: Un objeto Error que se produce si la petición falla
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // Verifica si la petición fue exitosa; si no, lanza un error
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
