import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/categories/categories'
import ProductList from './components/products/ProductList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CategoriesProductList from './components/Categories/CategoriesProductList'
import './style.css'



function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Categories/>} />
      <Route exact path="/products" element={<ProductList />} />
      <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
    </Routes>
    </Router>

    </>
  )
}

export default App
