require("dotenv").config();
import { Request, Response } from "express"

// Setup express
const express = require('express')
const app = express()

// Handle skill-box api request
app.get('/api/', (req: Request, res: Response) => {
    const test = req.query.languages
    res.send('Languages: ' + test)
})

// Send 404 for incorrect request URL
app.use('*', (req: Request, res: Response) => {
    res.sendStatus(404);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
