import express, { json } from 'express'; //importamos express
import connection from './config/dbConnection.js';  //importamos la conexion a la base de datos
import userRoutes from './routes/users.routes.js'; //importamos las rutas de usuarios
const app = express(); // Crear el servidor ejecutando express
const port = 3001;//crear un puerto
app.use(json());// Middleware para parsear JSON
connection; // Ejecutar la conexión a la base de datos

// Usar las rutas de usuarios
app.use('/', userRoutes);

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
