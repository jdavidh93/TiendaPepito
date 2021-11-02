import Express from "express"; //Servidor.
import cors from "cors"; //Para validar coneciones, reglas de conexion.
import db from "./db/db.js"; //Direccion de bd.
import dotenv from "dotenv"; //Variables de entorno.
dotenv.config(); //Se inicializa junto con el servidor.

const app = Express();
//
app.use(Express.json()); //Para que solo envie o reciba json entre from y back.
app.use(cors());

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
); //Es para escuchar el siguiente puerto.

db.dbConnection(); //Conecion en mongoDB
