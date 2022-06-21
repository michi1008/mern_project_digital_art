import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Main = () => {
  return <Wrapper className = "content">
  <article className="content">
    <h2>
      digital art to your place
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem.
  </p>
  <Link to="/products" className="btn main-btn">
    shop now
  </Link>
  </article>
  <article className="img-container">
    <img src="https://firebasestorage.googleapis.com/v0/b/ken-lange-digital-collage-art.appspot.com/o/images%2Fimage%2FHalong-Bay-Reinvisioned.jpg?alt=media&token=21fc9210-2f86-46dd-9289-3d3f9e3d83b6" alt="digital art" className="main-img"/>
    <img src="https://firebasestorage.googleapis.com/v0/b/ken-lange-digital-collage-art.appspot.com/o/images%2Fimage%2FBeach-Girl.jpg?alt=media&token=951cb676-db6c-4462-990f-6cdcecdfd1ce" alt="digital art" className="sub-img"/>
  </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  justify-items: center;
  align-items:center;
  .img-container {
    display: none;
  }

  .main-btn {
    margin-left: 5rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    margin-left: 2rem;
    color: var(--clr-primary-2);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      margin-top: 2rem;
      margin-left: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
    .main-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      color: var(--clr-white);
      margin-left: 10rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 25rem;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      box-shadow: var(--dark-shadow)
    }
    .sub-img {
      position: absolute;
      bottom: -4rem;
      left:10rem;
      height:20rem;
      width: 100%;
      transform: translateX(-50%);
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow)
      
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Main
