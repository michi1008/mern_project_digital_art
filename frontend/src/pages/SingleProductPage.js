import React, { useEffect} from 'react'
import { useParams} from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  PageHero,
  AddToCart
} from '../components'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const SingleProduct = () => {
  const {id} = useParams()
  const {single_product_loading:loading, single_product_error:error, single_product:product, fetchSingleProduct} = useProductsContext()
  
  useEffect(()=>{
    fetchSingleProduct(`/${id}`)
    console.log("called")
  },[id])
  
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

const {name, small, medium, large, extra_large, desc, url, id:sku} = product

  return (
    <Wrapper>
     <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
      <div className="product-center">
          <img className='single-product-img' src={url} alt={name}/>
          <section className='content'>
            <h2>{name}</h2>
            <p className='desc'> {desc}</p>
            <div className='price-section'>
            <h4 className='sizeP'>Small</h4><p className='price'>13"x19"(33.02x48.26cm)</p> 
            <h4 className='sizeP'>Medium</h4><p className='price'>18"x24"(45.72x60.96cm)</p> 
            <h4 className='sizeP'>Large</h4><p className='price'>24"x36"(60.96x91.44cm)</p> 
            <h4 className='sizeP'>Extra Large</h4><p className='price'>30"x40"(76.20x101.60cm)</p> 
            </div>
            <p className='info'>
              <span>SKU:{id} </span>
              {sku}
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
   )
}  
 
 
 
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
    font-size : 1.2rem;
  }
  .sizeP {
    font-weight: 700;
    color: var(--clr-red-dark)
  }
  .desc {
    line-height: 2;
    max-width: 45rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .single-product-img {
  width:100%;
  display:block;
  object-fit:cover;
  border-radius:var(--radius)  
  }
 
  

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct
