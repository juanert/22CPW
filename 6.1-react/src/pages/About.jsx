import { Link } from "react-router";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>

      <p>Ejercicio :D</p>
      <p>Construir un sitio de react empleando react-router que esté compuesto por, al menos, 3 rutas:</p>
      <ul>
        <li>Home - Ruta principal. Debe contenter un botón que llame a la API de su preferencia.</li>
        <li>About - Ruta con información (de lo que más te guste).</li>
        <li>Contact - Ruta con un formulario (libre) de contacto (Sólo el componente)</li>
        <li>404 - Ruta para manejar errores 404.</li>
      </ul>
      <p>Para facilitar la navegación, se aconseja utilizar un componente Navbar con los enlaces a las otras rutas.</p>

      <Link to="/" className="underline hover:text-blue-500">
        Home
      </Link>
    </div>
  );
}

export default About;
