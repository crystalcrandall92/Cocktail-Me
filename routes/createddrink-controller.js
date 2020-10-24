var db = require("../models");

module.exports = function (app) {
    app.get("/api/createddrinks", function (req, res) {
        db.CreatedDrink.findAll({
        }).then(function (dbCreatedDrink) {
            res.json(dbCreatedDrink);
        });
    });

    app.get("/api/createddrinks/:id", function (req, res) {
        db.CreatedDrink.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbCreatedDrink) {
            res.json(dbCreatedDrink);
        });
    });

    app.post("/api/createddrinks", function (req, res) {
        db.CreatedDrink.create(req.body)
            .then(function (dbCreatedDrink) {
                res.json(dbCreatedDrink);
            });
    });

    app.delete("/api/createddrinks/:id", function (req, res) {
        db.CreatedDrink.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCreatedDrink) {
            res.json(dbCreatedDrink);
        });
    });
};