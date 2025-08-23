import random
import re
"""
Genera una palabra aleatoria de una lista de palabras.
@param palabras: Lista de palabras de las que se seleccionará una aleatoriamente.
@return: Una palabra aleatoria de la lista.
"""
def generar_palabra_aleatoria(palabras):
  return random.choice(palabras)

"""
Genera una representación de la palabra oculta para el juego del ahorcado.
@param palabra: La palabra original que se va a ocultar.
@return: Una cadena de caracteres que representa la palabra oculta.
"""
def palabra_oculta(palabra):
  return "_" * len(palabra)

"""
Inicia el juego del ahorcado.
"""
def jugar():
  palabras = ["python", "programacion", "ahorcado", "juego"]
  intentos = 3
  palabra = generar_palabra_aleatoria(palabras)
  palabra_actual = palabra_oculta(palabra)
  while intentos > 0 and "_" in palabra_actual:
    print(f"Palabra: {palabra_actual}")
    letra = pedir_letra()
    if letra in palabra:
      #Obtener posiciones de la letra en la palabra
      for i in range(len(palabra)):
        if palabra[i] == letra:
          palabra_actual = palabra_actual[:i] + letra + palabra_actual[i+1:]
          print("¡Correcto!")
    else:
      intentos -= 1
      print(f"¡Incorrecto! Te quedan {intentos} intentos.")
  if "_" not in palabra_actual:
    print("¡Felicidades! Has adivinado la palabra.")
  else:
    print(f"¡Game Over! La palabra era: {palabra}")

"""
Pide una letra al usuario y la valida
"""
def pedir_letra():
  letra = input("Ingresa una letra (a-z): ").lower()
  while re.match("^[a-z]{1}$", letra) is None:
    letra = input("Por favor, ingresa una letra válida (a-z): ").lower()
  return letra

jugar()