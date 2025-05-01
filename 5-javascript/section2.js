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
  if (typeof nombre !== "string" || typeof apellido !== "string") {
    console.log("Error: El nombre y el apellido deben ser cadenas de texto.");
    return;
  }
  console.log("Hola " + nombre + " " + apellido); //Imprime "Hola, nombre!" en la consola
}

saludarConNombre(2, "hola"); //Ejecuta la funcion saludarConNombre con el parametro "Juan"
saludarConNombre("Pedro", "Daza"); //Ejecuta la funcion saludarConNombre con el parametro "Pedro"
saludarConNombre("Maria", "Paloma"); //Ejecuta la funcion saludarConNombre con el parametro "Maria"
saludarConNombre("Luis"); //Ejecuta la funcion saludarConNombre con el parametro "Luis"

/*
  Alcance
  Alcance de las variables:
  - let y const tienen un alcance de bloque, es decir, solo son accesibles dentro del bloque donde se definen.
  - var tiene un alcance de función, es decir, es accesible dentro de la función donde se define, o global si se define fuera de una función.

    let y = 20; // y es accesible dentro del bloque
    const z = 30; // z es accesible dentro del bloque

    if(true) {
      var x = 10; // x es accesible fuera del bloque
      let y = 20; // y no es accesible fuera del bloque
      const z = 30; // z no es accesible fuera del bloque
    }

    if(true) {
      let y = 20; // y no es accesible fuera del bloque
      const z = 30; // z no es accesible fuera del bloque
    }
    console.log(x,y,z) // x es 10, y y z no son accesibles

    //Ejercicio de alcance
    let x = "Hola";
    if(true){
      let y = "Saludos";
      if(y){
        if(x){
          let z = "Bienvenido";
        }
        console.log(x,y,z);
      }
    } else{
      console.log(x,y,z)
    }

    //Alcance de las funciones
    Las funciones tienen su propio alcance, es decir, las variables definidas dentro de una función no son accesibles fuera de ella.

    function saludar() {
      var nombre = "Juan"; // nombre es accesible dentro de la función
      console.log("Hola " + nombre); //Imprime "Hola, Juan!" en la consola
    }

    saludar(); //Ejecuta la funcion saludar
    console.log(nombre); //Error: nombre no es accesible fuera de la función
  */

//funcion sin retorno
function saludarSinRetorno(nombre) {
  console.log("Hola " + nombre); //Imprime "Hola, nombre!" en la consola
}
//Funcion con retorno
function saludarConRetorno(nombre) {
  return "Hola " + nombre; //Devuelve "Hola, nombre!" como resultado de la funcion
}

saludarSinRetorno("Juan"); //Ejecuta la funcion saludarSinRetorno con el parametro "Juan"
saludarConRetorno("Pedro"); //Ejecuta la funcion saludarConRetorno con el parametro "Pedro"

console.log(saludarConRetorno("Pedro"));
console.log(saludarSinRetorno("Pedro"));