import React from 'react'
import { useEffect, useState } from 'react'
import { GetAllProduct } from '../api/ProductoApi'

interface Producto{
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
}

function ProductoLista() {
    const [ products, setProductos ] = useState<Producto[]>([]) 
    useEffect(() => {
        async function loadProducts(){
            const res = await GetAllProduct()
            setProductos(res.data)
        }
        loadProducts()
    },[])
    function editProduct(id:number){
        alert(id)
    }
  return (
    <div className='flex flex-col p-5 gap-5'>
        <h1 className='text-4xl'>Lista de productos</h1>
        <div className="bg-base-200 w-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                { products.map(prod => (
                    <tr key={prod.id}>
                        <th>{prod.id}</th>
                        <th>{prod.nombre}</th>
                        <th>{prod.precio}</th>
                        <th>{prod.descripcion}</th>
                        <th className='flex gap-3'>
                            <button className='btn btn-primary' onClick={() =>editProduct(prod.id)}>Editar</button>
                            <button className='btn btn-error'>Eliminar</button>
                        </th>
                    </tr>
                )) }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductoLista