window.onload = function () {
 
    var objBotao = document.getElementById("submit");
    objBotao.onclick = function () {
    validaUsuario()
        }
}

function validaUsuario(){

    var valorNome = document.getElementById("nome").value;
    var valorCpf = document.getElementById("cpf").value;
    var valorDtNascimento = document.getElementById("dataNascimento").value;
    var valorTpSexo = document.getElementById("tipoSexo").value;
    var valorDDD = document.getElementById("inputDDD").value;
    var valorTel = document.getElementById("inputFone").value;
    var valorEmail = document.getElementById("email").value;
    var valorSenha = document.getElementById("senha").value;
    var valorSenhaConfirma = document.getElementById("senha-confirmar").value;
    var msgRetorno = ""
    var lRetorno = true


    
    if (!lRetorno){
        alert(msgRetorno);

    }
    else{
        window.location.href = "index.html";
    }

}