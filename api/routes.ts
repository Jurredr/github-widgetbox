import express from 'express'
const router = express.Router()

import skillsRoute from './routes/skills-route'
import profileRoute from './routes/profile-route'

// Skills widget
router.use('/skills', skillsRoute)

// Profile widget
router.use('/profile', profileRoute)

export default router
