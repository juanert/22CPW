import pywhatkit

mensaje = "Hola Sergio"
personas = [
  {"nombre": "Sergio", "numero": "+584244996668"},
  {"nombre": "Hector", "numero": "+584246850316"},
  {"nombre": "Josue", "numero": "+584125588860"}
]

for persona in personas:
  mensaje = f"Hola {persona['nombre']}, este es un mensaje de prueba"
  pywhatkit.sendwhatmsg_instantly(persona["numero"], mensaje, 15, True, 5)

#https://chat.whatsapp.com/HC06tRFHXCFAuQ4BSmT6Zu

pywhatkit.sendwhatmsg_to_group_instantly("HC06tRFHXCFAuQ4BSmT6Zu", "Este es un mensaje automatizado", 15, True, 5)