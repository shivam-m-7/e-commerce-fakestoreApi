import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Error404 from './Pages/Error404'
import Container from './Components/Container'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Favorites from './Pages/Favorites'

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/:category_id" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App