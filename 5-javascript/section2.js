//FUNCIONES
/*
  Las funciones son bloques de código que se pueden reutilizar. Se definen con la palabra clave function, seguida del nombre de la función, paréntesis y llaves. Dentro de los paréntesis se pueden definir parámetros que permiten pasar información a la función. 
*/

// declaracion de la funcion
function saludar() {
  console.log("Hola, mundo!"); //Imprime "Hola, mundo!" en la consola
}

// llamada a la funcion
saludar(); //Ejecuta la funcion saludar
saludar(); //Ejecuta la funcion saludar
saludar(); //Ejecuta la funcion saludar

//Ejemplo de funcion con parametros
function saludarConNombre(nombre = "Jhon", apellido = "") {
  if(typeof nombre !== "string" || typeof apellido !== "string") {
    console.log("Error: El nombre y el apellido deben ser cadenas de texto.");
    return;
  }
  console.log("Hola " + nombre + " " + apellido); //Imprime "Hola, nombre!" en la consola
}

saludarConNombre(2, "hola"); //Ejecuta la funcion saludarConNombre con el parametro "Juan"
saludarConNombre("Pedro", "Daza"); //Ejecuta la funcion saludarConNombre con el parametro "Pedro"
saludarConNombre("Maria", "Paloma"); //Ejecuta la funcion saludarConNombre con el parametro "Maria"
saludarConNombre("Luis"); //Ejecuta la funcion saludarConNombre con el parametro "Luis"