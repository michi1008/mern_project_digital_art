import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import { formatPrice } from '../utils/helpers'

const AddToCart = ({product}) => {
  const{addToCart} = useCartContext()
  const {_id, small, medium, large, extra_large} = product
  const sizes = [small, medium, large, extra_large]
  const [mainSize, setMainSize] = useState(sizes[0])
  const [displaySize, setDisplaySize] = useState("Small")
  const [amount,setAmount] = useState(1)

  const increase = () =>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount + 1
      return tempAmount
    })
  }
  const decrease = () =>{
    setAmount((oldAmount)=>{
      let tempAmount = oldAmount - 1
      return tempAmount
    })
  }

  return (
  <Wrapper>
  <div className="sizes">
  <div>
    <button data-size="small" className={`${mainSize === small? "size-btn active":"size-btn"}`} onClick={()=>{setMainSize(small); setDisplaySize("Small")}}>Small</button>
  </div>
   <div>
    <button data-size="medium" className={`${mainSize === medium? "size-btn active":"size-btn"}`} onClick={()=>{setMainSize(medium); setDisplaySize("Medium")}}>Medium</button>
  </div>
   <div>
    <button data-size="large" className={`${mainSize === large? "size-btn active":"size-btn"}`} onClick={()=>{setMainSize(large); setDisplaySize("Large")}}>Large</button>
  </div>
   <div>
    <button data="extra large" className={`${mainSize === extra_large? "size-btn active":"size-btn"}`} onClick={()=>{setMainSize(extra_large); setDisplaySize("Extra Large")}}>Extra Large</button>
  </div>
  </div>
   <div className="btn-container">
     <AmountButtons amount={amount} increase={increase} decrease={decrease}/>
     <Link to="/cart" className="btn" onClick={()=>addToCart(_id, mainSize, displaySize, amount, product)}>add to cart</Link>
   </div>
  </Wrapper>)
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .sizes {
    display: flex;
    align-items: space-between;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .size-btn {
    display: inline-block;
    width: 5rem;
    height: 2rem;
    border-radius: 10%;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
