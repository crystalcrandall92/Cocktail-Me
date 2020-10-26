const router = require('express').Router()
var db = require("../../models");


router.get("/", function (req, res) {
    db.SavedDrink.findAll({
    }).then(function (dbSaveddrink) {
        res.json(dbSaveddrink);
    });
});

router.get("/:id", function (req, res) {
    db.SavedDrink.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbSaveddrink) {
        res.json(dbSaveddrink);
    });
});

router.post("/", function (req, res) {
    db.SavedDrink.create(req.body)
        .then(function (dbSaveddrink) {
            res.json(dbSaveddrink);
        });
});

router.delete("/:id", function (req, res) {
    db.SavedDrink.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbSaveddrink) {
        res.json(dbSaveddrink);
    });
});

module.exports = router