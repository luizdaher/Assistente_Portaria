const {
    setEstado,
    getEstado,
    limparEstado
} = require("../state/sessions");

const consultarMorador = require("../modules/moradores/consultar");
const consultarVaga = require("../modules/vagas/consultar");
const consultarNorma = require("../modules/normas do condominio/consultar");
const consultarProcedimento = require("../modules/manual de procedimentos/consultar");
const consultarContato = require("../modules/contatos/consultar");


async function processarMensagem(sock, msg) {

    const usuario = msg.key.remoteJid;

    const texto =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text;

    if (!texto) return;

    const estado = getEstado(usuario);

    console.log("Estado:", estado);
    console.log("Texto:", texto);


    // =========================
    // MENU PRINCIPAL
    // =========================

    if (estado === "MENU") {

        // 1 - CONSULTAR MORADOR
        if (texto === "1") {

            setEstado(usuario, "CONSULTAR_MORADOR");

            await sock.sendMessage(usuario, {
                text: "🏢 Digite o nome ou o apartamento do morador."
            });

            return;
        }


        // 2 - CONSULTAR VAGA
        if (texto === "2") {

            setEstado(usuario, "CONSULTAR_VAGA");

            await sock.sendMessage(usuario, {
                text: "🚗 Digite o número do apartamento ou da vaga."
            });

            return;
        }


        // 3 - NORMAS DO CONDOMÍNIO
        if (texto === "3") {

            setEstado(usuario, "CONSULTAR_NORMA");

            await sock.sendMessage(usuario, {
                text: "📚 Qual norma do condomínio você deseja consultar?"
            });

            return;
        }


        // 4 - MANUAL DE PROCEDIMENTOS
        if (texto === "4") {

            setEstado(usuario, "CONSULTAR_PROCEDIMENTO");

            await sock.sendMessage(usuario, {
                text: "📋 Qual procedimento da Portaria ou Ronda você deseja consultar?"
            });

            return;
        }


        // 5 - CONTATOS
        if (texto === "5") {

            setEstado(usuario, "CONSULTAR_CONTATO");

            await sock.sendMessage(usuario, {
                text: `📞 Qual contato você deseja consultar?

Exemplos:
🛗 Elevador
📹 Fabrisat
💧 Sabesp
⚡ Enel
🔥 Comgás
💧 Bombas
🏢 Administradora
👔 Síndico`
            });

            return;
        }


        // MENU PRINCIPAL
        const menu = `Olá! 👋

Sou o Assistente do Condomínio.

Como posso ajudar?

1️⃣ Consultar Morador
2️⃣ Consultar Vaga
3️⃣ Normas do Condomínio
4️⃣ Manual de Procedimentos
5️⃣ Contato dos prestadores de serviço`;

        await sock.sendMessage(usuario, {
            text: menu
        });

        return;
    }


    // =========================
    // CONSULTAR MORADOR
    // =========================

    if (estado === "CONSULTAR_MORADOR") {

        const morador = consultarMorador(texto);

        if (!morador) {

            await sock.sendMessage(usuario, {
                text: `❌ Não encontrei nenhum morador para: ${texto}

Digite outro nome ou apartamento.`
            });

            return;
        }

        await sock.sendMessage(usuario, {
            text: `👤 Morador encontrado!

Nome: ${morador.nome}
Apartamento: ${morador.apartamento}
Bloco: ${morador.bloco}`
        });

        limparEstado(usuario);

        return;
    }


    // =========================
    // CONSULTAR VAGA
    // =========================

    if (estado === "CONSULTAR_VAGA") {

        const vaga = consultarVaga(texto);

        if (!vaga) {

            await sock.sendMessage(usuario, {
                text: `❌ Não encontrei nenhuma vaga para: ${texto}

Digite outro apartamento ou número de vaga.`
            });

            return;
        }

        await sock.sendMessage(usuario, {
            text: `🚗 Vaga encontrada!

Apartamento: ${vaga.apartamento}
Vaga: ${vaga.vaga}
Bloco: ${vaga.bloco}`
        });

        limparEstado(usuario);

        return;
    }


    // =========================
    // CONSULTAR NORMA
    // =========================

    if (estado === "CONSULTAR_NORMA") {

        const norma = consultarNorma(texto);

        if (!norma) {

            await sock.sendMessage(usuario, {
                text: `❌ Não encontrei uma norma relacionada a:

"${texto}"

Tente perguntar de outra forma.`
            });

            return;
        }

        await sock.sendMessage(usuario, {
            text: norma.resposta
        });

        limparEstado(usuario);

        return;
    }


    // =========================
    // CONSULTAR PROCEDIMENTO
    // =========================

    if (estado === "CONSULTAR_PROCEDIMENTO") {

        const procedimento = consultarProcedimento(texto);

        if (!procedimento) {

            await sock.sendMessage(usuario, {
                text: `❌ Não encontrei um procedimento relacionado a:

"${texto}"

Tente perguntar de outra forma, por exemplo:

• Como liberar um visitante?
• O que fazer se faltar energia?
• Como funciona uma mudança?
• O que significa QAP?
• Como registrar uma ocorrência?`
            });

            return;
        }

        await sock.sendMessage(usuario, {
            text: procedimento.resposta
        });

        limparEstado(usuario);

        return;
    }


    // =========================
    // CONSULTAR CONTATO
    // =========================

    if (estado === "CONSULTAR_CONTATO") {

        const contato = consultarContato(texto);

        if (!contato) {

            await sock.sendMessage(usuario, {
                text: `❌ Não encontrei um contato relacionado a:

"${texto}"

Tente consultar, por exemplo:

• Elevador
• Fabrisat
• Enel
• Sabesp
• Comgás
• Bombas
• Administradora
• Síndico`
            });

            return;
        }

        await sock.sendMessage(usuario, {
            text: contato.resposta
        });

        limparEstado(usuario);

        return;
    }

}


module.exports = processarMensagem;