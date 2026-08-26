const {
    setEstado,
    getEstado,
    limparEstado
} = require("../state/sessions");

const consultarMorador = require("../modules/moradores/consultar");
const consultarVaga = require("../modules/vagas/consultar");
const consultarNorma = require("../modules/normas do condominio/consultar");

async function processarMensagem(sock, msg) {

    const usuario = msg.key.remoteJid;

    const texto =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text;

    if (!texto) return;

    const estado = getEstado(usuario);

    console.log("Estado:", estado);
    console.log("Texto:", texto);

    // MENU PRINCIPAL
    if (estado === "MENU") {

        if (texto === "1") {

            setEstado(usuario, "CONSULTAR_MORADOR");

            await sock.sendMessage(usuario, {
                text: "🏢 Digite o nome ou o apartamento do morador."
            });

            return;
        }

        if (texto === "2") {

            setEstado(usuario, "CONSULTAR_VAGA");

            await sock.sendMessage(usuario, {
                text: "🚗 Digite o número do apartamento ou da vaga."
            });

            return;
        }
        if (texto === "3") {

    setEstado(usuario, "CONSULTAR_NORMA");

    await sock.sendMessage(usuario, {
        text: "📚 Qual norma do condomínio você deseja consultar?"
    });

    return;
}

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

    // CONSULTAR MORADOR
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

    // CONSULTAR VAGA
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

    // CONSULTAR NORMA
if (estado === "CONSULTAR_NORMA") {

    const norma = consultarNorma(texto);

    if (!norma) {

        await sock.sendMessage(usuario, {
            text: `❌ Não encontrei uma norma relacionada a: ${texto}

Tente perguntar sobre reformas, silêncio, salão de festas, estacionamento ou mudanças.`
        });

        return;
    }

    await sock.sendMessage(usuario, {
        text: norma.resposta
    });

    limparEstado(usuario);

    return;
}
}

module.exports = processarMensagem;