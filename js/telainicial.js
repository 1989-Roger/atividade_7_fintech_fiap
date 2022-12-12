window.onload = function () {
    var cadastral = document.getElementById("telaCadastro");
    var extrato = document.getElementById("telaExtrato");
    var receita = document.getElementById("telaReceita");
    var despesa = document.getElementById("telaDespesa");

    var sair = document.getElementById("btnSair");

    cadastral.onclick = function(){
        alert("Tela em desenvolvimento");
    }
    sair.onclick = function(){
        window.location.href = "index.html"
    }
     extrato.onclick = function(){
        window.location.href = "extrato.html"
    }
     receita.onclick = function(){
        alert("Tela em desenvolvimento");
    }
     despesa.onclick = function(){
        alert("Tela em desenvolvimento");
    }

}