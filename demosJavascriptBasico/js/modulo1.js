var APP =  APP || {}; // con esto hago que tome el valor que tenga APP anteriormente
//si es que estaba definida, o si no lo está, va a tomar el valor {} con un objeto vacio 
//con esto se hace que si defino algo en el archivo principal el modulo 1 cuando se ejecute
//el modulo2 no se van a borrar lo que tengo en APP

// Modulo 1
(function(){
	
	var temp=1;
	var a=2;
	
	function Clasificador(){
		//
		//	
		console.log("se construyó un clasificador");
		
		this.metodo1=function(){
			return 0;
		}
		
		this.metodo2=function(){
			return 1;	
		}
	}
	
	APP.clasificador=new Clasificador();

}()); // pobniendo doble parentesis lo que hago es llamar a la funcion inmediatamente
//despues de definirla 






