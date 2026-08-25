const {
    setEstado,
    getEstado,
    limparEstado
} = require("../state/sessions");

async function processarMensagem(sock, msg) {

    const usuario = msg.key.remoteJid;

    const texto =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text;

    if (!texto) return;

    const estado = getEstado(usuario);

    console.log("Estado:", estado);

    // MENU PRINCIPAL
    if (estado === "MENU") {

        if (texto === "1") {

            setEstado(usuario, "CONSULTAR_MORADOR");

            await sock.sendMessage(usuario, {
                text: "🏢 Digite o nome ou o apartamento do morador."
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

        await sock.sendMessage(usuario, {
            text: `🔍 Você pesquisou: ${texto}

(A consulta será implementada na próxima etapa.)`
        });

        limparEstado(usuario);

        return;
    }

}

module.exports = processarMensagem;