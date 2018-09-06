const mysql = require("mysql");

let connection = '';

if(process.env.JAWSDB_URL)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
else   
    connection = mysql.createConnection({ 
    host: "localhost",
    user: 'root',
    password: 'matt14961364',
    database: 'burgers_db'
});

let dbConnect = () => {
    connection.connect( err => {
        if (err) throw err;    
    });
};

module.exports = connection;