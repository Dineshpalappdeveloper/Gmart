import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import send from "./Icons/send.png";
import smrphone from "./Icons/smartphone.png";
import ln from "./Icons/linkedin.png";
import fb from "./Icons/facebook.png";
import twitter from "./Icons/twitter.png";
import insta from "./Icons/instagram.png";

import styled from "styled-components";

const Footer = () => {
  const [togle, settogle] = useState(true);
  const [togle2, settogle2] = useState(true);
  const Navi = useNavigate();
  return (
    <Wrapper>
      <div className="mainFooter">
        <div className="Footer">
          <div onClick={() => Navi("/")} className="Title">
            <div className="title ">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                  fontSize: "4rem",
                }}
              >
                Gmart Shop
              </span>
            </div>
          </div>

          <div className="FooterHead">
            {" "}
            Gmart is a branded ecommerces and many type of Services provider
            like:- web Services etc .
          </div>
          <div className="fticon" style={{ display: "none" }}>
            <img className="ftimg" src={ln} alt="linkdn" />
            <img className="ftimg" src={twitter} alt="twitter" />
            <img className="ftimg" src={fb} alt="facebook" />
            <img className="ftimg" src={insta} alt="instagram" />
          </div>
        </div>

        <div className="BRP">
          <div className="FooterBRP">
            <h2 onClick={() => settogle(!togle)}>Services </h2>

            <div className={!togle ? "show" : "hide"}>
              <div onClick={() => Navi("/")}>Home</div>
              <div onClick={() => Navi("/products")}>Store</div>
              <div onClick={() => Navi("/men")}>Men Clouths</div>
              <div onClick={() => Navi("/women")}>Women Clouts</div>
              <div onClick={() => Navi("/accessories")}>Accessories</div>
            </div>
          </div>
          <div className="FooterBRP">
            <h2 onClick={() => settogle2(!togle2)}>About</h2>
            <div className={!togle2 ? "show" : "hide"}>
              <div onClick={() => Navi("/about")}>About Us</div>

              <div onClick={() => Navi("/contact")}>Contact Us</div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <div className="ready">How to Reach Out Gmart?</div>
          <div className="started">
            <img className="ftimg" src={smrphone} alt="mobile" />
            <div>+91-7761920507</div>
          </div>
          <div className="started">
            <img className="ftimg" src={send} alt="mobile" />
            <div>Gmart.com</div>
          </div>
        </div>
      </div>

      <div className="Copyright1">
        <div className="Copyright">
          <p>© 2023 All Right Reserved Gmart</p>
          <div>
            <div>Privacy Policy</div>
            <div>Terms of service</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mainFooter {
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 20px 0;
    background-color: gainsboro;
  }
  .title {
    color: black;
    font-size: 3rem;
    padding: 0.5rem;
    margin: 0px 0px 2rem;
    span {
      color: white;
      padding: 0.2rem;
      letter-spacing: 0.1rem;
    }
  }
  .fticon {
    display: flex;
    justify-content: space-between;
  }
  .ftimg {
    width: 40px;
    height: 40px;
  }
  .Footer {
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ready {
    font-family: "Montserrat";
    font-size: 4.2rem;
    font-weight: bold;
  }
  .FooterHead {
    color: gray;
    font-size: 2.4rem;
    margin: 1rem 0;
  }
  .FooterBRP {
    display: flex;
    flex-direction: column;
    text-align: justify;
    line-height: 25px;
    h2 {
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: bold;
    }
  }
  .FooterBRP > h2 {
    font-family: "Montserrat";
  }
  .FooterBRP > div {
    font-family: "Open Sans";
    color: gray;
    font-size: 2.2rem;
    div {
      margin: 0.5rem 0;
    }
  }

  .BRP {
    width: 25vw;
    display: flex;
    justify-content: space-between;
  }
  .started {
    width: 13vw;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    div {
      font-size: 1.5rem;
    }
  }
  .started > img {
    margin-right: 10px;
  }

  .Copyright1 {
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: "Open Sans";
    background-color: gainsboro;
    color: gray;
  }
  .Copyright {
    width: 79vw;
    border-top: 2px solid rgb(200, 199, 199);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 2rem;
      margin: 1rem;
    }
  }
  .Copyright > div {
    display: flex;
    width: 20vw;
    font-size: 2rem;
    justify-content: space-between;
  }
  .Copyright > div > div:hover {
    color: ${({ theme }) => theme.colors.help};
  }
  .FooterBRP > div > div:hover {
    color: ${({ theme }) => theme.colors.help};
  }

  .started > div:hover {
    color: ${({ theme }) => theme.colors.help};
  }

  @media only screen and (max-width: 540px) {
    .mainFooter {
      width: 100vw;
      overflow-x: hidden;
      flex-direction: column-reverse;
    }
    .Footer {
      width: 97vw;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }

    .Footer > h1 {
      font-size: 27px;
    }
    .FooterHead {
      width: 70vw;
      margin-bottom: 15px;
    }
    .ready {
      margin-bottom: 2rem;
    }
    .started {
      width: 95vw;

      margin-left: 2.3rem;
    }
    .BRP {
      flex-direction: column;
      width: 98vw;
      align-items: center;
    }
    .FooterBRP {
      background-color: rgb(202, 202, 202);
      width: 80vw;
      margin: 10px 0;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 5px;
    }
    .FooterBRP > h2 {
      display: flex;
      margin: 7px 0;
      align-items: center;
      justify-content: space-between;
    }
    .Copyright {
      flex-direction: column-reverse;
    }
    .Copyright > div {
      width: 80vw;
      box-sizing: border-box;
      padding: 20px 0;
      flex-direction: row;
    }
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
    .addBtn {
      display: inline-block;
      transform: rotate(180deg);
      transition: transform 0.1s linear;
    }
    .title {
      margin-top: 2rem;
      font-size: 4rem;
    }
    .fticon {
      width: 70vw;
      display: flex;
      justify-content: space-evenly;
    }
    .addBtnrt {
      transition: transform 0.1s linear;
      transform: rotate(0deg);
    }
  }
  @media only screen and (min-width: 541px) and (max-width: ${({ theme }) =>
      theme.media.tab}) {
    .title {
      font-size: 2rem;
    }
    .mainFooter {
      width: 100vw;
      overflow-x: hidden;
      justify-content: space-evenly;
    }
    .BRP {
      width: 35vw;
      flex-wrap: wrap;
    }
    .Footer {
      margin-right: 10px;
      width: 20vw;
    }

    .siren {
      font-size: 2.5rem;
    }
    .Copyright {
      width: 93vw;
    }
  }
`;

export default Footer;
