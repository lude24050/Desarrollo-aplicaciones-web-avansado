/*var param_replacer = require('./lib/replace');
if(typeof exports !== 'undefined'){
	if(typeof module !== 'undefined' && module.exports){
		exports = module.exports = param_replacer;
	}
	exports.param_replacer = param_replacer;
}else{
	root.param_replacer = param_replacer;
}*/
function printing(){
	console.log(1);
	setTimeout(function(){ console.log(2); },1000);
	setTimeout(function(){ console.log(3); },0);
	console.log(4);
}

printing();
















/*var objetivo = "%hello% %world%! -- %world% %hello%";
var idioma = "es";
var reemplazos = {
	"en":{
		"hello":"Hello",
		"world":"world"
	},
	"es":{
		"hello":"Hola",
		"world":"Mundo"
	}
};

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

console.log(resultado);*/