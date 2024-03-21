function criaQuadrado()
{
    event.preventDefault();

    var base = document.getElementById("base").value
    var altura = document.getElementById("altura").value

    quadrado = new Quadrado(base, altura)

    document.getElementById("area").innerHTML = quadrado.area()
}

function criaConta()
{
    var nome = document.getElementById("nome").value
    var banco = document.getElementById("banco").value
    var numero = document.getElementById("numero").value
    var saldo = document.getElementById("saldo").value

    if (document.querySelector('input[name="gender"]:checked')) {
        
    }
}

function Quadrado(x, y) {
    this.x = x
    this.y = y

    this.area = function() {
        return this.x * this.y
    }
}

function Conta(nome, banco, numero, saldo)
{
    this.nome = nome
    this.banco = banco
    this.numero = numero
    this.saldo = saldo

    function Corrente()
    {
        this.setSaldoEspecial = function (value) {
            this.saldoEspecial = value
        }

        this.getSaldoEspecial = function () {
            return this.saldoEspecial
        }
    }

    function Poupanca()
    {
        this.setJuros = function (value) {
            this.juros = value
        };

        this.getJuros = function () {
            return this.juros
        }

        this.setDataVencimento = function (data) {
            this.dataVencimento = data
        }

        this.getDataVencimento = function () {
            return this.dataVencimento
        }
    }
}