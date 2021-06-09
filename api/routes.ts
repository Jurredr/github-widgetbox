import express from 'express'
const router = express.Router()
import skillsRoute from './routes/skills-route'

router.use('/skills', skillsRoute)

export default router
