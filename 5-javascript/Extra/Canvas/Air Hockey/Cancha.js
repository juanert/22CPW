export function dibujarCancha(canvas, context, color){
    // Dibujamos el fondo
    context.fillStyle = color || "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujamos la línea central
    context.strokeStyle = '#fff';
    context.lineWidth = 8;

    // Borde de la cancha
    context.strokeRect(0, 0, canvas.width, canvas.height);
    
    // Línea y círculo central
    
    // Comienzo del trazo
    context.beginPath();
    // Grosor de la línea
    context.lineWidth = 3;
    
    // Circulo central
    context.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
    
    // con moveTo definimos el punto de inicio de la línea
    context.moveTo(canvas.width / 2, 0);
    // con lineTo definimos el punto final de la línea
    context.lineTo(canvas.width / 2, canvas.height);
    // con stroke dibujamos la línea
    context.stroke();
    
    // Cerramos el trazo
    context.closePath();
}