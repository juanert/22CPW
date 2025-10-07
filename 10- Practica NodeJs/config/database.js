import mongoose from "mongoose";

const connection = mongoose.connect('mongodb://127.0.0.1:27017/miapp')
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch(err => {
    console.error('Error de conexión a la base de datos:', err);
  });

export default connection;