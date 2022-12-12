window.onload = function () {

    var form = document.getElementById("frmCadastro");
    form.onsubmit = function (e) {
        var valorNome = document.getElementById("nome").value;
        var valorCpf = document.getElementById("cpf").value;
        var valorDtNascimento = document.getElementById("dataNascimento").value;
        var valorTpSexo = document.getElementById("tipoSexo").value;
        var valorDDD = document.getElementById("inputDDD").value;
        var valorTel = document.getElementById("inputFone").value;
        var valorEmail = document.getElementById("email").value;
        var valorSenha = document.getElementById("senha").value;
        var valorSenhaConfirma = document.getElementById("senha-confirmar").value;
        var msgRetorno = "";
        var erros = 0;


        if (valorNome.length < 5) {
            marcaCampo(true, document.getElementById("rsNome"))
            msgRetorno += "Nome deve possuir pelo menos 5 letras\n";
            erros++;
        } else {
            marcaCampo(false, document.getElementById("rsNome"))
        }
        if (valorCpf.length != 11) {
            marcaCampo(true, document.getElementById("rsCpf"))
            msgRetorno += "Cpf deve possuir 11 caracteres\n";
            erros++;
        } else {
            marcaCampo(false, document.getElementById("rsCpf"))
            if (validaCpf(valorCpf) == false) {
                marcaCampo(true, document.getElementById("rsCpf"))
                msgRetorno += "Cpf inválido\n";
                erros++;
            }
        }

        if (validaIdade(valorDtNascimento) < 14) {
            msgRetorno += "Idade mínima para utilização do aplicativo é de 14 anos\n";
            marcaCampo(true, document.getElementById("rsDtNascimento"))
            erros++;
        } else {
            marcaCampo(false, document.getElementById("rsDtNascimento"))
        }
        if (valorTpSexo != "M" && valorTpSexo != "F" && valorTpSexo != "X") {
            msgRetorno += "Favor preencher Sexo com informação válida disponível\n";
            erros++;
            marcaCampo(true, document.getElementById("rsSexo"))

        } else {
            marcaCampo(false, document.getElementById("rsSexo"))
        }
        if (valorDDD.length != 2) {
            msgRetorno += "DDD obrigatório com 2 digitos\n";
            erros++;
            marcaCampo(true, document.getElementById("rsDDD"))
        } else {
            marcaCampo(false, document.getElementById("rsDDD"))

        }
        if (valorTel.length < 8) {
            msgRetorno += "Telefone obrigatório com pelo menos 8 digitos\n";
            erros++;
            marcaCampo(true, document.getElementById("rsTelefone"))

        } else {
            marcaCampo(false, document.getElementById("rsTelefone"))
        }
        // definir regra de criação de senha
        if (valorSenha != valorSenhaConfirma || valorSenha.length < 6   ) {
            msgRetorno += "Senha digitada e confirmação de senha devem ser iguais e possuirem 6 digitos\n";
            erros++;
            marcaCampo(true, document.getElementById("rsSenha"))
            marcaCampo(true, document.getElementById("rsConfirmaSenha"))
        } else {
            marcaCampo(false, document.getElementById("rsSenha"))
            marcaCampo(false, document.getElementById("rsConfirmaSenha"))

        }

        e.preventDefault();

        if (erros == 0) {
            // criar posteriormente metodo post
            window.location.href = "index.html";
        } else {
            alert(msgRetorno)
        }
    };
}

function marcaCampo(lMarca, objValor) {
    if (lMarca) {
        objValor.style.color = "red";
        objValor.innerHTML = "*";
    } else {
        objValor.style.color = "green"; //Alteramos a cor do Span para Verde
        objValor.innerHTML = "OK"; //Alteramos o  
    }
}

function validaCpf(cpf) {

    num1 = cpf.slice(0, 1)
    num2 = cpf.slice(1, 2)
    num3 = cpf.slice(2, 3)
    num4 = cpf.slice(3, 4)
    num5 = cpf.slice(4, 5)
    num6 = cpf.slice(5, 6)
    num7 = cpf.slice(6, 7)
    num8 = cpf.slice(7, 8)
    num9 = cpf.slice(8, 9)
    num10 = cpf.slice(9, 10)
    num11 = cpf.slice(10, 11)

    if ((num1 == num2) && (num2 == num3) && (num3 == num4) && (num4 == num5) && (num5 == num6) && (num6 == num7) && (num7 == num8) && (num8 == num9) && (num9 == num10) && (num10 == num11)) {
        return false;
    }
    soma1 = num1 * 10 + num2 * 9 + num3 * 8 + num4 * 7 + num5 * 6 + num6 * 5 + num7 * 4 + num8 * 3 + num9 * 2;
    resto1 = (soma1 * 10) % 11
    if (resto1 == 10) {
        resto1 = 0;
    }

    soma2 = num1 * 11 + num2 * 10 + num3 * 9 + num4 * 8 + num5 * 7 + num6 * 6 + num7 * 5 + num8 * 4 + num9 * 3 + num10 * 2;

    resto2 = (soma2 * 10) % 11;

    if (resto2 == 10) {
        resto2 = 0;
    }


    if ((resto1 == num10) && (resto2 == num11)) {
        return true;
    } else {
        return false;
    }
}

function validaIdade(dtNascimento) {
    var birthDay = dtNascimento;
    var age = Math.floor(moment(new Date()).diff(moment(birthDay), 'years', true));
    return age;
}