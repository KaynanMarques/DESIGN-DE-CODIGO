function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "" || senha === "") {
        mensagem.innerHTML = "Preencha todos os campos!";
        return;
    }

    if (usuario === "admin" && senha === "123") {
        window.location.href = "media.html";
    } else {
        mensagem.innerHTML = "Usuário ou senha inválidos!";
    }
}

function calcularMedia() {
    const valorNota1 = document.getElementById("nota1").value;
    const valorNota2 = document.getElementById("nota2").value;
    const resultado = document.getElementById("resultado");

    if (valorNota1 === "" || valorNota2 === "") {
        resultado.innerHTML = "Preencha todas as notas!";
        return;
    }

    const nota1 = Number(valorNota1);
    const nota2 = Number(valorNota2);

    const media = (nota1 + nota2) / 2;

    resultado.innerHTML = "Média: " + media;
}