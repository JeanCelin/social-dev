
// importando o Bcrypt
import { hashPassword, comparePassword } from '../../utils/bcrypt'
/* a função fica entre chaves pois ela não foi exportada como default,
então é necessário utilizar chaves nessas ocasiões */
import User from './user.model'

export const signupUser = async (body) => {
  try {
    const user = {
      ...body, //vai pegar todos os dados do usuário.
      password: hashPassword(body.password) // vai transformar a senha do usuário em uma senha indecífravel.
    }
    const dbUser = await User.create(user)
    return dbUser
  } catch (err) {
    throw(err)
  }
}

export const login = async (body) => { 
  try { 
    const user = await User.findOne({ 
      $or: [
        { email: body.userOrEmail },
        { user: body.userOrEmail}
      ]
    })

    if (!user) throw new Error('not found')
    const passwordIsCorret = comparePassword(body.password, user.password)
    if (!passwordIsCorret) throw new Error('Incorrect password.')

    return user
  } catch (err) {
    throw err
  }
}