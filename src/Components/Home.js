import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import Navbar from './Navbar';

function Home() {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="background_banner" />
        <img src="mobile_banner.jpg" alt="mobile_banner_background" />
      </Banner>
      <Main>
        <Card
          id={1} 
          image={"https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"}
          price={103}
          rating={0}
          title={'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'}
        />
        <Card
          id={2}  
          image={"https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL320_.jpg"}
          price={46}
          rating={4.5}
          title={'Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls'}
        />
        <Card 
          id={3} 
          image={"https://m.media-amazon.com/images/I/61efchsOzWL._AC_UL320_.jpg"}
          price={130}
          rating={4.5}
          title={'LED Reading Light Charger Cord, USB Charging Cable Compatible with Vekkia/ TAKKUI/ LEDGLE LED Neck Reading Light...'}
        />
        <Card 
          id={4} 
          image={"https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"}
          price={22}
          rating={5}
          title={'Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal'}
        />
        <Card 
          id={5} 
          image={"https://m.media-amazon.com/images/I/51goF8lukrL._AC_UY218_.jpg"}
          price={348}
          rating={4.5}
          title={'HONYAT Wireless Switch Pro Controller for Nintendo Switch/Lite/OLED...'}
        />
      </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background-color: rgb(234, 237, 237);
    max-width: 1400%;
    margin: auto;
    height: fit-content;
`;

const Banner = styled.div`
    width: 100%;

    img{
        width: 100%;
        -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 2),
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0)
        );

        &:nth-child(2){
            display: none;
        }

        @media only screen and (max-width: 767px){
            &:nth-child(1){
                display: none;
            }
            &:nth-child(2){
                display: block;
            }
            -webkit-mask-image: none;
        }
    }
`;

const Main = styled.div`
    display: grid;
    justify-content: center;
    place-items: center;
    width: 100%;

    grid-auto-rows: 420px;
    grid-template-columns: repeat(4, 280px);
    grid-gap: 20px;

    /* mobile screen */
    @media only screen and (max-width: 767px){
        grid-template-column: repeat(2, 50%);
        grid-gap: 0;
    }

    /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

    /*Desktop Browser*/
    @media only screen and (min-width: 767px) {
        margin-top: -130px;
        padding: 10px 0px;
    }
`;

export default Home
