function agregarFavorito(personaje) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (!favoritos.some((fav) => fav.id === personaje.id)) {
    favoritos.push(personaje);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert(`${personaje.name} ha sido agregado a tus favoritos.`);
  } else {
    alert(`${personaje.name} ya está en tus favoritos.`);
  }
}

function mostrarFavoritos() {
  const favoritosContainer = document.getElementById("favoritos");
  favoritosContainer.innerHTML = ""; // Limpiar el contenedor
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    favoritosContainer.innerHTML = "<p>No tienes personajes favoritos.</p>";
    return;
  }

  favoritos.forEach((personaje) => {
    const characterCard = document.createElement("div");
    characterCard.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p>Especie: ${personaje.species}</p>
      <p>Estado: ${personaje.status}</p>
      <button onclick="eliminarFavorito(${personaje.id})">❌</button>
    `;
    favoritosContainer.appendChild(characterCard);
  });
}

function eliminarFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos = favoritos.filter((fav) => fav.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  mostrarFavoritos();
  alert("Personaje eliminado de tus favoritos.");
}
