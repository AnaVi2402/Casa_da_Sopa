const campoSenha = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");
const esconderSenha = document.getElementById("esconderSenha");

mostrarSenha.addEventListener("click", function() {
    campoSenha.type = "text";
    mostrarSenha.style.display = "none";
    esconderSenha.style.display = "inline";
});

esconderSenha.addEventListener("click", function() {
    campoSenha.type = "password";
    mostrarSenha.style.display = "inline";
    esconderSenha.style.display = "none";
});

const emailInput = document.getElementById("email");
const mensagemErro = document.getElementById("mensagemErro");
const botaoEntrar = document.getElementById("botaoEntrar");

//simulação para o banco de dados
const usuarioValido = {
    email: "usuario@exemplo.com",
    senha: "123"
};

botaoEntrar.addEventListener("click", function(event) {
    event.preventDefault();

    const emailDigitado = emailInput.value.trim();
    const senhaDigitada = campoSenha.value.trim();

    if (!emailDigitado.includes("@")){
        mensagemErro.textContent = "Por favor, insira um e-mail válido.";
        mensagemErro.classList.remove("escondido");
        return;
    }

    if (emailDigitado !== usuarioValido.email || senhaDigitada !== usuarioValido.senha){
        mensagemErro.textContent = "E-mail ou senha incorretos. Verifique seus dados.";
        mensagemErro.classList.remove("escondido");
        return;
    }

    mensagemErro.classList.add("escondido");
    alert("Login realizado com sucesso!");
});