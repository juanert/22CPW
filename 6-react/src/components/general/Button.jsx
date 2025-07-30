import { useContext } from "react";
import { ThemeContext } from "../../context/Layout.jsx";

/**
 * @component Button
 * @description Component used to create personalized buttons using Tailwind CSS.
 * @param {string} text - The text to display on the button
 * @param {string} color - The background color of the button
 * @param {string} textColor - The text color of the button
 * @param {string} extraClasses - Additional CSS classes to apply to the button
 * @author Juan Rodriguez
 * @returns
 */
function Button({
  text = "Click me",
  color = "blue-600",
  textColor = "white",
  extraClasses = "",
}) {
  // Use context if needed, e.g., for theming
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`bg-${color} text-${textColor} ${extraClasses}`}>
      {text} - {theme}
    </button>
  );
}


export { Button };
