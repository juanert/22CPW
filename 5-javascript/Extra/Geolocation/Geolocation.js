/*
    API de Geolocalización
    La API de geolocalización proporciona información sobre la ubicación del usuario
    a través del navegador. La API de geolocalización se puede utilizar para obtener
    la ubicación actual del usuario, así como para rastrear los cambios en la ubicación
    del usuario a lo largo del tiempo.

    Los métodos y propiedades de la API de geolocalización se pueden utilizar para
    obtener la ubicación actual del usuario, así como para configurar opciones de
    geolocalización, como la precisión y el tiempo de espera.

    Estos metodos y propiedades son:

    - navigator: Un objeto que proporciona información sobre el navegador del usuario,

    - navigator.geolocation: Un objeto que proporciona métodos y propiedades para
    interactuar con la API de geolocalización.

    - getCurrentPosition(): Este método se utiliza para obtener la ubicación actual del usuario. 
    Toma dos argumentos: una función de éxito que se llama cuando se obtiene la ubicación del usuario
    y una función de error que se llama si no se puede obtener la ubicación del usuario.

    - watchPosition(): Este método se utiliza para rastrear los cambios en la ubicación del usuario
    a lo largo del tiempo. Toma tres argumentos: una función de éxito que se llama cada vez que se
    actualiza la ubicación del usuario, una función de error que se llama si no se puede obtener la
    ubicación del usuario y un objeto de opciones que se utiliza para configurar la precisión y el
    tiempo de espera.

    - clearWatch(): Este método se utiliza para detener el seguimiento de la ubicación del usuario
    que se inició con el método watchPosition(). Toma un argumento que es el ID devuelto por el
    método watchPosition().

    - Propiedades de la API de geolocalización:
        
        - coords: Un objeto que contiene las coordenadas de la ubicación del usuario, incluida la latitud,
        la longitud, la precisión, la altitud, la precisión de la altitud, la dirección, la velocidad y la
        precisión de la velocidad. 
        NOTA: Solo funciona si se utiliza el método getCurrentPosition() o watchPosition().
        Valores admitidos: latitude, longitude, accuracy, altitude, heading, speed.
            - latitude: La latitud de la ubicación del usuario en grados decimales.
            - longitude: La longitud de la ubicación del usuario en grados decimales.
            - accuracy: La precisión de la ubicación del usuario en metros.
            - altitude: La altitud de la ubicación del usuario en metros sobre el nivel del mar.
            - heading: La dirección de la ubicación del usuario en grados en relación con el norte verdadero.
            - speed: La velocidad de la ubicación del usuario en metros por segundo.

        
        - timestamp: La fecha y hora en que se obtuvo la ubicación del usuario, es decir, el número de
        milisegundos desde el tiempo Epoch (1 de enero de 1970).
        
        - error: Un objeto que contiene información sobre cualquier error que ocurra al obtener la ubicación
        del usuario, incluido el código de error y el mensaje de error.

*/

const longitud = document.getElementById("longitud");
const latitud = document.getElementById("latitud");
const altitud = document.getElementById("altitud");
const precision = document.getElementById("precision");
const velocidad = document.getElementById("velocidad");
const direccion = document.getElementById("direccion");




// Ejemplo de uso:

// Verificar si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
    console.log("Geolocalización soportada");

    // Obtener la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition((position) => {
        // Obtener las coordenadas de latitud y longitud
        let user_latitud = position.coords.latitude;
        let user_longitud = position.coords.longitude;
        let user_precision = position.coords.accuracy;
        let user_altitud = position.coords.altitude;
        let user_velocidad = position.coords.speed;
        let user_direccion = position.coords.heading;

        let user_fecha = new Date(position.timestamp).toLocaleString();

        // Hacer algo con las coordenadas, como mostrarlas en la página o en consola.
        console.log(`Latitud: ${user_latitud}`);
        console.log(`Longitud: ${user_longitud}`);
        console.log(`Precisión: ${user_precision}`);
        console.log(`Altitud: ${user_altitud}`);
        console.log(`Velocidad: ${user_velocidad}`);
        console.log(`Dirección: ${user_direccion}`);
        console.log(`Fecha: ${user_fecha}`);
    });
} else {
    console.log("Geolocalización no soportada");
};


// Ejemplo de uso con watchPosition() y clearWatch():
if ("geolocation" in navigator) {
    console.log("Geolocalización soportada");

    // Rastrear los cambios en la ubicación del usuario
    let watchId = navigator.geolocation.watchPosition((position) => {

        console.log("Seguimiento iniciado");

        // Obtener las coordenadas de latitud y longitud
        let user_latitud = position.coords.latitude;
        let user_longitud = position.coords.longitude;
        let user_precision = position.coords.accuracy;
        let user_altitud = position.coords.altitude;
        let user_direccion = position.coords.heading;
        let user_velocidad = position.coords.speed;

        // Hacer algo con las coordenadas, como mostrarlas en la página o en consola
        // console.log(`Latitud: ${user_latitud}`);
        // console.log(`Longitud: ${user_longitud}`);
        // console.log(`Precisión: ${user_precision}`);
        // console.log(`Altitud: ${user_altitud}`);
        // console.log(`Velocidad: ${user_velocidad}`);
        // console.log(`Dirección: ${user_direccion}`);

        longitud.innerText = user_longitud || "S/I";
        latitud.innerText = user_latitud || "S/I";
        altitud.innerText = user_altitud || "S/I";
        precision.innerText = user_precision || "S/I";
        velocidad.innerText = user_velocidad || "S/I";
        direccion.innerText = user_direccion || "S/I";


        // Detener el seguimiento después de 30 segundos
        setTimeout(() => {
            navigator.geolocation.clearWatch(watchId);
            console.log("Seguimiento detenido");
        }, 30000);
    });

    console.log("ID de seguimiento: " + watchId);
} else {
    console.log("Geolocalización no soportada");
};



// Ejemplo de uso con getCurrentPosition() y Google Maps:
function ubicarme() {
    const status = document.getElementById("status");
    const linkMapa = document.getElementById("map-link");

    // Función que se ejecuta si se obtiene la ubicación
    function success(ubicacion) {
        const latitud = ubicacion.coords.latitude;
        const longitud = ubicacion.coords.longitude;

        status.innerText = "¡Te encontre!";
        linkMapa.href = `https://www.google.com/maps/@${latitud},${longitud},80m/data=!3m1!1e3?entry=ttu`;
        // linkMapa.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`;
        
        linkMapa.innerText = `Latitud: ${latitud} °, Longitud: ${longitud} °`;
    }

    // Función de error en caso de no poder obtener la ubicación
    function error() {
        status.innerText = "No se pudo obtener su ubicación";
    }

    if (navigator.geolocation) {
        status.innerText = "Localizando…";
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        status.innerText = "Geolocalización no soportada en su navegador";
    }
}

document.getElementById("encontrarme").addEventListener("click", ubicarme);

