/*
    ¿Que es la Web API Canvas?
        Es una API que nos permite dibujar gráficos en 2D y 3D en un elemento HTML <canvas>
        El elemento <canvas> tiene dos atributos que son width y height, que definen el tamaño del lienzo.

    ¿Como se usa?
        1.- Se crea un elemento <canvas> en el HTML
        2.- Se obtiene el contexto del canvas
        3.- Se dibuja en el canvas

    ¿Que es el contexto del canvas?
        Es un objeto que tiene métodos y propiedades para dibujar figuras en el canvas.
    
    Metodos del contexto del canvas:

    Cuadros o rectángulos:
        - fillRect: Dibuja un rectángulo relleno
            fillRect(x, y, ancho, alto)
        - strokeRect: Dibuja un rectángulo sin relleno
            strokeRect(x, y, ancho, alto)
        - clearRect: Borra un rectángulo
            clearRect(x, y, ancho, alto)
        - stroke: Dibuja el contorno de una forma

    Circulos:
        - arc: Dibuja un arco
            arc(x, y, radio, anguloInicial, anguloFinal, sentidoHorario)
        - radio: Establece el radio de un arco
            radio = numero

    Textos:
        - font: Establece la fuente de texto
            font = valor
        - textAlign: Establece la alineación horizontal del texto
            textAlign = valor
        - textBaseline: Establece la alineación vertical del texto
            textBaseline = valor
        - fillText: Dibuja texto relleno
            fillText(texto, x, y)
        - strokeText: Dibuja texto sin relleno
            strokeText(texto, x, y)

    Otros:
        - beginPath: Inicia un nuevo camino
            beginPath()
        - closePath: Cierra el camino actual
            closePath()
        - moveTo: Mueve el lápiz a las coordenadas especificadas
            moveTo(x, y)
        - lineWidth: Establece el ancho de la línea
            lineWidth = numero
        - lineTo: Dibuja una línea desde la posición actual hasta las coordenadas especificadas
            lineTo(x, y)
        - fill: Rellena el área del camino
            fill()
        - stroke: Dibuja el contorno del camino
            stroke()
        - fillStyle: Establece el color de relleno
            fillStyle = color
            Nota: Siempre se debe definir el color antes de dibujar
        - strokeStyle: Establece el color del contorno
            strokeStyle = color
*/


// Seleccionamos el canvas
const canvas = document.getElementById('miCanvas');

// Definimos el tamaño del canvas
canvas.width = 900;
canvas.height = 600;

// Obtenemos el contexto del canvas
const contexto = canvas.getContext('2d');

/*
// Dibujamos un rectángulo relleno
contexto.fillStyle = "#2541b2";
contexto.fillRect(0, 0, canvas.width, canvas.height);

// Dibujamos un circulo relleno
contexto.beginPath();
//          Pos. x, Pos. y, Radio, anguloInicial, anguloFinal (6.28 es un círculo completo)
    contexto.arc(100, 150, 50, 0, 2 * Math.PI);
    contexto.fillStyle = "yellow";
    contexto.fill();
contexto.closePath();

// Dibujamos un circulo sin relleno
contexto.beginPath();
    contexto.strokeStyle = "green";
    contexto.lineWidth = 5;
    contexto.arc(800, 150, 50, 0, 2 * Math.PI);
    contexto.stroke();
contexto.closePath();

// Dibujamos un rectángulo sin relleno
contexto.beginPath();
    contexto.strokeStyle = "yellow";
    contexto.lineWidth = 5;
    //         Pos. x, Pos. y, Ancho, Alto
    contexto.strokeRect(400, 150, 100, 100);
    contexto.stroke();
contexto.closePath();


// Dibujamos un texto relleno
//             Grosor tamaño y fuente
contexto.font = "bolder 30px Consolas";
contexto.fillStyle = "white";
//         Texto, Pos. x, Pos. y
contexto.fillText("Aprendiendo a usar Canvas", 250, 100);


// Dibujamos una línea diagonal de arriba izquierda a abajo derecha
contexto.beginPath();
    // Color y grosor de la línea
    contexto.strokeStyle = "white";
    contexto.lineWidth = 5;

    // Iniciamos el trazo a la posición 0, 0
    contexto.moveTo(0, 0);
    // Dibujamos la línea hasta la posición 0, 600 (Abajo Izquierda)
    contexto.lineTo(0, 600);
    // Dibujamos la línea hasta la posición 900, 600 (Abajo Derecha)
    contexto.lineTo(900, 600);
    // Dibujamos la línea hasta la posición 900, 0 (Arriba Derecha)
    contexto.lineTo(900, 0);
    // Cerramos el cuadrado dibujando la línea hasta la posición 0, 0 (Arriba Izquierda)
    contexto.lineTo(0, 0);
    // Dibujamos el contorno de la forma cuyo camino hemos trabazado
    contexto.stroke();
contexto.closePath();


// Dibujamos una casa
contexto.beginPath();

    // Pared
    contexto.fillStyle = "#8B4513";
    contexto.fillRect(100, 300, 200, 200);

    // chimenea
    contexto.fillStyle = "#5A3400";
    contexto.fillRect(250, 200, 50, 100);

    // Techo
    contexto.moveTo(100, 300);
    contexto.lineTo(200, 200);
    contexto.lineTo(300, 300);
    contexto.closePath();
    contexto.fillStyle = "#8B0000";
    contexto.fill();

    // Ventana izquierda
    contexto.fillStyle = "#00FFFF";
    contexto.fillRect(120, 320, 50, 50);

    // Ventana derecha
    contexto.fillStyle = "#00FFFF";
    contexto.fillRect(230, 320, 50, 50);

    // Puerta en el medio
    contexto.fillStyle = "#fff";
    contexto.fillRect(170, 400, 60, 100);

contexto.closePath();

*/


