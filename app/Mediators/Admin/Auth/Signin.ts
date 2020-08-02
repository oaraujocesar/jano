import { AuthContract } from '@ioc:Adonis/Addons/Auth'

import User from 'App/Models/User'

const Signin = async ({ email, password }: User, auth: AuthContract) => {
  const token = await auth.use('api').attempt(email, password)

  return { status: 200, data: token.toJSON() }
}

export default Signin
