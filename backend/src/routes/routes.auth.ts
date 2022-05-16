import { Router } from 'express'
import AuthController from '../controller/auth.controller'
import extractJwt from '../middleware/extractJwt'

const router = Router()

router.post('/signup', AuthController.signUp)
router.post('/signin', AuthController.signIn)
router.post('/me', extractJwt, AuthController.me)
router.post('/refresh', extractJwt, AuthController.refreshToken)

export default router
