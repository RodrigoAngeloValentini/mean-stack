var http = require("http");
var fs =   require('fs');

var server = http.createServer(function(req, res) {
	novoArquivo = fs.createWriteStream('arquivo.txt');
	var size = req.headers['content-length'];
	var uploaded = 0;

	req.pipe(novoArquivo);

	req.on('data', function(chunk) {
		uploaded += chunk.length;
		var progress = (uploaded / size) * 100;
		res.write('progess: '+parseInt(progress, 10)+'%\n');
	});
	
});
server.listen(8882);

