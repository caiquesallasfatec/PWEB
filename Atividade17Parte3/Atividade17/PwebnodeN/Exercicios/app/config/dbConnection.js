const sql = require('mssql');

var connSqlServer = function() {
    const sqlConfig = {
        user: "BD2111029",
        password: "Fatec@123",
        server: "apolo",
        database: "BD",
        options: {
            encrypt: false,
            trustServerCertificate: true
        }            
    }

    return sql.connect(sqlConfig)
}

module.exports = function () {
    console.log()
    return connSqlServer
}
