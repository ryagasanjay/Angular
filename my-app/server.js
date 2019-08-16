var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./src/app/login'));


app.get('/', function(req, res) {
    res.send('Hello express');
});
app.listen(3000);
console.log(`Server running at localhost: 3000`);

var connection = getConnection();

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cegep2k19',
        database: 'mydb'
    })
}

app.get('/users', (req, res) => {
    // var user1 = { name: "sanjay", age: '25' };
    // var user2 = { name: "jeevan", age: '22' };
    // var user3 = { name: "jeevanp", age: '22' };

    // res.json([user1, user2]);
    const getUserQuery = "SELECT * FROM CUSTOMER";

    getConnection().query(getUserQuery, (err, rows, fields) => {
            // sending all the selected rows from the query
            res.json(rows);
        })
        // res.send("nodemon auto updates the server again now");
});

app.get('/users/:name', (req, res) => {
    console.log('Fetching user data for ' + req.params.name);
    const querystring = 'SELECT * FROM CUSTOMER WHERE name=?';
    getConnection().query(querystring, [req.params.name], (err, rows, fields) => {
        if (err) {
            console.log("Failed query for the transaction");
            res.sendStatus(500);
            return;
        }
        res.json(rows);
    });

    //res.end();
})

app.post('/postCustomer', (req, res) => {
    console.log('Trying to create a new user');
    console.log(req.body.age);
    console.log(req.body.name);

    const queryString = "INSERT INTO CUSTOMER (name, age) values(?,?)";
    getConnection().query(queryString, [req.body.name, req.body.age], (err, result, fields) => {
        if (err) {
            console.log('failed to insert new user');
            res.sendStatus(500);
            return;

        }
        console.log("Inserted a new user with name:", result.insertedId);
        res.end();
    })
    res.end();
});


app.get('/musician/:name', function(req, res) {

    //get musician.matt
    console.log(req.params.name);
    res.send('{"id":"1","name":"Matt","band":"BBQ Brawlers"}');

    connection.query('SELECT * from customer', function(err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0]);
    })

    connection.end();

    app.post('/submit', (req, res) => {

    });

});







// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello New York\n');
// }).listen(3001);
// console.log("Server running at localhost:3001");