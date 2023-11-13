
// importando o Bcrypt
import { hashPassword } from '../../utils/bcrypt'
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