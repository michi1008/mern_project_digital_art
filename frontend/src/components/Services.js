import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return <Wrapper><div className="section-center">
       <article className="header">
        <h3>Deliver digital art <br/>after printed and rolled in a package
        </h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
       </article>
        <div className="services-center">
          {services.map((service)=>{
            const {id, icon, title, text} = service;
            return <article key={id} className="service">
            <span className="icon">{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
            </article>
          })}
        </div>
    </div></Wrapper>
}

const Wrapper = styled.section`
  h3 {color: var(--clr-primary-1)};
  h4 {color: var(--clr-white)};
  
  padding: 5rem 0;

  background: var(--clr-primary-2);

  .header h3 {
    margin-bottom: 2rem;
  }
  .header p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-1);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-1);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    color: var(--clr-white);    
  }
  .service p {color: var(--clr-white)}
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-grey-5);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
