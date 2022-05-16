import type { User } from '@prisma/client'
import jwt, { JwtPayload } from 'jsonwebtoken'

const SECRET_KEY = 'dmsa09irh3.89qifmv_89042-qfoslpa'

function encode(user: User) {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '2 days' })
}

function decode(token: string) {
  const payload = jwt.decode(token) as User & JwtPayload
  return payload
}

function verify(token: string): boolean {
  const payload = jwt.decode(token) as JwtPayload
  const now = Math.floor(Date.now() / 1000)
  return !!(payload?.exp && payload.exp > now)
}

const jwtService = {
  encode,
  decode,
  verify,
}

export default jwtService
