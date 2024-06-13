module.exports = function(app){
    app.get('/informacao/professores/detalhaprofessor', function(req,res){
   
         async function getProfessoresID() {
             try {
                 var connection = app.config.dbConnection;
   
                 const pool = await connection();
   
                 var profesoresModel = app.models.professorModel

                 profesoresModel.getProfessor(pool, function (err, results) {
                     res.render('home/detalhaprofessor', {profs: results.recordset});
                 });
   
             } catch (err) {
                 console.log(err)
             }
         } 
   
     getProfessoresID();
     });
  }