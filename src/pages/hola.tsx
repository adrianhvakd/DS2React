import React from 'react'

export function Hola(){
    return(
        <div className='flex flex-col justify-center items-center h-50 rounded-2xl shadow-2xl border-base-300 p-7 bg-base-200'>
            <div className='card flex flex-col justify-center items-center gap-2'>
                <p className="text-6xl font-bold">Hola</p>
                <p>Hola mundo desde mi primer componente</p>
            </div>
        </div>
    )
}
