const router = require('express').Router();

router.use("/api", require('./apiRoutes'))
router.use("/auth", require('./login-controller'))
router.use(require('./view-controller'))

module.exports = router;