document.getElementById("navLogin").addEventListener("click", mostrarLogin, false);
document.getElementById("navSingIn").addEventListener("click", mostrarSingIn, false);



function mostrarLogin(){
	// Verifico si ya he cargado el formulario antes
    if ($('#divFormLogin').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divFormLogin"></div>').appendTo('#formularios').load("formularios/formLogin.html",
            function() {
                $.getScript("js/login.js");
            });

    } else {// si se cargo abrimos el dialogo
		//reiniciarValidacionesAltaCliente();
        document.getElementById('divFormLogin').style.display = 'block';
    }
}

function mostrarSingIn(){
    swal("Good job!", "You clicked the button!", "error");
}

// document.getElementById("navListadoClientes").addEventListener("click", mostrarListadoClientes, false);
// document.getElementById("navListadoProveedores").addEventListener("click", mostrarListadoProveedores, false);
// document.getElementById("navListadoEmpleados").addEventListener("click", mostrarListadoEmpleados, false);
// document.getElementById("navListadoDispositivos").addEventListener("click", mostrarListadoDispositivos, false);
// document.getElementById("navListadoReparaciones").addEventListener("click", mostrarListadoReparaciones, false);

// //LISTADOS
// function ocultarInicio(){
// 	document.getElementById("jumbo").style.display = "none";
// }

// //document.getElementById("volverListadoCliente").addEventListener("click",volverListado,false);
// function volverListado(){	
// 	document.getElementById("jumbo").style.display = "block";
// 	$("#listados").html("");
// }


