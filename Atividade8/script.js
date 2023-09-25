const COMPUTER = "machine-point";
const USER = "user-point";

const CARDS = [
    "paper",
    "rock",
    "sisor"
]

function paper() {
    game(0)

}

function rock() {
    game(1)

}

function sisor() {
    game(2)

}

function game(user) {
    var computer = generateAnswer();
    console.log(computer);
    displayImage(CARDS[computer]);
    getWinner(user, computer);
}

function generateAnswer()
{
    return Math.floor(Math.random() * 3);
}

function getWinner(user, computer)
{
    document.getElementById("result").innerHTML = "Resultado: Empate"

    if (user == computer) {
        return;
    }

    if (user == 0) {
        if (computer == 0) {
            return;
        }

        if (computer == 1) {
            addPoint(USER);
        }
        
        addPoint(COMPUTER);
        return;
    }

    if (user == 1) {
        if (computer == 0) {
            addPoint(COMPUTER);
            return;
        }

        if (computer == 1) {
            return;
        }
        
        addPoint(USER);
        return;
    }

    if (computer == 0) {
        addPoint(USER);
        return;
    }

    if (computer == 1) {
        addPoint(COMPUTER);
        return;
    }
    
    return;
}

function addPoint(type) {
    var value = parseInt(document.getElementById(type).innerHTML);

    value++;

    document.getElementById(type).innerHTML = value;

    if (type == "user-point") {
        document.getElementById("result").innerHTML = "Resultado: Venceu"
        return
    }

    document.getElementById("result").innerHTML = "Resultado: Perdeu"
}

function displayImage(card)
{
    var image = document.getElementById("answer");

    image.src = "assets/" + card + ".png"
}
