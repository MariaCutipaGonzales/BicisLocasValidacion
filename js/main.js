
windows.addEventListener("click",function(){
	validateForm();
});
function validateForm(){
	/* Escribe tú código aquí */

var name = document.getElementById("name").value;
var lastname = document.getElementById("lastname").value;
var mail = document.getElementById("input-email").value;
var pwd = document.getElementById("input-password").value;
var select = document.getElementById("select");


//RegExpresion Mail 
regxmail = /\w+@\w+\.+[a-z]/;
regxInput = /^[a-z][a-z]*/;

//validando valor nullo - vacio - [A-Z] para name
if(name === null && name.length === 0 && regxInput.test(name)) && !name.charAt(0).toUpperCase(){
	alert("Ingrese Nombre no valido");
	return false;
}

//validando valor nullo - vacio - [A-Z] para name
else if(lastname === null && lastname.length === 0 && regxInput.test(lastname) && !lastname.charAt(0).toUpperCase()){
	alert("Ingrese Apellido no valido");
	return false;
}

//Validando  mail 
else if(!regxmail.test(mail)){
	alert("Ingrese un correo valido");
	return false;
}

//validando password
else if (pwd.value == "password" && pwd.value == "123456" && pwd.value == "098754" && pwd.length > 6) {
	alert("Ingrese una contraseña valida");
	return false;
}

//validando select
else if (select.value == "0"){
	alert("Seleccione una Bici");
	return false;
}


}
