require('dotenv').config()

import { Request, Response } from 'express'
import errorWidget from '../src/widgets/error'
import routes from './routes'

// Setup express
import express from 'express'
const app = express()

// Use routing on the /api prefix
app.use('/api', routes)

// Send error widget for incorrect request URL
app.use('*', (req: Request, res: Response) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(errorWidget('Unknown', 'Invalid API URL!'))
})

// Start listening on defined port
app.listen(process.env.PORT, () => {
    console.log(`Github-WidgetBox listening at http://localhost:${process.env.PORT}`)
})
