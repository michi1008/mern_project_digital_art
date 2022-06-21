import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){
    let maxPrice = action.payload.map((p)=>p.small)
    maxPrice = Math.max(...maxPrice)    
    return {...state, all_products:[...action.payload], filtered_products:[...action.payload], filters:{...state.filters, max_price:maxPrice, price:maxPrice}}
  }
  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view:true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view:false}
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort:action.payload}
  }
  if(action.type === SORT_PRODUCTS){
    const {sort, filtered_products} = state
    let tempProducts = [...filtered_products]
    if(sort === "price-lowest"){
      tempProducts = tempProducts.sort((a,b)=>a.small-b.small)
    }
    if(sort === "price-highest"){
      tempProducts = tempProducts.sort((a,b)=>b.small-a.small)
    }
    if(sort === "name-a"){
      tempProducts = tempProducts.sort((a,b)=>a.name.localeCompare(b.name))
    }
    if(sort === "name-z"){
      tempProducts = tempProducts.sort((a,b)=>b.name.localeCompare(a.name))
    }
    return {...state, filtered_products:tempProducts}
  }
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload 
    return {...state, filters:{...state.filters, [name]:value}}  // name is dynamic property
  }
  if(action.type === FILTER_PRODUCTS){
    const {all_products} = state 
    const {text, price} = state.filters
    let tempProducts = [...all_products]
    // filtering
    if(text){
      tempProducts = tempProducts.filter((product)=>{
        return product.name.toLowerCase().startsWith(text)
      })
    }
    if(price){
      tempProducts = tempProducts.filter((product)=>product.small <= price )
    }    
    return {...state, filtered_products:tempProducts}
  }
  if(action.type === CLEAR_FILTERS){
    return {...state, filters:{
    ...state.filters,
    text:'',
    price:state.filters.max_price
  }}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
