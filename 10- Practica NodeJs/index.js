import express, { json } from 'express'; //importamos express
import connection from './config/database.js'; //importamos la conexion a la base de datos
import songsRoutes from './routes/songs.routes.js'; //importamos las rutas de canciones
const app = express(); // Crear el servidor ejecutando express
const port = 3000;//crear un puerto
connection; //conectar a la base de datos
app.use(json());// Middleware para parsear JSON
app.use('/', songsRoutes); // Rutas de canciones
//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
