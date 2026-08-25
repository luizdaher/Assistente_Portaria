const processarMensagem = require("../handlers/router");
const qrcode = require("qrcode-terminal");
const makeWASocket = require("@whiskeysockets/baileys").default;
const {
    useMultiFileAuthState,
    DisconnectReason
} = require("@whiskeysockets/baileys");

const P = require("pino");

async function iniciar() {

    console.log("INICIANDO...");

    const { state, saveCreds } = await useMultiFileAuthState("auth");

    console.log("AUTH OK");

    const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    browser: ["Assistente Condomínio", "Windows", "1.0.0"]
});

    console.log("SOCKET CRIADO");

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("messages.upsert", async ({ messages }) => {

    const msg = messages[0];

    if (!msg.message) return;
    if (msg.key.fromMe) return;

    const texto =
        msg.message.conversation ||
        msg.message.extendedTextMessage?.text;

    if (!texto) return;

    console.log("Mensagem recebida:", texto);

    const menu = `Olá! 👋

Sou o Assistente do Condomínio.

Como posso ajudar?

1️⃣ Consultar Morador
2️⃣ Consultar Vaga
3️⃣ Normas do Condomínio
4️⃣ Manual de Procedimentos
5️⃣ Contato dos prestadores de serviço`;

    await sock.sendMessage(msg.key.remoteJid, {
        text: menu
    });

});
    sock.ev.on("connection.update", (update) => {

        console.log(update);

        const { connection, qr, lastDisconnect } = update;

        if (qr) {
            console.log("ESCANEIE O QR CODE:");
            qrcode.generate(qr, { small: true });
        }

        if (connection === "open") {
            console.log("✅ CONECTADO!");
        }

        if (connection === "close") {

            console.log("DESCONECTOU");

            const shouldReconnect =
                lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;

            if (shouldReconnect) {
                console.log("REINICIANDO...");
                iniciar();
            }
        }

    });

}

module.exports = iniciar;