import connect from 'next-connect'

import mongooseMiddleWare from './mongoose'


export default function createHandle() {
  return connect().use(mongooseMiddleWare)
}