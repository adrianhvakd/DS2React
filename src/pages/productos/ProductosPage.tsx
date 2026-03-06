import React from 'react'
import ProductoLista from '../../components/ProductoLista'
import { Toaster } from 'react-hot-toast'

function ProductosPage() {
  return (
    <>
        <Toaster/>
        <ProductoLista></ProductoLista>
        <div className="fab">
          <a className="btn btn-lg btn-circle btn-primary" href='/producto-create'>+</a>
        </div>
    </>
  )
}

export default ProductosPage