var email = document.getElementById("floatingEmail");
var senhaField = document.getElementById("floatingSenha");
function senhaMostrar() {

    if (senhaField.type === "password") {
        senhaField.type = "text"; 
        eyeIcon.src = "assets/imgs/eye-open.png"; 
    } else {
        senhaField.type = "password"; 

    }
}
