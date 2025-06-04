// Funcion para dibujar el mensaje de fin de juego e indicar el ganador.
export function mensajeVictoria(canvas, context, ganador){
    context.fillStyle = '#005A84';
    // Establecemos la fuente
    context.font = 'bolder 35px Consolas';

    // Dibujamos el marcador para cada jugador tomando como valor la propiedad "puntos" de cada jugador
    //                         texto,                         pos. x, pos. y
    context.fillText(`Ganador ${ganador}`, canvas.width / 3, 150);
};

