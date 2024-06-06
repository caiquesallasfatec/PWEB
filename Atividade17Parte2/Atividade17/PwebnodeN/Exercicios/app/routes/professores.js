var dbConnection = require('../config/dbConnection');

module.exports = function(app) {
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
                var pool = await dbConnection()

                const results = await pool.request().query('SELECT * FROM PROFESSORES');

                res.render('home/professores', {profs: results.recordset});
            } catch (err) {
                console.log("ERRO: " + err)
            }            
        }

        getProfessores();
    });
}