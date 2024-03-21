var aluno = {
    ra: "",
    nome: ""
}

function sendForm() {
    event.preventDefault();

    var ra   = document.getElementById("ra").value
    var nome = document.getElementById("nome").value

    criaAluno(ra, nome)
}

function criaAluno(Ra, Nome) {
    aluno.ra = Ra
    aluno.nome = Nome

    document.getElementById("aluno1").innerHTML = JSON.stringify(aluno)

    aluno["ra"] = Ra
    aluno["nome"] = Nome

    document.getElementById("aluno2").innerHTML = JSON.stringify(aluno)

    aluno = {
        ra: Ra,
        nome: Nome
    }

    document.getElementById("aluno3").innerHTML = JSON.stringify(aluno)
    
    return aluno
}