var http = require("http");

// http.createServer(function(request, response) {
// 	response.writeHead(200);
// 	response.write("Ola mundo, esse e meu servidor");
// 	response.end();
// }).listen(8880);


// var server = http.createServer();
// server.on('request', function(req, res) {
// 	res.writeHead(200);
// 	res.write("Servidor mandou os primeiros dados do response");
// 	setTimeout(function() {
// 		res.write("Mando o segundo pacote...");
// 		res.end();
// 	}, 10000);
// });
// server.listen(8882);
// console.log("Servidor iniciado");


var server = http.createServer();
server.on('request', function(req, res) {
	res.writeHead(200);
	req.pipe(res);
	// req.on('data', function(chunk) {
		
	// 	res.write(chunk);
	// });

	// req.on('end', function() {
	// 	res.end('acabou');
	// });
});
server.listen(8882);

