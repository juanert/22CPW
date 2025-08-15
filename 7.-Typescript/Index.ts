let nombre: string = "Juan";
let edad: number = 30;
let esEstudiante: boolean = true;
let habilidades: string[] = ["JavaScript", "TypeScript", "React"];
let persona: { nombre: string; edad: number; esEstudiante: boolean } = {
    nombre: "Ana",
    edad: 25,
    esEstudiante: false
};
let saludo: (nombre: string) => string = (nombre) => `Hola, ${nombre}!`;

// Interfaces
interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
}

let coche: Vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};