import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('v1/admin/auth', () => {
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

test.group('v1/client/patterns', () => {
  test('it should create a new case', async (assert) => {
    const payload = {
      sex: 'Feminino',
      age: 32,
      symptoms: [
        'Febre',
        'Tosse',
      ],
      country: 'brasil',
      state: 'pernambuco',
    }

    const authentication = {
      email: 'test@example.com',
      password: 'password',
    }

    const response = await supertest(BASE_URL)
      .post('/v1/admin/auth/signin')
      .send(authentication)
      .expect(200)

    const { body } = await supertest(BASE_URL)
      .post('/v1/client/patterns/store')
      .set('Authorization', `Bearer ${response.body.token}`)
      .send(payload)
      .expect(201)

    assert.equal(body, payload)
  })
})
