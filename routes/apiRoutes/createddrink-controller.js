const router = require('express').Router()
var db = require("../../models");

const createDrink = (req, res, next) => {
    console.log(req.user)
    const drinkObj = { ...req.body, userId: req.user.id }
    db.CreatedDrink.create(drinkObj)
        .then(function (dbCreatedDrink) {
            res.json(dbCreatedDrink);
        });
}

const getDrink = (req, res, next) => { 
    db.CreatedDrink.findAll( {
        where:{ 
            userId: req.user.id
        }
    })
        .then(function (allDrinks) {
            console.log("")
            res.json(allDrinks);
        });
}

// router.get("/", function (req, res) {
//     db.CreatedDrink.findAll({
//     }).then(function (dbCreatedDrink) {
//         res.json(dbCreatedDrink);
//     });
// });

// router.get("/:id", function (req, res) {
//     db.CreatedDrink.findOne({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbCreatedDrink) {
//         res.json(dbCreatedDrink);
//     });
// });

// router.post("/createddrinks", function (req, res) {
//     console.log("hi")
//     db.CreatedDrink.create(req.body)
//         .then(function (dbCreatedDrink) {
//             res.json(dbCreatedDrink);
//         });
// });

// router.delete("/:id", function (req, res) {
//     db.CreatedDrink.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbCreatedDrink) {
//         res.json(dbCreatedDrink);
//     });
// });

module.exports = {
    createDrink: createDrink,
    getDrink: getDrink
}
