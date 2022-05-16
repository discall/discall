import { UserType } from '@prisma/client'
import { Handler } from 'express'
import prisma from '../prisma'
import jwtService from '../services/jwt'

class UserInGroupController {
  static store: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { id: idStr } = req.params
    const groupId = parseInt(idStr)
    const { email } = req.body

    const userInGroup = await prisma.userInGroup.findFirst({
      where: { userId, groupId },
    })
    if (userInGroup?.type !== UserType.ADMIN) {
      res.sendStatus(500)
      return
    }

    const user = await prisma.user.findFirst({ where: { email } })
    if (!user) {
      res.sendStatus(500)
      return
    }

    const result = await prisma.userInGroup.create({
      data: { groupId, userId: user.id, type: UserType.COMMON },
    })

    res.json({ result })
  }
}

export default UserInGroupController
