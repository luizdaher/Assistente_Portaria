const normas = [
    {
        palavras: ["reforma", "obra", "obras"],
        resposta: `🔨 REFORMAS

As reformas que importarem em modificações de estrutura e instalações deverão ser comunicadas à administração.

Quando a reforma puder ser executada, os trabalhos poderão ocorrer:

• Dias úteis: das 08:00 às 18:00
• Sábados: das 09:00 às 16:00
• Domingos e feriados: não são permitidos trabalhos de reforma.

Fonte: Regulamento Interno — Seção VIII, Reformas.`
    },

    {
        palavras: ["silêncio", "barulho", "som", "ruído", "ruidos"],
        resposta: `🔇 SILÊNCIO

O Regulamento Interno estabelece horários destinados ao silêncio e determina que os condôminos evitem ruídos que possam incomodar os demais moradores.

• De domingo a sexta-feira e feriados: das 22:00 às 06:00 do dia seguinte.
• Aos sábados e vésperas de feriados: das 22:00 às 08:00 do dia seguinte.

Também existem regras específicas sobre aparelhos sonoros, instrumentos musicais e outros equipamentos que possam causar incômodo.

Fonte: Regulamento Interno — Seção IX, Do Silêncio.`
    },

    {
        palavras: ["salão", "festa", "festas"],
        resposta: `🎉 SALÃO DE FESTAS

O Regulamento Interno possui uma seção específica sobre a utilização do salão de festas.

A utilização deve ser previamente requisitada, observando as regras do condomínio, horários e condições estabelecidas no Regulamento Interno.

Fonte: Regulamento Interno — Seção VI, Salão de Festas.`
    },

    {
        palavras: ["estacionamento", "vaga", "carro", "veículo", "veiculos", "garagem"],
        resposta: `🚗 ESTACIONAMENTO

O Regulamento Interno possui uma seção específica sobre o estacionamento e estabelece regras para utilização das áreas destinadas aos veículos e outros objetos.

Para uma resposta específica sobre uma vaga ou situação de estacionamento, consulte a regra correspondente do Regulamento Interno.

Fonte: Regulamento Interno — Seção VII, Estacionamento.`
    },

    {
        palavras: ["entrega", "entregas", "mudança", "mudanças"],
        resposta: `📦 MUDANÇAS E ENTREGAS DE MÓVEIS

O Regulamento Interno estabelece regras para mudanças e entrega de móveis.

As mudanças devem ser previamente comunicadas e autorizadas pela administração, observando os horários e procedimentos previstos no Regulamento.

Fonte: Regulamento Interno — Seções II e III.`
    }
];


function consultarNorma(pesquisa) {

    const busca = pesquisa
        .toString()
        .trim()
        .toLowerCase();

    const normaEncontrada = normas.find((norma) => {

        return norma.palavras.some((palavra) =>
            busca.includes(palavra)
        );

    });

    return normaEncontrada || null;
}


module.exports = consultarNorma;