var ages = [];
var genders = [];
var opnions = []


function responder()
{
    event.preventDefault();

    var age    = parseInt(document.getElementById("age").value);
    var gender = parseInt(document.querySelector('input[name="gender"]:checked').value);
    var opnion = parseInt(document.querySelector('input[name="opnion"]:checked').value);  
    
    
    ages.push(age);
    genders.push(gender);
    opnions.push(opnion);

    console.log(ages, genders, opnions);

    document.getElementById("formulario").reset();

}

function gerarRelatorio()
{
    var ageMedia   = calculateMedia(ages);
    var olderAge   =   Math.max.apply(Math, ages);
    var youngerAge =   Math.min.apply(Math, ages);

    var countWorstOpnions   = countValue(opnions, 1);
    var countGoodOpnions    = countValue(opnions, 3);
    var countGreatOpnions   = countValue(opnions, 4);
    var totalOpnions        = opnions.length;

    var percentegeGreatOpnions = calculatePercentage(totalOpnions, countGreatOpnions);
    var percentegeGoodOpnions  = calculatePercentage(totalOpnions, countGoodOpnions);

    var countMen = countValue(genders, 1);
    var countWoman = countValue(genders, 2);

    
     console.log(" Média de idades:........................", ageMedia); 
     console.log(" Pessoa mais velha:......................", olderAge); 
     console.log(" Pessoa mais nova:.......................", youngerAge); 
     console.log(" Quantidade de votos péssimos:...........", countWorstOpnions);  
     console.log(" Percentual de votos ótimos:.............", percentegeGreatOpnions); 
     console.log(" Percentual de votos Bons:...............", percentegeGoodOpnions); 
     console.log(" Quantidade de homens que responderam:...", countMen); 
     console.log(" Quantidade de mulheres que responderam:.", countWoman); 
     

}

function calculateMedia(arr) 
{
    if (arr.length == 0) {
        return 0;
    }

    return arr.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }, 0) / arr.length;
}

function calculatePercentage(total, value)
{
    if (total == 0) {
        return 0;
    }

    return value * 100 / total;
}

function countValue(arr, value)
{
    return arr.filter(x => x==value).length
}