/*
    Ejemplo practico: Realizaremos el Juego de Air Hockey (Hockey de mesa).
*/

// Importamos la función dibujarCancha del archivo Cancha.js y le pasamos los parametros necesarios.
import {dibujarCancha} from './Cancha.js';


// Cargamos los sonidos del juego
const sonidoBase = new Audio('./Audios/base.mp3');
const sonidoRebote = new Audio('./Audios/rebote.mp3');
const sonidoGol = new Audio('./Audios/gol.mp3');
const sonidoVictoria = new Audio('./Audios/victoria.mp3');


// Clase Jugador 
class Jugador {
    constructor(x, color){
        this.x = x || 0;
        this.y = (canvas.height / 2) - 50;
        this.width = 10;
        this.height = 100;
        this.color = color || '#530';
        this.puntos = 0;
    };

    dibujar(){
        // Establecemos el color de relleno del jugador
        contexto.fillStyle = this.color;
        // Dibujamos y ubicamos al jugador en el canvas
        contexto.fillRect(this.x, this.y, this.width, this.height);
    };

    /* *** Limites con pelota *** */
    colision(pel){
        // Colisión con el jugador

        //Si la pelota esta en el rango "x" del jugador.
        // pel.x - pel.radio < this.x + this.width: Si el lado izquierdo esta a la derecha del jugador
        // pel.x + pel.radio > this.x: Si el lado derecho esta a la izquierda del jugador
        if(pel.x - pel.radio < this.x + this.width && pel.x + pel.radio > this.x){
            // Si la pelota esta en el rango "y" del jugador
            // pel.y - pel.radio < this.y + this.height: Si la parte superior de la pelota esta en la parte inferior del jugador
            // pel.y + pel.radio > this.y: Si la parte inferior de la pelota esta en la parte superior del jugador
            if(pel.y - pel.radio < this.y + this.height && pel.y + pel.radio > this.y){
                // Si la pelota se encuentra en el rango de colisión "X", "Y" con el jugador, cambiamos la dirección de la pelota.
                // Evaluamos si la pelota ha golpeado la mitad izquierda del jugador, cambiamos la dirección a la izquierda, sino, a la derecha.
                if(pel.x < this.x + this.width / 2){
                    pel.direccionX = "izquierda";
                    // Reproducimos el sonido de rebote
                    sonidoRebote.play();
                }else{
                    pel.direccionX = "derecha";
                    // Reproducimos el sonido de rebote
                    sonidoRebote.play();
                }
            }
        }
    };
}

// Instanciamos y dibujamos a los jugadores para el primer vistazo.
// Esto lo comentaremos porque lo realizaremos mas adelante.
// const jugador1 = new Jugador(5, 'cyan');
// const jugador2 = new Jugador(canvas.width - 15, 'greenyellow');
// jugador1.dibujar();
// jugador2.dibujar();


// Clase Pelota
class Pelota {
    constructor(talla = 10, color = "#5A5B45"){
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radio = talla;
        this.color = color;
        this.friccion = 0.001;
        this.velocidadX = 1;
        this.velocidadY = 1;
        this.direccionX = Math.random() < 0.5 ? "izquierda" : "derecha";
        this.direccionY = Math.random() < 0.5 ? "arriba" : "abajo";
        this.nivelIncremental = false;
        
        // ¿Por que estos valores?: Lo vereos en el metodo dibujar().
        this.anguloInicial = 0;
        this.anguloFinal = 2 * Math.PI;
    }
    
