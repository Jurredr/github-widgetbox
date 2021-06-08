import { Request, Response } from "express"

const express = require('express')
const router = express.Router()

// Main route
router.get('/', function (req: Request, res: Response) {
    res.setHeader("Content-Type", "image/svg+xml")
    const { username, languages, tools, } = req.query
    res.send('Wiki home page')
})

// About page route.
router.get('/about', function (req: Request, res: Response) {
    res.send('About this wiki')
})

module.exports = router
