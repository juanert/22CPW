import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Provee un contexto de tema a sus componentes hijos, permitiendo que ellos accedan
 * al tema actual y alternar entre modos claro y oscuro.
 *
 * @param {ReactNode} props.children - El componente hijo que se renderizara con el tema proporcionado.
 *
 * @returns {JSX.Element} Un componente de tipo provider que proporciona un tema y la funcionalidad
 * de alternar entre modos claro y oscuro a sus descendientes.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // light | dark

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Establecemos el componente para ThemeContext y lo asignamos como componente de tipo Provider.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "dark"
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-white text-black"
        }>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Notas adicionales:
 *
 * Un componente de tipo Provider es aquel que tiene la capacidad de proporcionar contexto a sus descendientes mediante la propiedad value.
 * De esta forma, se evita el tener que enviar ese mismo contexto a traves de props.
 *
 * Es necesario definir todos los componentes que necesiten acceder al contexto como desdescendientes del provider.
 */
