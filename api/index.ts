require('dotenv').config()
import { Request, Response } from 'express'
const { errorCard } = require('../src/cards/error-card.ts')

// Setup express
const express = require('express')
const app = express()

// Handle skill-box api request
app.get('/api/', (req: Request, res: Response) => {
    // Get the query parameters
    const { username, languages, tools, } = req.query

    // Content response-type will be SVG
    // res.setHeader("Content-Type", "image/svg+xml");

    // Fetch stats here

    res.send(
        'Username: ' +
            username +
            '<br> Languages: ' +
            languages +
            '<br> Tools: ' +
            tools
    )
})

// Send 404 for incorrect request URL
app.use('*', (req: Request, res: Response) => {
    res.send(errorCard('Invalid API URL'))
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
