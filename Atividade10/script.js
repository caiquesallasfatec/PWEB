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

console.log(maior(3213,51231,31122))
console.log(ordem(241, 21, -213))