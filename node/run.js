fs = require("fs");
console.log("Iniciando...");
fs.readFile("content.txt",'utf8', function(err, data) {
  console.log(data);
});
console.log("Finalizado");
