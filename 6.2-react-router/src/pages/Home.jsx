import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function Home() {
  const { data, isPending, error } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 items-center">
        <h1 className="text-3xl mb-4">Home</h1>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div className="grid grid-cols-4 gap-4">
            {data.map((item) => (
              <div key={item.id}>
                <img className="w-64" src={item.url} alt={item.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
