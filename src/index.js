import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductProvider } from './Context/ProductContext'
import { CartProvider } from './Context/CartContext'
import { FavoriteProvider } from './Context/FavoriteContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>    
      <ProductProvider>
        <CartProvider>
          <FavoriteProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </FavoriteProvider>
        </CartProvider>
      </ProductProvider>    
  </React.StrictMode>,
  document.getElementById("root")
)

