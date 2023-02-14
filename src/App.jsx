import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Auth from './components/Auth'
import ProductList from './components/ProductList'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/auth" element={<Auth />} />
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
