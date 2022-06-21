import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title,product}) => {
   return <Wrapper>
    <div className="section-center">
      <h4>
        <Link to="/">Home</Link>{product && <Link to="/products">/Products</Link>}/ {title}
      </h4>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-3);
  a {
    color: var(--clr-primary-3);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-white);
  }
`

export default PageHero
