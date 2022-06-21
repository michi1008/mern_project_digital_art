import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const {_id, mainSize, displaySize, amount, product} = action.payload
    const tempItem = state.cart.find((i) =>i._id === _id + mainSize)
    if(tempItem){
      const tempCart = state.cart.map((cartItem)=>{
        if(cartItem._id === _id + mainSize){
          let newAmount = cartItem.amount + amount         
          return {...cartItem, amount:newAmount}
        }
        else{
          return cartItem
        }
      })
      return {...state, cart:tempCart}
    }else{
      const newItem = {
        _id:_id + mainSize,
        name:product.name,
        mainSize,
        displaySize,
        amount,
        url:product.url,
      }
      return {...state, cart:[...state.cart, newItem]}
    }
  }
  if(action.type === REMOVE_CART_ITEM){
    const tempCart = state.cart.filter((item)=>item._id !== action.payload)
    return {...state, cart:tempCart}
  }
  if(action.type === CLEAR_CART){
    return {...state, cart:[]}
  }
  if(action.type === TOGGLE_CART_ITEM_AMOUNT){
    const {_id, value} = action.payload
    const tempCart = state.cart.map((item) => {
      if(item._id === _id){
        if(value === 'inc'){
          let newAmount = item.amount + 1
        return {...item, amount:newAmount}
        }
        if(value === 'dec'){
           let newAmount = item.amount - 1
           if(newAmount < 1) {
             newAmount = 1
           }
        return {...item, amount:newAmount}
      }
      }else{
        return item
      }
    })
    return {...state, cart:tempCart}
  }
  if(action.type === COUNT_CART_TOTALS){
    const {total_items, total_amount} = state.cart.reduce((total, cartItem)=>{
      const {amount, mainSize} = cartItem
      total.total_items += amount;
      total.total_amount += mainSize * amount
      return total
    }, {
      total_items:0, total_amount:0
    })
    return {...state, total_items, total_amount}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
