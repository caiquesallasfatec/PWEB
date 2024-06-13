function exibeMensagemNaOrdem(mensagem, callback) {
    console.log(mensagem)
    callback()
}

exibeMensagemNaOrdem('essa é a primeira mensagem', function () {
    console.log('essa é a segunda mensagem')
})