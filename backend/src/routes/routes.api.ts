import { Router } from 'express'
import groupRouter from './routes.api.groups'
import userRouter from './routes.api.users'

const router = Router()

router.use('/users', userRouter)
router.use('/groups', groupRouter)

export default router
