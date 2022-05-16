import { UserType } from '@prisma/client'
import { Handler } from 'express'
import prisma from '../prisma'
import jwtService from '../services/jwt'

class GroupchatController {
  static index: Handler = async (req, res) => {
    const { id } = jwtService.decode(res.locals.token)

    const userInGroupArray = await prisma.userInGroup.findMany({
      where: { userId: id },
      include: {
        group: {
          include: {
            usersInGroup: {
              include: { user: { select: { id: true, name: true } } },
            },
            messages: {
              include: { author: { select: { id: true, name: true } } },
            },
          },
        },
      },
    })

    const groups = userInGroupArray.map(({ group }) => group)

    res.json({ groups })
  }

  static show: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { id: idStr } = req.params
    const id = parseInt(idStr)

    const group = await prisma.groupchat.findFirst({
      where: { id },
      include: {
        usersInGroup: {
          include: { user: { select: { id: true, name: true } } },
        },
        messages: {
          include: { author: { select: { name: true, id: true } } },
        },
      },
    })

    if (!group?.usersInGroup.find(user => user.userId === userId)) {
      res.sendStatus(500)
      return
    }

    res.json({ group })
  }

  static store: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { name } = req.body

    const group = await prisma.groupchat.create({
      data: {
        name,
        usersInGroup: {
          create: { userId, type: UserType.ADMIN },
        },
      },
    })

    res.json({ group })
  }

  static update: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { id: idStr } = req.params
    const id = parseInt(idStr)
    const { name } = req.body

    const userInGroup = await prisma.userInGroup.findFirst({
      where: { userId, groupId: id },
    })

    if (userInGroup?.type !== UserType.ADMIN) {
      res.sendStatus(500)
      return
    }

    const group = await prisma.groupchat.update({
      where: { id },
      data: { name },
    })

    res.json({ group })
  }
}

export default GroupchatController
