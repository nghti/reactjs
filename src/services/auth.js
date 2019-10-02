import { client } from '../utils/axios'

const LOGIN_ENDPOINT = '/login'

export const loginRequest = ({email, password, ...rest}) => {
  return client().post(LOGIN_ENDPOINT, { email, password, ...rest })
}
