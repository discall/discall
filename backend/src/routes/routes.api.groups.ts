import { Router } from 'express'
import GroupController from '../controller/groupchat.controller'
import UserInGroupController from '../controller/userInGroup.controller'
import messageRouter from './routes.api.message'

const router = Router()

router.get('/', GroupController.index)
router.get('/:id', GroupController.show)
router.post('/', GroupController.store)
router.post('/:id/members', UserInGroupController.store)
router.use(
  '/:groupId/messages',
  (req, res, next) => {
    res.locals.params = req.params
    next()
  },
  messageRouter,
)

export default router
