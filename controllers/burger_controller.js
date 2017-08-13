var express = require('express');
// Requiring our models
var db = require("../models");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.BurgerV2.findAll({}).then(function(data) {
        // We have access to the todos as an argument inside of the callback function
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    db.BurgerV2.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function() {
        res.redirect("/");
    });
});

router.post("/update", function (req, res) {
    var burger_id = "id = " + req.body.burger_id;
    console.log("Burger ID: ", burger_id);
    db.BurgerV2.update({
        burger_name: req.body.burger_name,
        devoured: parseInt(req.body.devoured)
    }, {
        where: {
            id: parseInt(req.body.burger_id)
        }
    })
        .then(function(data) {
            res.redirect("/");
            console.log('-------- SQL Results: ' + JSON.stringify(data, null, 2));
        });

});

// Export routes for server.js to use.
module.exports = router;