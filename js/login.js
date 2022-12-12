window.onload = function () {
    var entrar = document.getElementById("botao-login");


    entrar.onclick = function(){
        var login = document.getElementById("txtEmail").value;
        var senha = document.getElementById("txtSenha").value;
        if (login == "admin" && senha == "123456"){
            window.location.href = "telainicial.html";
        }else{
            alert("Para entrar na base teste colocar email = admin e senha = 123456 ");
        }

    }
}