    mover(){
        // Evaluamos la dirección de la pelota para moverla en diagonal.
        // Si la direcciónX es derecha y la direcciónY es abajo / diagonal derecha abajo
        if(this.direccionX === "derecha" && this.direccionY === "abajo"){
            this.x+=8;
            this.y+=8;
            // Si deseamos manejar velocidad incremental añadimos la velocidad a la posición de la pelota. 
            // this.x = this.x + this.velocidadX; 
            // this.y  = this.y + this.velocidadY;
        }// Si la direcciónX es derecha y la direcciónY es arriba / diagonal derecha arriba
        else if(this.direccionX === "derecha" && this.direccionY === "arriba"){
            this.x+=8;
            this.y-=8;
            // this.x = this.x + this.velocidadX;
            // this.y =  this.y - this.velocidadY;
        }// Si la direcciónX es izquierda y la direcciónY es abajo / diagonal izquierda abajo
        else if(this.direccionX === "izquierda" && this.direccionY === "abajo"){
            this.x-=8;
            this.y+=8;
            // this.x = this.x - this.velocidadX;
            // this.y = this.y + this.velocidadY;
        }// Si la direcciónX es izquierda y la direcciónY es arriba / diagonal izquierda arriba
        else if(this.direccionX === "izquierda" && this.direccionY === "arriba"){
            this.x-=8;
            this.y-=8;
            // this.x = this.x - this.velocidadX;
            // this.y = this.y - this.velocidadY;
        };

        // Aumentamos la velocidad de la pelota conforme avanza el juego (Aumentar el nivel de dificultad)
        // Para esto se debe indicar que se desea incrementar el nivel incrementalmente al inicio del juego.
        // if(this.nivelIncremental){
        //     this.velocidadX += this.friccion;
        //     this.velocidadY += this.friccion;
        // };


        /* *** Limites con cancha *** */
        // Evaluamos si la pelota llega a los limites del canvas considerando el radio de la pelota y el ancho de los jugadores (15px).
        // Esto se considera colisión con los bordes del canvas.
        
        // Si la pelota llega al limite inferior, cambiamos la dirección a arriba.
        if(this.y >= canvas.height - this.radio){
            this.direccionY = "arriba";
            sonidoRebote.play();
        }else if(this.y <= this.radio){
            // Si la pelota llega al limite superior, cambiamos la dirección a abajo.
            this.direccionY = "abajo";
            sonidoRebote.play();
        }else if(this.x >= canvas.width - this.radio){
            // Si la pelota llega al limite derecho de la cancha, cambiamos la dirección a izquierda y registramos el punto.
            this.direccionX = "izquierda";
            // Aumentamos el puntaje del jugador 1
            jugador1.puntos++;
            sonidoGol.play();
            document.getElementById('puntosJ1').innerText = jugador1.puntos;
        }else if(this.x <= this.radio){
            // Si la pelota llega al limite izquierdo de la cancha, cambiamos la dirección a derecha y registramos el punto.
            this.direccionX = "derecha";
            // Aumentamos el puntaje del jugador 2
            jugador2.puntos++;
            sonidoGol.play();
            document.getElementById('puntosJ2').innerText = jugador2.puntos;
        };
    }

    dibujar(){
        // Establecemos el color de relleno.
        contexto.fillStyle = this.color;

        /* 
            Cuando dibujas formas en un canvas con métodos como `context.arc()`, estás creando un "path" (camino o trazado),
            esto es una serie de puntos que se conectan entre sí y que el navegador usa para dibujar la forma.
            
            `context.beginPath()` inicia un nuevo camino, evitando que las formas se conecten entre sí de manera no deseada. 
            `context.closePath()` cierra el camino, conectando el último punto con el primero, útil para formas no cerradas. 
        */

        // Iniciamos un nuevo camino
        contexto.beginPath();
        
        // Dibujamos la pelota
        /* 
            La función `context.arc()` utiliza radianes para los ángulos inicial y final. 
            En radianes, un círculo completo es `2 * Math.PI`, que es aproximadamente 6.28. 
            Por lo tanto, para dibujar un círculo completo, necesitas un ángulo de `2 * Math.PI` radianes
            o colocar directamente 6.28 como valor del ángulo final.
        */
       //            pos. x, pos. y, radio,     anguloInicial rads,   anguloFinal rads
        contexto.arc(this.x, this.y, this.radio, this.anguloInicial, this.anguloFinal);
        
        // Cerramos el camino
        contexto.closePath();

        // Rellenamos la pelota
        contexto.fill();
    }
}


// Instanciamos los jugadores y la pelota
const jugador1 = new Jugador(5, '#00596B');
const jugador2 = new Jugador(canvas.width - 15, '#E55B21');
const pelota = new Pelota(25);


