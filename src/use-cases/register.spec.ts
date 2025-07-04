import { expect, test, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

test('check if is works', () => {
  expect(1 + 1).toBe(2)
})

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const userRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(userRepository)

    const { user } = await registerUseCase.execute({
      name: 'José da Silva',
      email: 'josedasilva@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const userRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(userRepository)

    const { user } = await registerUseCase.execute({
      name: 'José da Silva',
      email: 'josedasilva@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare('123456', user.password)

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  // it('should not be able to register with same email twwice', async () => {
  //   const usersRepository = new InMemoryUsersRepository()
  //   const registerUseCase = new RegisterUseCase(usersRepository)

  //   const email = 'josedasilva@email.com'

  //   await registerUseCase.execute({
  //     name: 'José da Silva',
  //     email,
  //     password: '123456',
  //   })

  //   await expect(() =>
  //     registerUseCase.execute({
  //       name: 'José da Silva',
  //       email,
  //       password: '123456',
  //     }),
  //   ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  // })
})
