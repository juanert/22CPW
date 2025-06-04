function cambiarModo() {
  let estado = localStorage.getItem("modo") || "☀️";
  let boton = document.getElementById("modo");
  let body = document.body;
  if (estado === "☀️") {
    boton.innerHTML = "🌙";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    localStorage.setItem("modo", "🌙");
  } else {
    boton.innerHTML = "☀️";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem("modo", "☀️");
  }
}

cambiarModo();

let fecha = new Date();
//sumarle 5 horas
let fechalimite = fecha.setHours(fecha.getHours() + 5);

//traer una cookie
