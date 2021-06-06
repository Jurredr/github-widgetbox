import { Request, Response } from "express"

const express = require('express')
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
