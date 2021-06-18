import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import profileWidget from '../../src/widgets/profile'
import errorWidget from '../../src/widgets/error'

// Primary profile route
router.get('/', function (req: Request, res: Response) {
    const { username } = req.query

    res.setHeader('Content-Type', 'image/svg+xml')

    if (username === undefined) {
        res.send(errorWidget('Profile', 'Username is not defined!'))
        return
    }

    res.send(profileWidget(String(username)))
})

export default router
