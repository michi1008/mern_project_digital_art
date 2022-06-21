import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }else{
    return []
  }
}
const initialState = {
  cart:getLocalStorage(),
  total_items:0,
  total_amount:0,
  shipping_fee:6000
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
// add item
const addToCart = (_id, mainSize, displaySize, amount, product) => {
  dispatch({type:ADD_TO_CART, payload:{_id, mainSize, displaySize, amount, product}})
}
// remove item
const removeItem =(_id) => {
  dispatch({type:REMOVE_CART_ITEM, payload:_id})
}
// toggle amount
const toggleAmount = (_id, value ) =>{
  dispatch({type:TOGGLE_CART_ITEM_AMOUNT, payload:{_id, value}})
}
// clear cart
const clearCart = () => {
  dispatch({type:CLEAR_CART})
}

useEffect(()=>{
  dispatch({ type: COUNT_CART_TOTALS })
  localStorage.setItem('cart', JSON.stringify(state.cart))
},[state.cart])


return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
