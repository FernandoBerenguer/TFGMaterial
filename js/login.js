
//document.getElementById('divFormLogin').style.display = 'block';
document.getElementById("botonLogin").addEventListener("click", validarLogin, false);


function validarLogin() 
{
    notifier.show('Login correcto!', 'Las credenciales son validas', '', 'img/success.png', 3000);
    notifier.show('Login fallido!', 'Hay errores en los campos', '', 'img/warning.png', 3000);
}
