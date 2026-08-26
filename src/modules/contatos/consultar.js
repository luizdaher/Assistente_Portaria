const contatos = [
    {
        palavras: [
            "elevador",
            "elevadores",
            "total elevadores",
            "telefone elevador",
            "contato elevador"
        ],
        resposta: `🛗 TOTAL ELEVADORES

Telefone: (11) 9.9976-0815

Quantidade de elevadores: 11.`
    },

    {
        palavras: [
            "bombas",
            "bomba",
            "bombas ipiranga",
            "bomba d'água",
            "bomba de agua"
        ],
        resposta: `💧 BOMBAS IPIRANGA

Telefone: (11) 2061-2000`
    },

    {
        palavras: [
            "enel",
            "energia",
            "energia elétrica",
            "energia eletrica",
            "luz",
            "falta de energia"
        ],
        resposta: `⚡ ENEL — ENERGIA ELÉTRICA

Telefone: 0800 72 72 120`
    },

    {
        palavras: [
            "sabesp",
            "água",
            "agua",
            "falta de água",
            "falta de agua"
        ],
        resposta: `💧 SABESP — ÁGUA

Telefone: 0800 055 0195`
    },

    {
        palavras: [
            "comgas",
            "comgás",
            "gás",
            "gas",
            "vazamento de gás",
            "vazamento de gas"
        ],
        resposta: `🔥 COMGÁS — GÁS

Telefone: 08000 110 197`
    },

    {
        palavras: [
            "fabrisat",
            "fabrisat marcelo",
            "marcelo",
            "portão",
            "portao",
            "interfone",
            "câmeras",
            "cameras"
        ],
        resposta: `📹 FABRISAT — PORTÕES, INTERFONE E CÂMERAS

Marcelo:
📞 (11) 9.9433-5693

Plantão:
📞 (11) 9.9114-7584`
    },

    {
        palavras: [
            "fabrisat plantão",
            "fabrisat plantao",
            "plantão fabrisat",
            "plantao fabrisat"
        ],
        resposta: `📹 FABRISAT — PLANTÃO

Portões, interfone e câmeras.

📞 (11) 9.9114-7584`
    },

    {
        palavras: [
            "administradora",
            "administradora delomo",
            "delomo",
            "delomo monteiro",
            "delomo & monteiro"
        ],
        resposta: `🏢 DELOMO & MONTEIRO — ADMINISTRADORA

Telefone:
📞 (11) 2082-9898`
    },

    {
        palavras: [
            "síndico",
            "sindico",
            "andre",
            "andré",
            "andré luiz negre",
            "andre luiz negre"
        ],
        resposta: `👔 SÍNDICO — ANDRÉ LUIZ NEGRE

Telefone:
📞 (11) 9.9813-7154`
    }
];


function normalizar(texto) {
    return texto
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function consultar(texto) {

    const busca = normalizar(texto);

    for (const contato of contatos) {

        for (const palavra of contato.palavras) {

            if (busca.includes(normalizar(palavra))) {
                return contato;
            }

        }

    }

    return null;
}


module.exports = consultar;