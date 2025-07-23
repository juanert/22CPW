import ThemeExample from "./components/ThemeExample";
import { ThemeProvider } from "./context/ThemeProvider";

/**
 * Componente principal de la aplicación.
 * Renderiza un ThemeExample, que muestra el tema actual y proporciona un botón para cambiar el tema.
 *
 * @returns {JSX.Element} El JSX elemento renderizado.
 */
function App() {
  return (
    // El componente ThemeProvider proporciona todo lo necesario para alternar el tema.
    <ThemeProvider>
      <main className="mx-auto space-y-8 py-8">
        <ThemeExample />
      </main>
    </ThemeProvider>
  );
}

export default App;
