var email = document.getElementById("floatingEmail");
var senhaField = document.getElementById("floatingSenha");
var button = document.getElementById("button");
function senhaMostrar() {

    if (senhaField.type === "password") {
        senhaField.type = "text"; 
        eyeIcon.src = "assets/imgs/eye-open.png"; 
    } else {
        senhaField.type = "password"; 

    }
}
function alertBD(){
    alert("Infelismente ainda não temos um Banco de Dados");
}
