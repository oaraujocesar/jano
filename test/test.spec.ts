import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('v1/admin/auth', () => {
  // test('ensure home page works', async (assert) => {
  //   const payload = {
  //     email: 'test@example.com',
  //     password: 'password',
  //   }

  //   const { body } = await supertest(BASE_URL).post('/').send(payload).expect(200)

  //   assert.exists(body)
  // })

  // test('ensure user password gets hashed during save', async (assert) => {
  //   const user = new User()
  //   user.email = 'virk@adonisjs.com'
  //   user.password = 'secret'
  //   await user.save()

  //   assert.notEqual(user.password, 'secret')
  // })
  test('it should create a user', async (assert) => {
    const payload = {
      name: 'test',
      email: 'test@example.com',
      password: 'password',
    }

    const { body } = await supertest(BASE_URL)
      .post('/v1/admin/auth/signup')
      .send(payload)
      .expect(201)

    delete payload.password

    assert.include(body, payload)
  })

  test('it should return a token', async (assert) => {
    const payload = {
      email: 'test@example.com',
      password: 'password',
    }

    const { body } = await supertest(BASE_URL)
      .post('/v1/admin/auth/signin')
      .send(payload)
      .expect(200)

    assert.exists(body.token)
  })
})
