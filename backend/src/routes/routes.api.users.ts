import { Router } from 'express'
import UserController from '../controller/user.controller'

const router = Router()

router.get('/', UserController.index)
router.get('/:id', UserController.show)

export default router
