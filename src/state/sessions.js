const sessoes = {};

function setEstado(usuario, estado) {
    sessoes[usuario] = estado;
}

function getEstado(usuario) {
    return sessoes[usuario] || "MENU";
}

function limparEstado(usuario) {
    delete sessoes[usuario];
}

module.exports = {
    setEstado,
    getEstado,
    limparEstado
};