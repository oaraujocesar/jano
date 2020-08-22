import User from 'App/Models/User'

const Signup = async ({ name, email, password }: User) => {
  const userExists = await User.findBy('email', email)

  if (!userExists) {
    const user = await User.create({ name, email, password })

    delete user.password
    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}

export default Signup
