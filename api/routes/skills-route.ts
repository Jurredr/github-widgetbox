import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

import skillsWidget from '../../src/widgets/skills'
import { getBoolean } from '../../src/utils'
import errorWidget from '../../src/widgets/error'
/**
 * Primary skill path.
 * 
 * This path is for the primary skill screen. It has the following possible queries
 * @param languages the list of languages to show.
 * @param frameworks the list of frameworks to show.
 * @param libraries the list of libraries to show.
 * @param names @deprecated the full list of all skills it needs to show. deprecated from version 1.1.0 onwards.
 */
router.get('/', function (req: Request, res: Response) {
    const { names, languages, frameworks, libraries, tools, software, includeNames} = req.query

    // Set the header's type to svg/xml
    res.setHeader('Content-Type', 'image/svg+xml')

    // Check if languages argument is not present
    if ((languages === undefined || languages === null) 
    && (frameworks === undefined || frameworks === null) 
    && (libraries === undefined || libraries === null) 
    && names === undefined
    && (tools === undefined || tools === null) 
    && (software === undefined || software === null) 
    ) {
        res.send(
            errorWidget('Skills', '-24%', 'Languages are undefined!', '-28%')
        )
        return
    }    

    if (names !== undefined) {
        res.send(skillsWidget(String(names), undefined, undefined, undefined, undefined, getBoolean(String(includeNames))))
        return
    } else {
        res.send(skillsWidget(String(languages), String(frameworks), String(libraries), String(tools), String(software), getBoolean(String(includeNames))))
    }

    // Grab the Skills widget
})

export default router
