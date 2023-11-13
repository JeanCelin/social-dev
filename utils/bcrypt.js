import bcryptjs from 'bcryptjs'

// a função a seguir transforma a senha em hash

export const hashPassword = (password) => 
  bcryptjs.hashSync(password)


// a função a seguir compara a senha hash com a senha original

export const comparePassword = (password, hash) => 
  bcryptjs.compareSync(password, hash)
