function maior(um, dois, tres) {
    numeros = [um, dois, tres]

    result = numeros.reduce((a, b) => {
        return a > b ? a : b
    })

    return result
}

function ordem(um, dois, tres) {
    numeros = [um, dois, tres]

    return numeros.sort((a, b) => {
        return a - b
    })
}

function palindromo(str) {
    upper = str.toUpperCase()

    rev_str = upper.split("").reverse().join("")

    if (upper == rev_str) {
        return true
    }

    return false
}

function eTriangulo(a, b, c) {
    if (Math.abs(b - c) < a && a < (b + c) && Math.abs(a - c) < b && b < (a + c) && Math.abs(a - b) < c && c < (a + b)) {
        if (a != b && b != c) {
            return "Sim, escaleno"
        }
    
        if ((a != b && b == c )|| (a == b && b != c)) {
            return "Sim, isósceles"
        }
    
        return "Sim, equilatero"
    }


    return "Não"
   
}

console.log(maior(3213,51231,31122))
console.log(ordem(241, 21, -213))
console.log("Caique é palidromo? " + palindromo("Caique"))
console.log("Ana é palidromo? " + palindromo("Ana"))
console.log("é triangulo: " + eTriangulo(5, 5, 5))
console.log("é triangulo: " + eTriangulo(1, 10, 9))
