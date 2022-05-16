import { Router } from 'express'
import MessageController from '../controller/message.controller'

const router = Router()

router.get('/', MessageController.index)
router.get('/:id', MessageController.show)
router.post('/', MessageController.store)
router.delete('/', MessageController.destroy)

export default router
