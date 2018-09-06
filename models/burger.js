const orm = require('../config/orm');

let getAllFalse = function (cbIn){
   
    let getThemAll = () => {
        let x = orm.returnAll(printThem);
    };

    let printThem = (x) => {
        cbIn(x);
    };

    getThemAll();
};

let addNew = bName => {
   orm.addNew(bName);
};

let updateBurger = bID => {
    orm.updateBurger(bID);
};

let clearTable = () => {
    orm.clearTable();
};

module.exports = {
    nonEaten: getAllFalse,
    addBurger: addNew,
    devBurger: updateBurger,
    clearAll: clearTable
};