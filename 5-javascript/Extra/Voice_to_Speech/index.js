/* 
    ¿Como funciona la API de texto a voz?
    - SpeechSynthesis: es una interfaz global que se utiliza para controlar y manipular la funcionalidad 
    de síntesis de voz en el navegador web. Es parte de la API de Web Speech y permite que las aplicaciones 
    web conviertan texto en voz hablada.
    
    Permite que la aplicación hable a través del sistema de audio del dispositivo.
    - SpeechSynthesisUtterance: es un objeto que representa un mensaje que se va a leer en voz alta.
    - SpeechSynthesisVoice: es un objeto que representa una voz que se puede usar para la síntesis de voz.
    
    Métodos y propiedades clave de `speechSynthesis`:

    1) `speechSynthesis.speak()`: Este método inicia la síntesis de voz del texto especificado. Acepta un objeto `SpeechSynthesisUtterance` que contiene el texto que se va a hablar.
    2) `speechSynthesis.cancel()`: Este método cancela la síntesis de voz actual, si la hay.
    3) `speechSynthesis.pause()`: Este método pausa la síntesis de voz actual.
    4) `speechSynthesis.resume()`: Este método reanuda la síntesis de voz pausada.
    5) `speechSynthesis.getVoices()`: Este método devuelve una lista de objetos `SpeechSynthesisVoice` que representan las voces disponibles en el dispositivo.
    6) `speechSynthesis.onvoiceschanged`: Este evento se dispara cuando la lista de voces disponibles cambia.
    7) `speechSynthesis.pending`: Esta propiedad de solo lectura indica si hay una tarea de síntesis de voz en la cola que aún no ha comenzado.
    8) `speechSynthesis.speaking`: Esta propiedad de solo lectura indica si actualmente se está hablando una tarea de síntesis de voz.
    9) `speechSynthesis.paused`: Esta propiedad de solo lectura indica si la síntesis de voz está pausada.

    Ten en cuenta que la disponibilidad de voces y la calidad de la síntesis de voz pueden variar dependiendo del dispositivo y del navegador.


    Mas voces disponibles en: https://cloud.google.com/text-to-speech/docs/voices?hl=es-419
*/

// Seleccionar el boton que inicia la lectura
const botonHablar = document.getElementById("btn-hablar");

// Agregar eventos

// Hablar
botonHablar.addEventListener("click", () => {
    // Seleccionar el texto que se va a leer
    const text = document.getElementById("mensaje").value;
    // alert(text);

    // Verificar si hay texto
    if (text) {
        const voz = new SpeechSynthesisUtterance(text);
        const voces = speechSynthesis.getVoices();
        console.log(voces);
        speechSynthesis.speak(voz);
    }else{
        speechSynthesis.speak(new SpeechSynthesisUtterance("No hay texto para leér"));
    }
});


// Obtener las voces disponibles
document.getElementById("voces").addEventListener("click", () => {
    // Detectar si hay voces disponibles y mostrarlas.
    const voces = speechSynthesis.getVoices();

    // Si hay voces disponibles, mostrarlas en consola.
    if (voces.length > 0) {
        console.clear();
        console.log("Voces disponibles:");
        voces.forEach((voz, index) => {
            console.log(`Voz ${index + 1}: ${voz.name} - ${voz.lang}`);
            console.table(voz);
        });
    }
    // Sino, mostrar un mensaje en consola.
    else{
        console.log("Las voces no se han cargado aún, intenta nuevamente.");
    }
});