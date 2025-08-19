import smtplib
from email.mime.text import MIMEText

#Correo 
email = "juan.e.rodriguez.toledo@gmail.com"
#Contraseña de aplicacion
app_password = "asta dxrm wrll qsho"

"""
  Puertos de GMAIL
  587 - TLS
  465 - SSL
"""
# Este es el contenido del correo
msg = MIMEText("Hola, este es un mensaje de prueba.")
# Destinatario del correo
msg["To"] = email
# Remitente
msg["From"] = "Juan Rodriguez <juan.e.rodriguez.toledo@gmail.com>"
# Asunto del correo
msg["Subject"] = "Asunto del correo de prueba"
  
with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
  smtp.login(email, app_password)
  smtp.send_message(msg)
  smtp.quit()



