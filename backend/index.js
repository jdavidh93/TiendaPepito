import express from "express"; //Servidor.
import cors from "cors"; //Para validar coneciones, reglas de conexion.
import db from "./db/db.js"; //Direccion de bd.
import dotenv from "dotenv"; //Variables de entorno.
import product from "./routes/product.js";
dotenv.config(); //Se inicializa junto con el servidor.

const app = express();

app.use(express.json()); //Para que solo envie o reciba json entre from y back.
app.use(cors());
app.use("/api/product", product)

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
); //Es para escuchar el siguiente puerto.

db.dbConnection(); //Conecion en mongoDB
