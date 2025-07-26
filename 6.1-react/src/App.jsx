import { ThemeProvider } from "./context/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

/**
 * Componente principal de la aplicación.
 * Renderiza un ThemeExample, que muestra el tema actual y proporciona un botón para cambiar el tema.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
function App() {
  return (
    // El componente ThemeProvider proporciona todo lo necesario para alternar el tema.
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
