import { FaShoppingCart, FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'
import {useUserContext} from '../context/user_context'

const Navbar = () => {
  const {openSidebar} = useProductsContext()
  const {myUser} = useUserContext()

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="digital art"/>
          </Link>     
          <button type="button" className="nav-toggle"  onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const {id, text, url} = link
            return (
              <li key={id}>
              <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {
            myUser && (<li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul> 
          <CartButton />
      </div>
    </NavContainer>    
  )
}

const NavContainer = styled.nav`
  background: var(--clr-primary-3);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav_center {    
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 100px;
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }
  
  @media (min-width: 992px) {

    .nav-toggle {
      display: none;
    }

    .nav-center {
      width:100%;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-primary-1);
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 3px solid var(--clr-primary-4);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`
export default Navbar