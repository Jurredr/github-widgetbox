import { Request, Response } from "express"

const express = require('express')
const router = express.Router()

const skillsWidget = require('../../src/widgets/skills.ts')

// Main route
router.get('/', function (req: Request, res: Response) {
    const { languages } = req.query

    res.setHeader("Content-Type", "image/svg+xml")
    res.send(skillsWidget(languages))
})

module.exports = router
