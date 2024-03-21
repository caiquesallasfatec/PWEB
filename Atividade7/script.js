function calculaMedia() {
    var nome, notas = []
    nome = prompt("Qual é o seu nome?");
    
    for (var i = 0; i < 3; i++) {
        notas[i] = parseFloat(prompt("Informe o valor da nota " + (i + 1)))
    }
    
    median = notas.reduce((value, a) => {
        return value + a;
    }) / i
    
    alert("A média é: " +  median.toFixed(2))
}

function calculaOperacoes() {
    var numeroUm, numeroDois

    numeroUm   = parseFloat(prompt("Informe um numero"))
    numeroDois = parseFloat(prompt("Informe outro numero"))

    alert("O valor da soma é de: " + (numeroUm + numeroDois)) 
    alert("O valor da subtração é de: " + (numeroUm - numeroDois)) 
    alert("O valor do produto é de: " + (numeroUm * numeroDois)) 
    alert("O valor da divisão é de: " + (numeroUm / numeroDois)) 
    alert("O valor do resto é de: " + (numeroUm % numeroDois)) 
    
}