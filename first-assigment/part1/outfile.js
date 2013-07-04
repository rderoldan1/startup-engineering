// author = Ruben Espinosa

var fs = require("fs");
var outfile = "startup.txt";
var out = "A startup is a business built to grow rapidly.\n"
fs.writeFileSync(outfile, out); 