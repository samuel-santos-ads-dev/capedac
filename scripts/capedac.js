// Atualiza ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    // MODAIS
    const modalPix = document.getElementById("modalPix");
    const abrirPix = document.getElementById("abrirPix");
    const modalBanco = document.getElementById("modalBanco");
    const abrirBanco = document.getElementById("abrirBanco");
    const modalMapa = document.getElementById("modalMapa");
    const abrirMapa = document.getElementById("abrirMapa");
    const fecharBtns = document.querySelectorAll(".fechar");

    if (abrirPix) abrirPix.addEventListener("click", () => modalPix.style.display = "flex");
    if (abrirBanco) abrirBanco.addEventListener("click", () => modalBanco.style.display = "flex");
    if (abrirMapa) abrirMapa.addEventListener("click", () => modalMapa.style.display = "flex");

    fecharBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (modalPix) modalPix.style.display = "none";
            if (modalBanco) modalBanco.style.display = "none";
            if (modalMapa) modalMapa.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target === modalPix) modalPix.style.display = "none";
        if (e.target === modalBanco) modalBanco.style.display = "none";
        if (e.target === modalMapa) modalMapa.style.display = "none";
    });

    // MODO ESCURO
    const btnAlternar = document.getElementById("btn-alternar");
    if (btnAlternar) {
        btnAlternar.addEventListener("click", () => {
            document.body.classList.toggle("modo-escuro");
            const icon = btnAlternar.querySelector("i");
            icon.classList.toggle("fa-moon");
            icon.classList.toggle("fa-sun");
        });
    }

    // MENU HAMBÚRGUER
    const menuAlternar = document.querySelector(".menu-alternar");
    const navList = document.querySelector(".lista");

    if (menuAlternar && navList) {
        menuAlternar.addEventListener("click", () => {
            const aberto = navList.classList.toggle("ativa");
            menuAlternar.classList.toggle("aberto");

            // Troca o título dinamicamente
            menuAlternar.setAttribute("title", aberto ? "Fechar menu" : "Abrir menu");
        });
    }
});
