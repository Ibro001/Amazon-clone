import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import {useStateValue} from '../Context/StateProvider';


function Card({id,title,price,rating,image}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="img" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating 
            name="half-rating" 
            defaultValue={rating} 
            precision={0.5}  
        />
        <p><sup>$</sup>{price}<sup>99</sup></p>

        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
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
