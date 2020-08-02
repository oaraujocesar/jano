import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Signup from 'App/Mediators/Admin/Auth/Signup'
import Signin from 'App/Mediators/Admin/Auth/Signin'

export default class AuthController {
  public async store ({ request, response }: HttpContextContract) {
    const { status, data } = await Signup(request.only(['name', 'email', 'password']))
    return response.status(status).send(data)
  }

  public async signin ({ request, response, auth }: HttpContextContract) {
    const { status, data } = await Signin(request.only(['email', 'password']), auth)
    return response.status(status).send(data)
  }
}
