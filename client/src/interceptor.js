import store from '@/store'

export const requestInterceptor = (config) => {
    const accessToken = store.getters['session/accessToken']
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
}

export const requestInterceptorCatch = (error) => {
    return Promise.reject(error)
}
