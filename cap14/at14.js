// Dados originais do perfil

const nomeOriginal = "João Silva";
const cursoOriginal = "Curso: Técnico em Informática";
const fotoOriginal = "imagens/perfil1.jpg";

let contador = 0;

// Atualiza estatísticas

function registrarAcao(acao) {
    contador++;

    document.getElementById("contadorAcoes").textContent = contador;
    document.getElementById("ultimaAcao").textContent = acao;
}

// Alterar nome

document.getElementById("btnAlterarNome").addEventListener("click", function () {

    document.getElementById("nomePerfil").textContent =
        "Maria Oliveira";

    registrarAcao("Alteração de nome");
});

// Alterar curso

document.getElementById("btnAlterarCurso").addEventListener("click", function () {

    document.getElementById("cursoPerfil").textContent =
        "Curso: Análise e Desenvolvimento de Sistemas";

    registrarAcao("Alteração de curso");
});

// Alterar foto

document.getElementById("btnAlterarFoto").addEventListener("click", function () {

    document.getElementById("fotoPerfil").src =
        "imagens/perfil2.jpg";

    registrarAcao("Alteração de foto");
});

// Destacar perfil

document.getElementById("btnDestacarPerfil").addEventListener("click", function () {

    document.getElementById("perfil").classList.add("destaque");

    registrarAcao("Perfil destacado");
});

// Restaurar perfil

document.getElementById("btnRestaurar").addEventListener("click", function () {

    document.getElementById("nomePerfil").textContent =
        nomeOriginal;

    document.getElementById("cursoPerfil").textContent =
        cursoOriginal;

    document.getElementById("fotoPerfil").src =
        fotoOriginal;

    document.getElementById("perfil").classList.remove("destaque");

    registrarAcao("Perfil restaurado");
});

// Alterar tema

document.getElementById("temaSelect").addEventListener("change", function () {

    const tema = document.getElementById("temaSelect").value;

    document.body.classList.remove("temaEscuro");
    document.body.classList.remove("temaAzul");

    if (tema === "escuro") {
        document.body.classList.add("temaEscuro");
    }

    if (tema === "azul") {
        document.body.classList.add("temaAzul");
    }

    registrarAcao("Tema alterado");
});

// Alterar tamanho da fonte

document.getElementById("fonteRange").addEventListener("input", function () {

    const valor = document.getElementById("fonteRange").value;

    document.getElementById("biografiaPerfil").style.fontSize =
        valor + "px";

    document.getElementById("valorFonte").textContent =
        valor + "px";
});

// Mostrar ou ocultar biografia

document.getElementById("mostrarBio").addEventListener("change", function () {

    const marcado =
        document.getElementById("mostrarBio").checked;

    if (marcado) {
        document.getElementById("biografiaPerfil").style.display = "block";
    } else {
        document.getElementById("biografiaPerfil").style.display = "none";
    }

    registrarAcao("Exibição da biografia");
});

// Atualizar contato

document.getElementById("btnAtualizarContato").addEventListener("click", function () {

    const email =
        document.getElementById("emailInput").value;

    const telefone =
        document.getElementById("telefoneInput").value;

    document.getElementById("emailExibido").textContent =
        "E-mail: " + email;

    document.getElementById("telefoneExibido").textContent =
        "Telefone: " + telefone;

    registrarAcao("Contato atualizado");
});
