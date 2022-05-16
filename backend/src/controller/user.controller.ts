import type { Handler } from 'express'
import prisma from '../prisma'

class UserController {
  static index: Handler = async (req, res) => {
    const users = await prisma.user.findMany()
    res.json({ users })
  }

  static show: Handler = async (req, res) => {
    const { id: idStr } = req.params
    const id = parseInt(idStr)
    const user = await prisma.user.findFirst({ where: { id } })
    res.json({ user })
  }

  static update: Handler = async (req, res) => {
    const { id: idStr } = req.params
    const id = parseInt(idStr)
    const { email, password, name, resume } = req.body
    const user = await prisma.user.update({
      where: { id },
      data: { email, password, name, resume },
    })
    res.json({ user })
  }

  static destroy: Handler = async (req, res) => {
    const { id: idStr } = req.params
    const id = parseInt(idStr)
    const user = await prisma.user.delete({ where: { id } })
    res.json({ user })
  }
}

export default UserController
