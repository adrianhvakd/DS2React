import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/producto/', 
})

apiInstance.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZHJpYW5odmFrZCIsImV4cCI6MTc3MjY2Mjk0Nn0.7UVgMusBZtL-zfAwSehRiNnVvyJRQRePnYMYd2oJluw'
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const GetAllProduct = () => apiInstance.get('')
export const CreateProduct = (dato: any) => apiInstance.post('', dato)
export const UpdateProduct = (id: number, dato: any) => apiInstance.put(`${id}`)
export const DeleteProduct = (id: number) => apiInstance.delete(`${id}`)