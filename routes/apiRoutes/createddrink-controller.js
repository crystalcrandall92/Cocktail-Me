const router = require('express').Router()
var db = require("../../models");

router.get("/", function (req, res) {
    db.CreatedDrink.findAll({
    }).then(function (dbCreatedDrink) {
        res.json(dbCreatedDrink);
    });
});

router.get("/:id", function (req, res) {
    db.CreatedDrink.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbCreatedDrink) {
        res.json(dbCreatedDrink);
    });
});

router.post("/", function (req, res) {
    db.CreatedDrink.create(req.body)
        .then(function (dbCreatedDrink) {
            res.json(dbCreatedDrink);
        });
});

router.delete("/:id", function (req, res) {
    db.CreatedDrink.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbCreatedDrink) {
        res.json(dbCreatedDrink);
    });
});

module.exports = router;
