   id="m2k7vz"
const formulario = document.getElementById("formCadastro");

// ===============================
// VALIDAÇÃO EM TEMPO REAL
// ===============================

document
    .getElementById("nome")
    .addEventListener("input", validarNome);

document
    .getElementById("email")
    .addEventListener("input", validarEmail);

document
    .getElementById("senha")
    .addEventListener("input", () => {
        validarSenha();
        atualizarForcaSenha();
    });

document
    .getElementById("confirmarSenha")
    .addEventListener("input", validarConfirmarSenha);

document
    .getElementById("mensagem")
    .addEventListener("input", () => {
        validarMensagem();
        atualizarContador();
    });

// ===============================
// ENVIO DO FORMULÁRIO
// ===============================

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    if(validarFormulario()){

        salvarLocalStorage();

        alert("Cadastro realizado com sucesso!");

        formulario.reset();

        document.getElementById("preview").style.display = "none";
        document.getElementById("contadorMensagem").textContent = 0;
        document.getElementById("forcaSenha").textContent = "";

        localStorage.removeItem("cadastroAluno");
    }

});

// ===============================
// BOTÃO LIMPAR
// ===============================

formulario.addEventListener("reset", function(){

    setTimeout(() => {

        document
            .querySelectorAll(".valido, .invalido")
            .forEach(campo => {

                campo.classList.remove("valido");
                campo.classList.remove("invalido");

            });

        document
            .querySelectorAll(".erro")
            .forEach(erro => erro.textContent = "");

    }, 10);

});

    id="v6n2lr"
// ===============================
// MÁSCARA DO TELEFONE
// ===============================

document.getElementById("telefone").addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = valor.substring(0, 15);

});

// ===============================
// CONTADOR DA MENSAGEM
// ===============================

function atualizarContador() {

    const mensagem = document.getElementById("mensagem");

    document.getElementById("contadorMensagem").textContent =
        mensagem.value.length;

}

// ===============================
// FORÇA DA SENHA
// ===============================

function atualizarForcaSenha() {

    const senha =
        document.getElementById("senha").value;

    const indicador =
        document.getElementById("forcaSenha");

    let pontos = 0;

    if (senha.length >= 8) pontos++;
    if (/[A-Z]/.test(senha)) pontos++;
    if (/\d/.test(senha)) pontos++;
    if (/[^A-Za-z0-9]/.test(senha)) pontos++;

    if (pontos <= 1) {
        indicador.textContent = "Senha fraca";
    }
    else if (pontos <= 3) {
        indicador.textContent = "Senha média";
    }
    else {
        indicador.textContent = "Senha forte";
    }

}

// ===============================
// PREVIEW DA IMAGEM
// ===============================

document.getElementById("foto").addEventListener("change", function () {

    const preview =
        document.getElementById("preview");

    const arquivo = this.files[0];

    if (!arquivo) {

        preview.style.display = "none";

        return;

    }

    const leitor = new FileReader();

    leitor.onload = function (e) {

        preview.src = e.target.result;

        preview.style.display = "block";

    };

    leitor.readAsDataURL(arquivo);

});

// ===============================
// MOSTRAR / ESCONDER SENHA
// ===============================

document.getElementById("mostrarSenha").addEventListener("click", function () {

    const senha = document.getElementById("senha");

    if (senha.type === "password") {

        senha.type = "text";
        this.textContent = "Ocultar";

    } else {

        senha.type = "password";
        this.textContent = "Mostrar";

    }

});

// ===============================
// LOCAL STORAGE
// ===============================

function salvarLocalStorage() {

    const dados = {

        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        mensagem: document.getElementById("mensagem").value

    };

    localStorage.setItem(
        "cadastroAluno",
        JSON.stringify(dados)
    );

}

window.addEventListener("load", function () {

    const dados = JSON.parse(
        localStorage.getItem("cadastroAluno")
    );

    if (!dados) return;

    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("email").value = dados.email || "";
    document.getElementById("telefone").value = dados.telefone || "";
    document.getElementById("mensagem").value = dados.mensagem || "";

    atualizarContador();

});
