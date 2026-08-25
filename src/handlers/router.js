function processarMensagem(texto) {

    const opcao = texto.trim();

    switch (opcao) {

        case "1":
            return "MORADOR";

        case "2":
            return "VAGA";

        case "3":
            return "NORMAS";

        case "4":
            return "PROCEDIMENTOS";

        case "5":
            return "PRESTADORES";

        default:
            return "MENU";
    }
}

module.exports = processarMensagem;