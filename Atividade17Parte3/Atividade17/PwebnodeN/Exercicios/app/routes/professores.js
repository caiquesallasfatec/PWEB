module.exports = function(app) {
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
                var connection = app.config.dbConnection;
                var pool = await connection()

                var profesoresModel = app.models.professorModel

                profesoresModel.getProfessores(pool, function (err, results) {
                    res.render('home/professores', {profs: results.recordset});
                });
            } catch (err) {
                console.log("ERRO: " + err)
            }            
        }

        getProfessores();
    });
}