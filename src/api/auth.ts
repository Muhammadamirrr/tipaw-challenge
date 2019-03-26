import { instance } from '../api'

export const signUp = (value: any) =>
  new Promise((resolve, reject) => {
    instance
      .post(`/artists`, {
        data: value
      })
      .then(response => {
        if (response.data.message) {
          reject(response.data.message)
        } else {
          localStorage.setItem('token', response.data.jwt)

          instance.defaults.headers.common.authorization = `Bearer ${response.data.jwt}`

          resolve(response.data)
        }
      })
      .catch(error => reject(error))
  })
