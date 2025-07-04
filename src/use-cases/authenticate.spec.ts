import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { expect, test, describe, it } from 'vitest'
import { AuthenticateUseCase } from './authenticate'

test('check if is works', () => {
  expect(1 + 1).toBe(2)
})

describe('Authenticate Use Case', () => {
  it('should be able to authenticate', async () => {
    const userRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(userRepository)

    await sut.execute({
      name: 'José da Silva',
      email: 'josedasilva@email.com',
      password: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'josedasilva@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
