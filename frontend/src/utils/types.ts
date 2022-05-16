import { getGroups } from '../services/api.group'

export type User = {
  // id: number
  // email: string
  // password: string
  name: string
  // resume: string
}

/**
 * Model Groupchat
 *
 */
export type Groupchat = {
  id: number
  name: string
}

/**
 * Model UserInGroup
 *
 */
export type UserInGroup = {
  userId: number
  groupId: number
  type: UserType
}

/**
 * Model Message
 *
 */
export type Message = {
  // id: number
  // groupchatId: number
  // authorId: number
  content: string
  // filePath: string | null
  // folder: string | null
  // dateTime: Date
}

/**
 * Model Event
 *
 */
export type Event = {
  id: number
  groupchatId: number
  title: string
  description: string
  initialDateTime: Date
  finalDateTime: Date
}
/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export enum UserType {
  REQUEST = 'REQUEST',
  COMMON = 'COMMON',
  ADMIN = 'ADMIN',
}

export type GroupList = Awaited<ReturnType<typeof getGroups>>
export type Group = GroupList[number]
