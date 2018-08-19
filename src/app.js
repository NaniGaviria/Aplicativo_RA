const express= require("express");
const app= express();
const path = require("path");
const morgan = require ("morgan");
const mysql = require ("mysql");
const myConnection = require("express-myconnection");


//Setting
app.set("port", process.env.PORT || 8080); //Puerto por donde se conectara
app.set("view engine", "ejs"); //Plantilla que nos ayudará a la vista
app.set ("views", path.join(__dirname, "views") );//Decimos donde está la carpeta

//middlewares
app.use (morgan("dev"));

//Utilizando modulo de myConnection
app.use (myConnection(mysql, {
  host: "localhost",
  user: "root",
  password: "An4m4r14.",
  port: "3306",
  database:"registro_aca"
}, "single"));

//Importando rutas
const  customerRoutes = require ("./routes/customer");


//rutas
app.use("/", customerRoutes);

//Archivos estaticos
app.use(express.static(path.join (__dirname, "public")));


app.listen(app.get("port"), () => {
  console.log("Server on port 3000")
})
