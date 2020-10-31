const router = require('express').Router();
const isAuthenticated = require('../config/middleware/isAuthenticated')

router.use("/api", isAuthenticated, require('./apiRoutes'))
router.use("/auth", require('./login-controller'))
router.use(require('./view-controller'))

module.exports = router;