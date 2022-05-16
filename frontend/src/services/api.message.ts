import { Message } from '../utils/types'
import api from './api'

interface GetMessagesRes {
  messages: (Message & {
    author: {
      name: string
      id: number
    }
  })[]
}

export const getMessages = async (groupId: number) => {
  const { data } = await api.get<GetMessagesRes>(`/groups/${groupId}/messages`)
  return data.messages
}

interface GetMessageRes {
  message:
    | (Message & {
        author: {
          id: number
          email: string
        }
      })
    | null
}

export const getMessage = async (groupId: number, messageId: number) => {
  const { data } = await api.get<GetMessageRes>(
    `/groups/${groupId}/messages/${messageId}`,
  )
  return data.message
}

interface CreateMessageReq {
  content: string
}

interface createMessageRes {
  message: Message
}

export const createMessage = async (
  groupId: number,
  messageData: CreateMessageReq,
) => {
  const { data } = await api.post<createMessageRes>(
    `/groups/${groupId}/messages`,
    messageData,
  )
  return data.message
}
