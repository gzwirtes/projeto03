import { expect, test, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

test('check if is works', () => {
  expect(1 + 1).toBe(2)
})

describe('register use case', () => {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail() {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password: data.password,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.execute({
      name: 'José da Silva',
      email: 'josedasilva@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare('123456', user.password)

    expect(isPasswordCorrectlyHashed.toBe(true))
  })
})
