import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Hook que devuelve el tema actual y una función para cambiarlo.
 *
 * @returns {object} Un objeto con dos propiedades:
 *   - theme (string): El tema actual
 *   - toggleTheme (function): Una función para cambiar el tema
 */
export default function useTheme() {
  return useContext(ThemeContext); // <-- Utiliza el hook useContext para acceder al contexto ThemeContext.
}
