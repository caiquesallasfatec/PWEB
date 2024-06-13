module.exports = function(app) {
    app.get("/admin/adicionar_usuarios", function(req, res){
        res.render("admin/adicionar_usuario");
    });
}
