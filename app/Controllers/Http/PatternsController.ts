import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Mediators/Client/Patterns/Store'

export default class PatternsController {
  public async store ({ request, response, auth }: HttpContextContract) {
    await auth.authenticate()

    const { status, data } = await Store(request.only([
      'sex',
      'age',
      'symptoms',
      'country',
      'state',
      'rtpcr',
      'quick_test',
      'x_ray',
      'tomography',
      'reference',
    ]))
    return response.status(status).send(data)
  }
}
