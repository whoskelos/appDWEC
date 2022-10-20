var listaUsuarios=[];
function cargarUsuarios(){
	listaUsuarios.push(["pedro","1234"]);
	listaUsuarios.push(["kelvin","1234"]);
	listaUsuarios.push(["jesus","jesus"]);
	listaUsuarios.push(["alumno","alumno"]);
}

function comprobarUsuario(){
	cargarUsuarios();
	let cajaError = document.getElementById("errorLogin");
	const user = document.getElementById("usuario");
	const passwd = document.getElementById("clave");
	if(listaUsuarios.find((x) => x[0] == user.value && x[1] == passwd.value)){
		location.href="aterrizaje.html";
	}else {
		cajaError.style.display = "block";
		cajaError.style.color = "red";
		cajaError.style.fontWeight = "bold";
	}
}

function quitarError() {
	let cajaError = document.getElementById("errorLogin");
	cajaError.style.display = "none";
}
