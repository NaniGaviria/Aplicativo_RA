var http = require("http");

var manejador = function(solicitud, respuesta) {
  console.log("Recibimos una peticion");
  respuesta.end("Está respondiendo a la peticion");

};

var servidor = http.createServer(manejador);
servidor.listen(8080);
