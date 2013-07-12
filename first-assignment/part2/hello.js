//author = Ruben Espinosa

var fs = require("fs");
var outfile = "hello.txt";
var out = new Array();
var str = ""

function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 var m=Math.sqrt(n);
 for (var i=3;i<=m;i+=2) {
  if (n%i==0) return false;
 }
 return true;
}

for(var i = 0; out.length < 100; i++){
	if(isPrime(i)){
		out.push(i) ; 
	}
}

for(var i = 0; i < out.length; i++){
	if(i < out.length - 1){
		str += out[i] + ",";	
	}else{
		str += out[i] 
	}
	
}
fs.writeFileSync(outfile, str); 

