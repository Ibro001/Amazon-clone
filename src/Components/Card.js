import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';

function Card() {
  return (
    <Container>
      <Image>
        <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg" alt="img" />
      </Image>
      <Description>
        <h5>Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)</h5>
        <Rating 
            name="half-rating" 
            defaultValue={2.5} 
            precision={0.5}  
        />
        <p><sup>$</sup>103<sup>35</sup></p>
        <button>Add to Cart</button>
      </Description>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    background-color: #fff;
    z-index: 10;
`;

const Image = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex: 0.3;

    img{
        width: 250px;
        height: 170px;
    }
`;

const Description = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 0.7;

    h5{
        font-size: 16px;
        font-weight: 700;
    }

    p{
        font-size: 30px;
        font-weight: 600;
    }

    p > sup{
        font-size: 17px;
    }

    button{
        width: 100%;
        height: 33px;
        background-color: #fa8900;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 10px;
    }
`;

export default Card
