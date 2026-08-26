const moradores = {
    "82": {
        nome: "Morador Teste",
        apartamento: "82",
        bloco: "1"
    },

    "101": {
        nome: "Moradora Teste",
        apartamento: "101",
        bloco: "2"
    }
};

function consultarMorador(pesquisa) {

    const busca = pesquisa.toString().trim().toLowerCase();

    const moradorEncontrado = Object.values(moradores).find((morador) => {

        return (
            morador.apartamento.toLowerCase() === busca ||
            morador.nome.toLowerCase().includes(busca)
        );

    });

    return moradorEncontrado || null;
}

module.exports = consultarMorador;