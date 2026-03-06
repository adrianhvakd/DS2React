import axios from 'axios'

export interface loginData {
    username: string,
    password: string
}

interface registerData{
    name: string,
    username: string,
    password: string
}

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/', 
})


export const LoginApi = (data:loginData) => apiInstance.post('/login',data)
export const RegisterApi = (data:registerData) => apiInstance.post('/register',data) 
