const express = require("express");
const router = express.Router();
const burgerMod = require("../models/burger.js");
const app = express();

/**
 * This route is for rendering any burger that has not yet been 
 * devoured on the left and the ones that were already devoured
 * on the right. Default route. Gets data from burger controller.
 */
router.get("/", (req, res) => {
    let callHB = x => {
        res.render("index", {
            burgerName: x
        });
    };
    burgerMod.nonEaten(callHB);    
});

/**
 * This route is for adding a new burger to DB.
 */
router.post("/submitBurger", (req, res) => {
    let inBurgerName = req.body.val1;
    if (inBurgerName) {
        burgerMod.addBurger(inBurgerName); 
        res.json({message: 'Burger Added!'});  
    }
});

/**
 * This route sets the devour value to true for
 * whatever button pressed.
 */
router.put("/devourBurger", (req, res) => {
    let buttonID = req.body.btnID;    
    burgerMod.devBurger(buttonID);
    res.json({message: 'Burger Added!'});
});

/**
 * This clears the burgers table from the database.
 */
router.get("/clear", (req, res) => {
    burgerMod.clearAll();
    res.redirect('/');
});

module.exports = router;   