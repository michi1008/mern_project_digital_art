import React, { useContext, useEffect, useReducer } from 'react'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import axios from 'axios'
import reducer from '../reducers/products_reducers'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN})
    try {
      const {data} = await axios.get('/api/products')
      const products = data
      console.log(products)
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
      dispatch({type: GET_PRODUCTS_ERROR })
      console.log(error)
    }
  }

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const {data} = await axios.get(`/api/products/${id}`)
      const singleProduct = data
      console.log(data)
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

   useEffect(() => {
    fetchProducts('/api/products')
    console.log("called")
  }, [])
 


return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
