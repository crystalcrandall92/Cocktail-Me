const router = require('express').Router();
const ourController = require('./createddrink-controller');

router.use('/createddrinks', ourController.createDrink)
router.use('/getdrinks', ourController.getDrink)

//router.use("/createddrinks", require('./createddrink-controller'))
router.use("/saveddrinks", require("./saveddrink-controller"))


module.exports = router;