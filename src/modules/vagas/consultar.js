const vagas = {
    "82": {
        apartamento: "82",
        vaga: "15",
        bloco: "1"
    },

    "101": {
        apartamento: "101",
        vaga: "28",
        bloco: "2"
    }
};

function consultarVaga(pesquisa) {

    const busca = pesquisa.toString().trim().toLowerCase();

    const vagaEncontrada = Object.values(vagas).find((vaga) => {

        return (
            vaga.apartamento.toLowerCase() === busca ||
            vaga.vaga.toLowerCase() === busca
        );

    });

    return vagaEncontrada || null;
}

module.exports = consultarVaga;