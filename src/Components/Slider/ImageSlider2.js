import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from 'styled-components'
import image1 from "../ImagesFiles/slider1.png"
import image2 from "../ImagesFiles/slider2.png"
import image3 from "../ImagesFiles/slider3.png"
import image4 from "../ImagesFiles/slider4.png"

const ImageSlider2 = () => {


  return (

    <Wrapper className='imageSlider'>

      <Carousel infiniteLoop autoPlay>
        <div className='image'>
          <img src={image1} alt='Screen1' />
        </div>
        <div className='image'>
          <img src={image2} alt='Screen2' />
        </div>
        <div className='image'>
          <img src={image3} alt='SScreen3' />
        </div>
        <div className='image'>
          <img src={image4} alt='Screen4' />
        </div>


      </Carousel>
    </Wrapper>


  )
}
const Wrapper = styled.section`
    .carousel{
       
      display:flex;
      justify-content:center;
    }
    .carousel .thumbs-wrapper{
      display:none;
    }
    .carousel .slide{
      height:60vh;
    }
    .carousel .slide img{
        max-height:100%;
        width:100vw;
    }
    .image{
      margin:0 auto;
      height:100%;
      width:auto;
    }

    @media only screen and (max-width:539px){
      
    
      .carousel .slide img{
        margin: auto;
        width:100vw;
        height:100%;
    }
    }

    @media only screen and (max-width:${({ theme }) => theme.media.tab}) and (min-width:540px){
      
    
      .carousel .slide img{
        margin: auto;
        width:100vw;
        height:100%;
    }
    }

`


export default ImageSlider2
