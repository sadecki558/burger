const connection = require('./connection.js');

let selectAll = cb => {
    connection.query('SELECT * FROM burgers', (err, res) => {
        if (err) {
            throw err;
        } else {
            let usersRows = JSON.parse(JSON.stringify(res));
            cb(usersRows);
        }            
    });
};

let insertOne = bName => {
    connection.query(`INSERT INTO burgers (burger_name) VALUES ('${bName}')`, (err, res) => {
        if (err) throw err;             
    });
};

let updateOne = bID => {
   connection.query(`UPDATE burgers set ? where id = ${bID}`, [{ devoured: true }]);
};

let clearAll = () => {
    connection.query(`TRUNCATE burgers`);
 };

module.exports = {
    returnAll: selectAll,
    addNew: insertOne,
    updateBurger: updateOne,
    clearTable: clearAll
};