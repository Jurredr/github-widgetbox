import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import skillsWidget from '../../src/widgets/skills'
import { getBoolean } from '../../src/utils'

// Main route
router.get('/', function (req: Request, res: Response) {
    const { languages, includeNames } = req.query

    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(skillsWidget(String(languages), getBoolean(String(includeNames))))
})

export default router
