var http = require("http");

var manejador = function(solicitud, respuesta){
	for (var i = Things.length - 1; i >= 0; i--) {
		Things[i]
	}
	console.log("se recibe una nueva peticion");
	respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);