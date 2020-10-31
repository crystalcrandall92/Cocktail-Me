const router = require('express').Router()
var db = require("../models");
var passport = require("../config/passport");

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

router.post("/signup", (req, res) => {
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
    .then((user) => {
      res.cookie('someonescookie', user)
      res.status(201)
      res.send("Successfully created user")
      //res.redirect(307, "/saveddrinks");
      console.log("oh hey there")
    })
    .catch(err => {
      console.log(err, err.message)
      res.status(401).json(err);
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/user_data", (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router
