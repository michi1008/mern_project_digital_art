import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Register your email address and get 10% off</h3>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. 
        </p>
        <form className="contact-form" action="https://formspree.io/f/mdoyqzkp" method="POST">
          <input type="email" className="form-input" placeholder=" Enter email" name="_replyto"/>
          <button type="submit"className="submit-btn">REGISTER</button>
        </form>
      </div>
    </div>    
    </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    color: var(--clr-primary-1)
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-primary-2);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-primary-2);
    color: var(--clr-white);
  }
  .form-input {
    border-right: none;
    color: var(--clr-primary-2);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    
  }
  .form-input::placeholder {
    color: var(--clr-primary-5);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-primary-2);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
