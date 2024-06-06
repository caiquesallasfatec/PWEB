var http = require('http');
var fs = require('fs');

var server = http.createServer( function (req,res) {
    var opcao = req.url;

    switch (opcao) {
        case '/historia':
            file = './historia.html'
            break
        case '/cursos':
            file = './cursos.html'
            break
        case '/professores':
            file = './professores.html'
            break
        default:
            file = './fatec.html'
    }

    content = fs.readFileSync(file).toString();

    res.end(content)
});

server.listen(3000);