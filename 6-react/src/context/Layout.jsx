import { useState, createContext, } from "react"

//Creo el contexto 
const ThemeContext = createContext();

/*
  * Proveedor de tema que envuelve a la aplicación
  * Permite a los componentes acceder al tema actual y cambiarlo
*/
function ThemeProvider({ children }){
  // Estado para el tema, por defecto es "light"
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value ={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }