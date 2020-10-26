const router = require('express').Router();

router.use("/createddrinks", require('./createddrink-controller'))
router.use("/saveddrinks", require("./saveddrink-controller"))

module.exports = router;