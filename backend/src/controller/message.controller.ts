import { UserType } from '@prisma/client'
import { Handler } from 'express'
import prisma from '../prisma'
import jwtService from '../services/jwt'

class MessageController {
  static index: Handler = async (req, res) => {
    const { id } = jwtService.decode(res.locals.token)
    const { groupId: groupIdStr } = res.locals.params
    const groupId = parseInt(groupIdStr)

    const messages = await prisma.message.findMany({
      where: { groupId, authorId: id },
      include: { author: { select: { id: true, name: true } } },
      orderBy: { dateTime: 'asc' },
    })

    res.json({ messages })
  }

  static show: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { groupId: groupIdStr } = res.locals.params
    const { id: messageIdStr } = req.params
    const groupId = parseInt(groupIdStr)
    const id = parseInt(messageIdStr)

    const userInGroup = await prisma.userInGroup.findFirst({
      where: { groupId, userId },
    })

    if (!userInGroup) {
      res.sendStatus(500)
      return
    }

    const message = await prisma.message.findFirst({
      where: { groupId, id },
    })

    res.json({ message })
  }

  static store: Handler = async (req, res) => {
    const { id: authorId } = jwtService.decode(res.locals.token)
    const { groupId: groupIdStr } = res.locals.params
    const groupId = parseInt(groupIdStr)
    const { content } = req.body

    const message = await prisma.message.create({
      data: { content, groupId, authorId },
    })

    res.json({ message })
  }

  static destroy: Handler = async (req, res) => {
    const { id: userId } = jwtService.decode(res.locals.token)
    const { groupId: groupIdStr } = res.locals.params
    const { id: messageIdStr } = req.params
    const groupId = parseInt(groupIdStr)
    const id = parseInt(messageIdStr)

    const userInGroup = await prisma.userInGroup.findFirst({
      where: { userId, groupId },
    })

    if (userInGroup?.type !== UserType.ADMIN) {
      res.sendStatus(500)
      return
    }

    const message = await prisma.message.findFirst({
      where: { id },
    })

    if (message?.authorId !== userId) {
      res.sendStatus(500)
      return
    }

    const result = await prisma.message.delete({
      where: { id },
    })

    res.json({ result })
  }
}

export default MessageController
