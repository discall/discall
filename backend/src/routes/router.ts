import { Router } from 'express'
import extractJwt from '../middleware/extractJwt'
import apiRouter from './routes.api'
import authRouter from './routes.auth'

const router = Router()

router.use('/auth', authRouter)
router.use('/api', extractJwt, apiRouter)

export default router
