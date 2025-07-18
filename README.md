# App

GymPass Style App

## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar
- [X] Deve ser possível se autenticar
- [X] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [ ] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [X] Deve ser possível o usuário realizar check in de um usuário
- [ ] Deve ser possível validar o check in de um usuário
- [ ] Deve ser possível cadastrar uma academia

## RNs (Regras de Negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validado até 20 minutos após criado
- [ ] O check-in só pode ser validado por administadores

## (Requisitos não-funcionais)

- [X] A senha do usuário precisa estar criptografada
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)