import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters:{
      text, min_price, price, max_price
    },updateFilters, clearFilters, all_Products
  } = useFilterContext()
  
  return <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        {/* search */}
        <div className="form-control">
          <input type="text" name="text" placeholder="SEARCH" className="search-input" value={text} onChange={updateFilters}/>
        </div>
        {/* end of search */}
        {/* price */}
        <div className="form-control">
          <h5>PRICE</h5>
          <p className="price">{formatPrice(price)}</p>
          <input type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price} />
        </div>
        {/* end of price */}        
      </form>
      <button type="button" className="clear-btn" onClick={clearFilters}> CLERAR FILTER</button>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
    color:var(--clr-primary-5);
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-3);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-primary-5);
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters

