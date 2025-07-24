import { useEffect, useRef } from "react";
import useTheme from "./../context/useTheme";

/**
 * LoginForm es un componente que contiene un formulario de inicio de sesión.
 *
 * Este formulario tiene un campo para el email y otro para la contraseña, y un
 * botón para enviar el formulario y hacer login.
 *
 * El formulario utiliza el hook useTheme para obtener el tema actual, y el hook
 * useEffect (junto con useRef) para enfocar el campo de email cuando el componente se monta.
 *
 * @returns {JSX.Element} El formulario de inicio de sesión.
 */
export default function LoginForm() {
  const emailRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    emailRef.current.focus(); // <-- Enfoca el campo de email cuando el componente se monta tras recargar la página.
    console.log("Email input focused");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Logged in!");
  }

  return (
    <form action="" className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <input
        ref={emailRef}
        id="email"
        type="email"
        className={
          `px-4 py-2 border rounder-md` +
          " " +
          (theme === "dark" ? "border-white" : "border-black")
        }></input>
      <label htmlFor="password" className="text-sm font-medium">
        Password
      </label>
      <input
        type="password"
        id="password"
        className={
          `px-4 py-2 border rounder-md` +
          " " +
          (theme === "dark" ? "border-white" : "border-black")
        }
        placeholder="**********"></input>
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 rounded-md bg-blue-600 text-white">
        Login
      </button>
    </form>
  );
}
