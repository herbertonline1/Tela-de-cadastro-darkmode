function login() {
    let nome = document.getElementById("name").value;

    //condicional para o input Nome trim caso tem espaço e o length caso não tenha digitado nada
    if (nome.trim().length == 0) {
        alert("Campo Nome Obrigatorio")
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("iconome").style.fontSize = "25px";
        document.getElementById("iconome").style.color = "red";
        document.getElementById("name").focus();
        return;

    } else if (nome.trim().length >= 1) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("iconome").style.color = "green";
        document.getElementById("iconome").style.fontSize = "15px"

    };


    //condicional para o input E-mail
    let email = document.getElementById("email").value;
    if (email.trim().length == 0) {
        alert("Campo E-mail Obrigatorio")

        document.getElementById("email").style.borderColor = "red";
        document.getElementById("icoemail").style.fontSize = "25px";
        document.getElementById("icoemail").style.color = "red";
        document.getElementById("email").focus();
        return;
    } else if (email.trim().length >= 1) {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("icoemail").style.color = "green";
        document.getElementById("icoemail").style.fontSize = "15px"
    }



    let senha = document.getElementById("password").value;
    if (senha.trim().length == 0) {
        alert("Campo Senha Obrigatorio")

        document.getElementById("password").style.borderColor = "red";
        document.getElementById("icosenha").style.fontSize = "25px";
        document.getElementById("icosenha").style.color = "red";
        document.getElementById("password").focus();
        return;
    } else if (senha.trim().length >= 1) {
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("icosenha").style.color = "green";
        document.getElementById("icosenha").style.fontSize = "15px"
    }



}

