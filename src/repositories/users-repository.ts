import { Prisma } from '@prisma/client'

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<void>
}
