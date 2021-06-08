const express = require('express')
const router = express.Router()
const skillsRoute = require('./routes/skills-route.ts')

router.use('/skills', skillsRoute)

module.exports = router
