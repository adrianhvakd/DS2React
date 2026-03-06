import axios from 'axios'

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/producto/', 
})

apiInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export interface productCreate{
    nombre: string
    precio: number
    descripcion: string | null
}

export interface productUpdate{
    nombre: string | null
    precio: number | null
    descripcion: string | null
}

export const GetAllProduct = () => apiInstance.get('')
export const CreateProduct = (dato: productCreate) => apiInstance.post('', dato)
export const UpdateProduct = (id: number, dato: productUpdate) => apiInstance.put(`${id}`, dato)
export const DeleteProduct = (id: number) => apiInstance.delete(`${id}`)
export const GetProduct = (id: number) => apiInstance.get(`${id}`) 