import React, { useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import { CreateProduct, UpdateProduct, GetProduct } from '../../api/ProductoApi'
import { type productCreate, type productUpdate } from '../../api/ProductoApi';

function ProductosFormPages() {
  const { register, handleSubmit, setValue, formState:{errors} } = useForm<productUpdate | productCreate>()
  const navigate = useNavigate()
  const params = useParams()
  const [ errorf, setErrorf] = useState('')
  const notifycreate = () => toast("Producto insertado correctamente");
  const notifyedit = () => toast("Producto editado correctamente");
  useEffect(()=>{
    async function loadDatos(){
      if(params.id){
        const { data } = await GetProduct(Number(params.id))
        setValue('nombre',data.nombre)
        setValue('precio',data.precio)
        setValue('descripcion',data.descripcion)
      }
    }
    loadDatos()
  }, [])
  const enviar = handleSubmit(async (formData: productUpdate) =>{
    try {
      if(params.id){
        await UpdateProduct(Number(params.id),formData)
        notifyedit()
      }
      else{
        await CreateProduct(formData)
        notifycreate()
      }
      navigate('/producto')
    } catch (e) {
      setErrorf('Error en el formulario ' + e)
    }

  })
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
      <h1 className='text-2xl'>Productos</h1>
      <form className='flex flex-col gap-5 w-60'>
        <label className='floating-label'>
          <span>Nombre</span>
          <input type="text" {...register('nombre',{required: true})} name='nombre' className='input'/>
        </label>
        {errors.nombre && <span>Dato requerido</span>}
        <label className='floating-label'>
          <span>Precio</span>
          <input type="number" {...register('precio',{required: true})} name='precio' className='input'/>
        </label>
        {errors.precio && <span>Dato requerido</span>}
        <label className='floating-label'>
          <span>Descripcion</span>
          <textarea {...register('descripcion',{required: true})} name='descripcion' className='textarea'/>
        </label>
        {errors.descripcion && <span>Dato requerido</span>}
        <button onClick={enviar} className='btn btn-primary'>Enviar</button>
      </form>
      <span className='text-xs text-error'> { errorf } </span>
    </div>
  )
}

export default ProductosFormPages

