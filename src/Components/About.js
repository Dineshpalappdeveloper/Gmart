import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Styles/Button";
import logo1 from "../Components/ImagesFiles/slider1.png";
// import Services from "./services/Services";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> Gmart shop </h1>
            <p>
              <h4>Gmart Shop</h4>An ecommerce website is your digital storefront
              on the internet. It facilitates the transaction between a buyer
              and seller. It is the virtual space where you showcase products,
              and online customers make selections. Your website acts as the
              product shelves, sales staff, and cash register of your online
              business channe
            </p>
            <NavLink to="/">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img src={logo1} alt="hero-section" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
      {/* <Services/> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 0;

    .grid {
      gap: 5rem;
    }
    figure {
      margin-bottom: 4rem;
    }

    figure::after {
      content: "";
      width: 70%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

  @media only screen and (min-width: 540px) and (max-width: ${({ theme }) =>
      theme.media.tab}) {
    padding: 4rem 0;
    .grid-two-column {
      grid-template-columns: 1fr;
    }
    .grid {
      gap: 5rem;
    }
    figure {
      margin-bottom: 4rem;
    }
    figure::after {
      content: "";
      width: 70%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default About;
