import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Auth } from 'aws-amplify'
import Environment from '@/environment'

const createAxiosService = (url: string) => {
  const axiosInstance = axios.create({
    baseURL: url,
  })
  axiosInstance.interceptors.request.use((request: any) => {
    // @ts-ignore
    const user: any = window?.user
    if (user?.AuthenticationResult?.AccessToken) {
      // @ts-ignore
      request.headers[
        'Authorization'
      ] = `Bearer ${user?.AuthenticationResult?.AccessToken}`
    }
    return request
  })

  axiosInstance.interceptors.response.use(
    async (response: AxiosResponse) => {
      if (response.status === 401) {
        // Logout
        await Auth.signOut()
        window.location.reload()
      }
      return response
    },
    async (error) => {
      if (error.response) {
        if (error.response?.status === 401) {
          await Auth.signOut()
          window.location.reload()
        }
        return {
          status: error.response?.status || 400,
          data: error.response?.data,
        }
      }

      return Promise.reject(error)
    }
  )
  return axiosInstance
}

export const coreService = createAxiosService(Environment.coreServiceUrl)
