import React from 'react'
import { useEffect, useState } from 'react'
import { GetAllProduct } from '../api/ProductoApi'
import { DeleteProduct } from '../api/ProductoApi'

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

    const borrar = async (id:number) =>{
        const siEliminar = confirm("Esta seguro de eliminar?")
        if(siEliminar){
            try{
                await DeleteProduct(id)
                setProductos(products.filter(p => p.id !== id));
            }
            catch(e){
                console.log(e)
            }
        }
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
                            <a className='btn btn-primary' href={'/producto-edit/' + prod.id}>Editar</a>
                            <button className='btn btn-error' onClick={() => {borrar(prod.id);}}>Eliminar</button>
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