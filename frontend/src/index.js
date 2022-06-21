import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { Auth0Provider } from "@auth0/auth0-react"
import { UserProvider} from './context/user_context'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>  
      </UserProvider>       
    </Auth0ProviderWithHistory>
  </Router>  

 , document.getElementById('root'))

