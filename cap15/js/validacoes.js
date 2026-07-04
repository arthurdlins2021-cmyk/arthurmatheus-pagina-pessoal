// ===============================
// VALIDAÇÃO DO NOME
// ===============================

function validarNome() {

    const nome = document.getElementById("nome");

    if (nome.value.trim().length < 3) {

        mostrarErro("erroNome", "O nome deve possuir pelo menos 3 caracteres.");
        campoInvalido(nome);

        return false;
    }

    limparErro("erroNome");
    campoValido(nome);

    return true;
}

// ===============================
// VALIDAÇÃO DO E-MAIL
// ===============================

function validarEmail() {

    const email = document.getElementById("email");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value.trim())) {

        mostrarErro("erroEmail", "Digite um e-mail válido.");
        campoInvalido(email);

        return false;
    }

    limparErro("erroEmail");
    campoValido(email);

    return true;
}

// ===============================
// VALIDAÇÃO DO TELEFONE
// ===============================

function validarTelefone() {

    const telefone = document.getElementById("telefone");

    const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    if (!regex.test(telefone.value)) {

        mostrarErro("erroTelefone", "Formato esperado: (82) 99999-9999");
        campoInvalido(telefone);

        return false;
    }

    limparErro("erroTelefone");
    campoValido(telefone);

    return true;
}

// ===============================
// VALIDAÇÃO DA DATA DE NASCIMENTO
// ===============================

function validarDataNascimento() {

    const data = document.getElementById("dataNascimento");

    if (!possuiIdadeMinima(data.value)) {

        mostrarErro("erroData", "O aluno deve possuir pelo menos 16 anos.");
        campoInvalido(data);

        return false;
    }

    limparErro("erroData");
    campoValido(data);

    return true;
}

    id="j3m8vn"

// ===============================
// VALIDAÇÃO DO CURSO
// ===============================

function validarCurso() {

    const curso = document.getElementById("curso");

    if (curso.value === "") {

        mostrarErro("erroCurso", "Selecione um curso.");
        campoInvalido(curso);

        return false;
    }

    limparErro("erroCurso");
    campoValido(curso);

    return true;
}

// ===============================
// VALIDAÇÃO DO TURNO
// ===============================

function validarTurno() {

    const turnos = document.getElementsByName("turno");

    let selecionado = false;

    for (let turno of turnos) {
        if (turno.checked) {
            selecionado = true;
            break;
        }
    }

    if (!selecionado) {
        mostrarErro("erroTurno", "Selecione um turno.");
        return false;
    }

    limparErro("erroTurno");
    return true;
}

// ===============================
// VALIDAÇÃO DAS ÁREAS DE INTERESSE
// ===============================

function validarInteresses() {

    const interesses = document.getElementsByName("interesse");

    let quantidade = 0;

    for (let interesse of interesses) {
        if (interesse.checked) {
            quantidade++;
        }
    }

    if (quantidade < 2) {

        mostrarErro(
            "erroInteresses",
            "Selecione pelo menos duas áreas de interesse."
        );

        return false;
    }

    limparErro("erroInteresses");

    return true;
}

// ===============================
// VALIDAÇÃO DA SENHA
// ===============================

function validarSenha() {

    const senha = document.getElementById("senha");

    const regex =
        /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(senha.value)) {

        mostrarErro(
            "erroSenha",
            "A senha deve possuir no mínimo 8 caracteres, uma letra maiúscula e um número."
        );

        campoInvalido(senha);

        return false;
    }

    limparErro("erroSenha");
    campoValido(senha);

    return true;
}

// ===============================
// CONFIRMAR SENHA
// ===============================

function validarConfirmarSenha() {

    const senha =
        document.getElementById("senha");

    const confirmar =
        document.getElementById("confirmarSenha");

    if (senha.value !== confirmar.value) {

        mostrarErro(
            "erroConfirmarSenha",
            "As senhas não coincidem."
        );

        campoInvalido(confirmar);

        return false;
    }

    limparErro("erroConfirmarSenha");
    campoValido(confirmar);

    return true;
}


// ===============================
// VALIDAÇÃO DA MENSAGEM
// ===============================

function validarMensagem() {

    const mensagem = document.getElementById("mensagem");

    const texto = mensagem.value.trim();

    if (texto.length < 50 || texto.length > 500) {

        mostrarErro(
            "erroMensagem",
            "A mensagem deve conter entre 50 e 500 caracteres."
        );

        campoInvalido(mensagem);

        return false;
    }

    limparErro("erroMensagem");
    campoValido(mensagem);

    return true;
}

// ===============================
// VALIDAÇÃO DA FOTO
// ===============================

function validarFoto() {

    const foto = document.getElementById("foto");

    if (foto.files.length === 0) {
        limparErro("erroFoto");
        return true;
    }

    const arquivo = foto.files[0];

    const tiposPermitidos = [
        "image/jpeg",
        "image/png"
    ];

    if (!tiposPermitidos.includes(arquivo.type)) {

        mostrarErro(
            "erroFoto",
            "Envie apenas imagens JPG ou PNG."
        );

        return false;
    }

    if (arquivo.size > 2 * 1024 * 1024) {

        mostrarErro(
            "erroFoto",
            "A imagem deve ter no máximo 2 MB."
        );

        return false;
    }

    limparErro("erroFoto");

    return true;
}

// ===============================
// VALIDAÇÃO DOS TERMOS
// ===============================

function validarTermos() {

    const termos = document.getElementById("termos");

    if (!termos.checked) {

        mostrarErro(
            "erroTermos",
            "Você deve aceitar os termos."
        );

        return false;
    }

    limparErro("erroTermos");

    return true;
}

// ===============================
// VALIDAÇÃO GERAL
// ===============================

function validarFormulario() {

    return (

        validarNome() &&
        validarEmail() &&
        validarTelefone() &&
        validarDataNascimento() &&
        validarCurso() &&
        validarTurno() &&
        validarInteresses() &&
        validarSenha() &&
        validarConfirmarSenha() &&
        validarMensagem() &&
        validarFoto() &&
        validarTermos()

    );

}

