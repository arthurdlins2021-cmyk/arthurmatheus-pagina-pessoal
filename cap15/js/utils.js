// Exibe uma mensagem de erro em um campo
function mostrarErro(idErro, mensagem) {
    const erro = document.getElementById(idErro);

    erro.textContent = mensagem;
}

// Limpa a mensagem de erro
function limparErro(idErro) {
    const erro = document.getElementById(idErro);

    erro.textContent = "";
}

// Marca um campo como válido
function campoValido(campo) {
    campo.classList.remove("invalido");
    campo.classList.add("valido");
}

// Marca um campo como inválido
function campoInvalido(campo) {
    campo.classList.remove("valido");
    campo.classList.add("invalido");
}

// Remove qualquer marcação
function limparCampo(campo) {
    campo.classList.remove("valido");
    campo.classList.remove("invalido");
}

// Verifica se a idade é de pelo menos 16 anos
function possuiIdadeMinima(dataNascimento) {

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    return idade >= 16;
}

