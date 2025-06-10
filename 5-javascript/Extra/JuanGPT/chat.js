let mensajes = localStorage.getItem("mensajes") || [];

/**
 * @description Crea un mensaje y lo almacena en el localStorage
 * @returns {void}
 */
function crearMensaje() {
  const mensaje = document.getElementById("prompt").value;
  if (mensaje.trim() === "") {
    alert("Por favor, escribe un mensaje.");
    return;
  }
  let mensajeObjeto = {
    texto: mensaje,
    usuario: "Usuario",
    fecha: new Date().toLocaleString(),
    id: Date.now(),
  };
  mensajes.push(mensajeObjeto);
  localStorage.setItem("mensajes", JSON.stringify(mensajes));
  console.log(localStorage.getItem("mensajes"));
  document.getElementById("prompt").value = "";
  mostrarMensajes();
}

/**
 * @description Muestra los mensajes almacenados en el localStorage
 * @returns {void}
 */
function mostrarMensajes() {
  const chat = document.getElementById("messages");
  chat.innerHTML = ""; // Limpiar el chat antes de mostrar los mensajes
  mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
  mensajes.map((mensaje) => {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = "mensaje";
    mensajeDiv.innerHTML = `<div class="flex flex-col gap-4 rounded-lg border bg-blue-600 text-white p-8"> <strong>${mensaje.usuario}:</strong> <p>${mensaje.texto}</p> <span class="fecha">(${mensaje.fecha})</span> </div>`;
    chat.appendChild(mensajeDiv);
  });
}

mostrarMensajes();
