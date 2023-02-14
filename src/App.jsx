import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Auth from './components/Auth'
import ProductList from './components/Products'
import Product from './components/Product'
import DataProvider from './components/Context/DataContext'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DataProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/auth" element={<Auth />} />
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App
