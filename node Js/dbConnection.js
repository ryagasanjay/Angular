var db = require('mysql');

var con = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cegep2k19',
    database: 'mydb'

});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to Database. Performing next steps');
    var sql = 'CREATE TABLE customer(name VARCHAR(255),age VARCHAR(255))';
    con.query(sql, function(error, result) {
        if (error) throw error;
        console.log('table created');
    });
});

//establish a connection and create a database
// con.connect(function(err) {

//     if (err) throw err;
//     console.log('Connected to Database');
//     con.query('CREATE DATABASE mydb', function(error, result) {
//         if (error) throw error;
//         console.log("database created");

//     });
// });
