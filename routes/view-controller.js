// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const router = require('express').Router();

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.

router.get('/', function(req, res) {
  res.render('signup')
})

router.get('/login', function(req, res) {
  res.render('login')
})

router.get('/signup', function(req, res) {
  res.render('signup')
})

router.get('/members', function(req, res) {
  res.render('members')
})

router.get('/drinks', function(req, res) {
  res.render('drinks')
})

module.exports = router;