// Primer dibujo de la cancha, pelota y jugadores
dibujarCancha(canvas, contexto, '#64FFF9');
jugador1.dibujar();
jugador2.dibujar();
pelota.dibujar();


// Almacenamos el estado del teclado, este objeto se utilizará para llevar un registro de qué 
// teclas del teclado están actualmente presionadas.
let teclasPresionadas = {};


/* 
    Añadimos un controlador de eventos al documento que se activa cuando se presiona una tecla. 
    Cuando se presiona una tecla, se añade una entrada con la tecla presionada como "key" y true como "value". 
    Esto indica que la tecla está actualmente presionada.
*/
document.addEventListener('keydown', (evento) => {
    teclasPresionadas[evento.key] = true;
});

/*
    Añadimos un controlador de eventos al documento que se activa cuando se suelta una tecla.
    Cuando se suelta una tecla, se cambia el valor de la tecla presionada a false.
*/
document.addEventListener('keyup', (evento) => {
    teclasPresionadas[evento.key] = false;
});


// Importamos la función mensajeVictoria del archivo Mensaje.js
import {mensajeVictoria} from './Mensaje.js';



// NOTA: antes de comenzar con las animaciones debemos elaborar una funcion que se encargue de refrescar el canvas.


/* *** Funcion para refrescar el canvas *** */


function actualizarPantalla(){
    // Limpiamos el canvas cada vez que se actualiza para eliminar el rastro de la pelota y los jugadores
    // y poder dibujarlos en su nueva posición.
    //           desde x, desde y, hasta x, hasta y
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujamos la cancha
    dibujarCancha(canvas, contexto, '#64FFF9');

    // Mueve a los jugadores basándose en las teclas presionadas

    // Si la tecla "w" se presiona y la posición "Y" del jugador 1 es mayor a 0, movemos al jugador 1 hacia arriba.
    if(teclasPresionadas['w'] && jugador1.y > 0){
        jugador1.y -= 5.5;
    }
    // Si la tecla "s" se presiona y la posición "Y" del jugador 1 no sobrepasa el borde inferior, movemos al jugador 1 hacia abajo.
    if(teclasPresionadas['s'] && jugador1.y < canvas.height - jugador1.height){
        jugador1.y += 5.5;
    }
    // Si la tecla "ArrowUp" se presiona y la posición "Y" del jugador 2 es mayor a 0, movemos al jugador 2 hacia arriba.
    if(teclasPresionadas['ArrowUp'] && jugador2.y > 0){
        jugador2.y -= 5.5;
    }
    // Si la tecla "ArrowDown" se presiona y la posición "Y" del jugador 2 no sobrepasa el borde inferior, movemos al jugador 2 hacia abajo.
    if(teclasPresionadas['ArrowDown'] && jugador2.y < canvas.height - jugador2.height){
        jugador2.y += 5.5;
    }

    // Evaluamos la colisión con los jugadores
    jugador1.colision(pelota);
    jugador2.colision(pelota);

    // Dibujamos a la pelota y a los jugadores
    pelota.dibujar();
    pelota.mover();
    jugador1.dibujar();
    jugador2.dibujar()

    // Evaluamos si alguno de los jugadores llega a 10 puntos.
    if(jugador1.puntos === 5 || jugador2.puntos === 5){
        cancelAnimationFrame(miAnimacion);

        // Detenemos el sonido de la base y reproducimos el sonido de victoria 0.7 segundos después.
        sonidoBase.pause();
        setTimeout(() => {
            sonidoVictoria.play();
        }, 700);

        // Mostramos el mensaje de victoria
        if(jugador1.puntos === 5){
            mensajeVictoria('Jugador 1');
        }else{
            mensajeVictoria('Jugador 2');
        }

        // Rehabilitamos el botón de inicio
        document.getElementById('iniciar').disabled = false;
    }else{
        // Solicitamos al navegador que repinte la ventana en el próximo ciclo de animación.
        miAnimacion = requestAnimationFrame(actualizarPantalla);
    }
}

/* *** Animamos la pelota *** */

// En esta variable almacenaremos el id de la animación para poder detenerla
// cuando alguno de los jugadores llegue a 10 puntos.
let miAnimacion;
document.getElementById('iniciar').addEventListener('click', () => {
    // Iniciamos la animación

    /* ¿Que es requestAnimationFrame?
        Es un método que le dice al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.    
    */
    miAnimacion = requestAnimationFrame(actualizarPantalla);
    sonidoBase.play();
    document.getElementById('iniciar').disabled = true;
});



/* Extra:  Elaborar selector de niveles (DOM y Logica)  */