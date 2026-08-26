const normas = [
    {
        palavras: ["mudança", "mudanças"],
        resposta: `📦 MUDANÇAS

As mudanças devem ser previamente comunicadas e autorizadas pela administração.

A entrada e saída das mudanças deve ser feita pelo elevador de serviço, respeitando sua capacidade, ou pela escada.

Horário previsto no Regulamento:
• Das 08:00 às 18:00
• Inclusive aos domingos e feriados.

Fonte: Regulamento Interno — Seção III, Mudanças e Entregas de Móveis.`
    },

    {
        palavras: ["visitante", "visita", "visitantes", "entregador", "entregadores"],
        resposta: `🚪 VISITANTES E ENTREGADORES

A entrada de pessoas no condomínio depende da autorização do morador que será visitado.

No caso de entregadores, a regra estabelece que eles devem permanecer até a portaria.

Fonte: Regulamento Interno — Seção IV, Segurança.`
    },

    {
        palavras: ["gás", "botijão", "botijão de gás", "explosivo", "inflamável", "tóxico"],
        resposta: `⚠️ GÁS E SUBSTÂNCIAS PERIGOSAS

O Regulamento Interno proíbe o uso de botijões de gás dentro dos apartamentos.

Também é proibido guardar, nos apartamentos ou em qualquer parte do condomínio, substâncias perigosas, como explosivos, inflamáveis e tóxicos.

Fonte: Regulamento Interno — Seção IV, Segurança.`
    },

    {
        palavras: ["vaso", "vasos", "antena", "antenas", "enfeite", "enfeites", "sacada", "sacadas", "peitoril", "janela", "janelas"],
        resposta: `🪟 JANELAS E SACADAS

É proibido colocar vasos, antenas, enfeites ou qualquer outro objeto sobre os peitoris das janelas e sacadas.

Fonte: Regulamento Interno — Seção IV, Segurança.`
    },

    {
        palavras: ["lixo", "coleta de lixo", "coleta"],
        resposta: `🗑️ COLETA DE LIXO

O Regulamento Interno estabelece regras para a coleta de lixo pelo pessoal de limpeza.

Aos domingos e feriados:

❌ NÃO HAVERÁ COLETA DE LIXO.

Fonte: Regulamento Interno — Seção V, Higiene e Limpeza.`
    },

    {
        palavras: ["salão", "salão de festas", "festa", "festas"],
        resposta: `🎉 SALÃO DE FESTAS

A utilização do salão de festas deve ser requisitada por escrito e em livro próprio ao sub-síndico do edifício ou zelador.

A solicitação deve ser feita com no mínimo 10 dias de antecedência, informando dia, horário e tipo de reunião.

Horários:
• Sábados e feriados: até 24:00
• Demais dias da semana: até 22:00

Condôminos em atraso com seus pagamentos ficam impedidos de utilizar o salão.

O requisitante deve permanecer no local durante o horário cedido.

Fonte: Regulamento Interno — Seção VI, Salão de Festas.`
    },

    {
        palavras: ["estacionamento", "garagem", "carro", "veículo", "veículos"],
        resposta: `🚗 ESTACIONAMENTO

O Regulamento Interno estabelece que é permitida a entrada de veículos dos próprios condôminos, na proporção de 01 veículo de passeio por apartamento, devidamente identificado.

É proibido:
• Ceder ou locar box de estacionamento para não moradores.
• Estacionar nas áreas de circulação e manobra.
• Lavar, lubrificar ou realizar serviços mecânicos nos veículos no estacionamento, salvo emergência.
• A circulação de crianças pelas áreas de estacionamento.

É permitido guardar motos e bicicletas na garagem, desde que dentro da vaga delimitada ao apartamento.

Fonte: Regulamento Interno — Seção VII, Estacionamento.`
    },

    {
        palavras: ["reforma", "obra", "obras", "reformar"],
        resposta: `🔨 REFORMAS

Pequenas reformas que não impliquem modificações de estrutura ou canalizações devem ser comunicadas por escrito à administração.

Quando a reforma provocar ruídos, o Regulamento estabelece horários específicos para sua execução:

• Dias úteis: das 08:00 às 18:00.
• Sábados: dentro do horário permitido pelo Regulamento.
• Domingos e feriados: não são permitidos trabalhos de reforma com ruído.

Intervenções nas canalizações de águas e esgotos dependem de aprovação prévia da administração e dos poderes públicos competentes.

Fonte: Regulamento Interno — Seção VIII, Reformas.`
    },

    {
        palavras: ["silêncio", "barulho", "som", "ruído", "ruidos", "barulhos"],
        resposta: `🔇 SILÊNCIO

Os condôminos e moradores devem evitar ruídos que possam incomodar os demais moradores.

Horário de silêncio:
• Domingo a sexta-feira e feriados: das 22:00 às 06:00 do dia seguinte.
• Sábados e vésperas de feriados: das 22:00 às 08:00 do dia seguinte.

Fonte: Regulamento Interno — Seção IX, Do Silêncio.`
    },

    {
        palavras: ["cartaz", "cartazes", "anúncio", "anúncios", "publicidade", "propaganda"],
        resposta: `📢 PUBLICIDADE

É proibido colocar anúncios, cartazes, inscrições ou outros meios de publicidade nas paredes, portas de entrada dos apartamentos, áreas de serviço, janelas ou outras dependências do condomínio quando visíveis das áreas comuns ou da parte exterior.

Fonte: Regulamento Interno — Disposições Gerais.`
    },

    {
        palavras: ["objeto", "objetos", "móvel", "móveis", "área comum", "áreas comuns"],
        resposta: `🚫 OBJETOS NAS ÁREAS COMUNS

É proibido depositar ou guardar, mesmo provisoriamente, móveis, objetos, aparelhos ou utensílios nas partes comuns do condomínio.

Fonte: Regulamento Interno — Disposições Gerais.`
    },

    {
        palavras: ["funcionário", "funcionários", "empregado", "empregados", "zelador"],
        resposta: `👷 FUNCIONÁRIOS DO CONDOMÍNIO

É proibido utilizar empregado do condomínio para serviços ou tarefas particulares durante o horário normal de trabalho.

O Regulamento também atribui ao zelador a fiscalização e o cumprimento das normas do condomínio.

Fonte: Regulamento Interno — Administração e Disposições Gerais.`
    },

    {
        palavras: ["multa", "multas", "penalidade", "penalidades", "infração", "infrações"],
        resposta: `⚖️ PENALIDADES

O Regulamento Interno estabelece que a infração de suas disposições poderá resultar em multa ao infrator.

Em caso de reincidência, o Regulamento prevê agravamento da penalidade.

Os casos não previstos no Regulamento serão resolvidos pela administração.

Fonte: Regulamento Interno — Seção XI, Penalidades.`
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