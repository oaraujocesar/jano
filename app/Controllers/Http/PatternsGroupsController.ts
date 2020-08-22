import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Mediators/Client/PatternsGroup/Store'

export default class PatternsGroupsController {
  public async store ({ request, response, auth }: HttpContextContract) {
    await auth.authenticate()

    const { status, data } = await Store(request.only([
      'sampling',
      'average_age',
      'male',
      'female',
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
