// ===== Navegação lateral =====
const itensMenu = document.querySelectorAll(".nav-item");
const tituloPagina = document.getElementById("tituloPagina");
const placeholderPagina = document.getElementById("placeholderPagina");

itensMenu.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        // remove "ativo" de todos e aplica só no clicado
        itensMenu.forEach(function (i) {
            i.classList.remove("ativo");
        });
        item.classList.add("ativo");

        // atualiza o cabeçalho, o conteúdo e a aba do navegador com a página selecionada
        const nomePagina = item.dataset.pagina;
        tituloPagina.textContent = nomePagina;
        placeholderPagina.textContent = nomePagina;
        document.title = nomePagina + " - Casa da Sopa de Restinga";
    });
});

// Botão Sair
const botaoSair = document.getElementById("botaoSair");

botaoSair.addEventListener("click", function () {
    const confirmou = confirm("Deseja realmente sair do sistema?");
    if (confirmou) {
        // Aqui depois entra a lógica real de logout (limpar sessão e redirecionar)
        window.location.href = "../login/Login.html";
    }
});

// Aviso de cookies 
const avisoCookies = document.getElementById("avisoCookies");
const fecharCookies = document.getElementById("fecharCookies");

fecharCookies.addEventListener("click", function () {
    avisoCookies.classList.add("escondido");
});

// Esconder / mostrar menu 
const app = document.querySelector(".app");
const botaoMenu = document.getElementById("botaoMenu");

// lembra a escolha da pessoa entre uma página e outra
try {
    if (localStorage.getItem("menuEscondido") === "1") {
        app.classList.add("menu-escondido");
    }
} catch (e) {}

botaoMenu.addEventListener("click", function () {
    const escondido = app.classList.toggle("menu-escondido");
    try {
        localStorage.setItem("menuEscondido", escondido ? "1" : "0");
    } catch (e) {}
});