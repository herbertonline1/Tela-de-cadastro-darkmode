// Função para a tela de cadastro

function cadastrar() {
    let cadastro = document.getElementById("name").value;

    //condicional para o input Nome trim caso tem espaço e o length caso não tenha digitado nada
    if (cadastro.trim().length == 0) {
        alert("Precisa Preencher o campo nome");
        document.getElementById("name").style.borderColor = "red";

        document.getElementById("iconome").style.color = "red";
        document.getElementById("name").focus();
        return;

    } else if (cadastro.trim().length >= 1) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("iconome").style.color = "green";
    };


    //condicional para o input Sobrenome trim caso tem espaço e o length caso não tenha digitado nada

    let sobrenome = document.getElementById("sobrename").value;
    if (sobrenome.trim().length == 0) {
        document.getElementById("sobrename").style.borderColor = "red";
        document.getElementById("icosobrenome").style.color = "red";
        document.getElementById("sobrename").focus();
        return;
    } else if (sobrenome.trim().length >= 1) {
        document.getElementById("sobrename").style.borderColor = "green";
        document.getElementById("icosobrenome").style.color = "green";
    };
}

