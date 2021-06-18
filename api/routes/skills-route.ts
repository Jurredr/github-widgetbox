import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import skillsWidget from '../../src/widgets/skills'
import { getBoolean } from '../../src/utils'

// Primary skills route
router.get('/', function (req: Request, res: Response) {
    const { languages, includeNames } = req.query

    // Set the header's type to svg/xml
    res.setHeader('Content-Type', 'image/svg+xml')

    // Grab the Skills widget
    res.send(skillsWidget(String(languages), getBoolean(String(includeNames))))
})

export default router
