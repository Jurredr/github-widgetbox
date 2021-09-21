import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import skillsWidget from '../../src/widgets/skills'
import { getBoolean } from '../../src/utils'
import errorWidget from '../../src/widgets/error'

// Primary skills route
router.get('/', function (req: Request, res: Response) {
    const { names, includeNames } = req.query

    // Set the header's type to svg/xml
    res.setHeader('Content-Type', 'image/svg+xml')

    // Check if languages argument is not present
    if (names === undefined || names === null) {
        res.send(
            errorWidget('Skills', '-24%', 'Languages are undefined!', '-28%')
        )
        return
    }

    // Grab the Skills widget
    res.send(skillsWidget(String(names), getBoolean(String(includeNames))))
})

export default router
