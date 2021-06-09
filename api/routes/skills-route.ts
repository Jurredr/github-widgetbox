import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import skillsWidget from '../../src/widgets/skills'

// Main route
router.get('/', function (req: Request, res: Response) {
    const { languages } = req.query

    res.setHeader('Content-Type', 'image/svg+xml')

    res.send(skillsWidget(String(languages)))
})

export default router
