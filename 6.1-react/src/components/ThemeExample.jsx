import useTheme from "./../context/useTheme";

/**
 * Constituye un componente que muestra el tema activo (light o dark) y proporciona un botón alternar el mismo.
 *
 * @returns {JSX.Element} El componente de react rederizado
 */
export default function ThemeExample() {
  const { theme, toggleTheme } = useTheme(); // <-- Utilizar el hook useTheme para llamar a theme y toggleTheme desde el contexto.

  return (
    <div className="flex justify-between items-center p-4">
      <h2 className="text-xl font-bold mb-2">Tema actual: {theme}</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md bg-blue-600 text-white">
        Cambiar tema
      </button>
    </div>
  );
}
