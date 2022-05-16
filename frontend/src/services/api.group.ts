import { Groupchat, Message, UserInGroup } from '../utils/types'
import api from './api'

interface GetGroupsRes {
  groups: (Groupchat & {
    usersInGroup: (UserInGroup & { user: { id: number; name: string } })[]
    messages: (Message & { author: { id: number; name: string } })[]
  })[]
}

export const getGroups = async () => {
  const { data } = await api.get<GetGroupsRes>('/groups')
  return data.groups
}

interface GetGroupRes {
  group: Groupchat & {
    messages: (Message & { author: { name: string; id: number } })[]
    usersInGroup: (UserInGroup & { user: { name: string; id: number } })[]
  }
}

export const getGroup = async (id: number) => {
  const { data } = await api.get<GetGroupRes>(`/groups/${id}`)
  return data.group
}

interface CreateGroupReq {
  name: string
}

interface CreateGroupRes {
  group: Groupchat
}

export const createGroup = async (groupData: CreateGroupReq) => {
  const { data } = await api.post<CreateGroupRes>('/groups', groupData)
  return data.group
}
