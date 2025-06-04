async function mostrarPersonajes() {
  await fetch("https://rickandmortyapi.com/api/character")
    .then((texto) => {
      return texto.json();
    })
    .then((informacion) => {
      document.getElementById("personajes").innerHTML = informacion.results
        .map(
          (character) => `
    <div class="flex flex-col items-center justify-center gap-2">
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
    </div>
  `
        )
        .join("");
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

mostrarPersonajes();

/*
  JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer/escribir tanto para humanos como para máquinas. Se utiliza comúnmente para transmitir datos entre un servidor y una aplicación web, especialmente en aplicaciones basadas en JavaScript.
  {
    "key": "value",
    "array": [1, 2, 3],
    "object": {
      "nestedKey": "nestedValue"
    }
  }
*/
