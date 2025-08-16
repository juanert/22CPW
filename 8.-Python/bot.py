#pip install selenium
#pip install webdriver-manager
#Selenium para interactuar con un navegador
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
#Webdriver para tener un navegador
from webdriver_manager.chrome import ChromeDriverManager


#Inicializar el navegador
options = Options()
options.add_argument("start-maximized")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
# Navegar a la página
driver.get("https://es.wikipedia.org/wiki/La_Virgen,_el_Niño_Jesús_y_Santa_Ana")
# Espera implícita de 10 segundos
driver.implicitly_wait(10)  
#toma todos los parrafos de la pagina
parrafos = driver.find_elements(By.TAG_NAME, "p")

#crear un archivo con todos los parrafos del articulo
with open("articulo.txt", "w", encoding="utf-8") as f:
    for parrafo in parrafos:
        f.write(parrafo.text + "\n")