import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../api/LoginApi"
import { type loginData } from "../../api/LoginApi";

interface responseAPI {
    "access_token": string,
    "token_type": string
}

export function Login(){
    const { register, handleSubmit } = useForm<loginData>();
    const [ error, setError] = useState('');
    const navigate = useNavigate()
    const enviar = handleSubmit(async(data) => {
        console.log(data);
        try {
            const response = await LoginApi(data);
            console.log("Estoy vivo")
            const responseData: responseAPI = response.data;
            if(responseData.access_token){
                localStorage.setItem('token',responseData.access_token)
                return navigate('/producto')
            }

        } catch (e) {
            setError('username or password incorrect' + e)
            
        }
    })
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl">Login</h1>
            <form className="flex flex-col gap-4">
                <label className="floating-label">
                    <span>Username</span>
                    <input className="input" type="text" {...register('username')}  placeholder="pablito123"/>
                </label>
                <label className="floating-label">
                    <span>password</span>
                    <input className="input" type="password" {...register('password')} placeholder="********"/>
                </label>
                <button onClick={enviar} className="btn btn-primary">Enviar</button>
            </form>
            <span className="text-xs text-error">{ error }</span>
        </div>
    )
}