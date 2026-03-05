import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductosPage from './pages/productos/ProductosPage'
import ProductosFormPages from './pages/productos/ProductosFormPages'
import Menu from './components/Menu'

function App() {

  return (
    <div className='h-screen bg-base-100'>
      <BrowserRouter>
        <Menu/>
          <Routes>
            <Route path='/producto' element={<ProductosPage/>} ></Route>
            <Route path='/producto-create' element={<ProductosFormPages/>} ></Route>
            <Route path='/producto-edit/:id' element={<ProductosFormPages/>} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
