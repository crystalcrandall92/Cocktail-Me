var db = require("../models");

module.exports = function (app) {
    app.get("/api/saveddrinks", function (req, res) {
        db.SavedDrink.findAll({
        }).then(function (dbSaveddrink) {
            res.json(dbSaveddrink);
        });
    });

    app.get("/api/saveddrinks/:id", function (req, res) {
        db.SavedDrink.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbSaveddrink) {
            res.json(dbSaveddrink);
        });
    });

    app.post("/api/saveddrinks", function (req, res) {
        db.SavedDrink.create(req.body)
            .then(function (dbSaveddrink) {
                res.json(dbSaveddrink);
            });
    });

    app.delete("/api/saveddrinks/:id", function (req, res) {
        db.SavedDrink.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbSaveddrink) {
            res.json(dbSaveddrink);
        });
    });
};