import type { User } from '@prisma/client'
import type { Handler } from 'express'
import prisma from '../prisma'
import hash from '../services/hash'
import jwtService from '../services/jwt'

class AuthController {
  static me: Handler = async (req, res) => {
    const token = res.locals.token

    const result = jwtService.verify(token)

    if (!result) {
      res.sendStatus(500)
      return
    }

    const user = jwtService.decode(token)

    res.json({ user })
  }

  static refreshToken: Handler = async (req, res) => {
    const extractedToken = res.locals.token

    const result = jwtService.verify(extractedToken)

    if (!result) {
      res.sendStatus(500)
      return
    }

    const user = jwtService.decode(extractedToken)
    delete user.exp
    delete user.iat
    const token = jwtService.encode(user)

    res.json({ token })
  }

  static signUp: Handler = async (req, res) => {
    try {
      const { email, password: plainPassword, name, resume } = req.body

      const password = await hash.encrypt(plainPassword)

      const user = await prisma.user.create({
        data: { email, name, password, resume },
      })
      res.json({ user })
    } catch (error) {
      res.sendStatus(500)
    }
  }

  static signIn: Handler = async (req, res) => {
    const { email, password: plainPassword } = req.body

    const userData = await prisma.user.findFirst({ where: { email } })
    if (!userData) {
      res.sendStatus(404)
      return
    }

    const result = await hash.verify(userData.password, plainPassword)

    if (!result) {
      res.sendStatus(404)
      return
    }

    const user = (await prisma.user.findFirst({
      where: { id: userData.id },
      select: {
        id: true,
        name: true,
        resume: true,
        email: true,
      },
    })) as User

    const token = jwtService.encode(user)

    res.json({ user, token })
  }
}

export default AuthController
