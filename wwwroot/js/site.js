function validarNumero(valor) {
    // Tenta converter o valor para um número
    let numero = parseFloat(valor);

    // Verifica se o resultado é um número e não é NaN
    if (!isNaN(numero)) {
        // O valor é um número válido
        return true;
    } else {
        // O valor não é um número válido
        return false;
    }
}

// Exemplo de uso:
let valorProduto = float; // Substitua isso pelo valor que você quer validar
if (validarNumero(valorProduto)) {
    console.log("O valor é um número válido.");
} else {
    console.log("Por favor, insira um número válido.");
}
