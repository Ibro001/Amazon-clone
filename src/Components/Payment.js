import React from 'react'
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components'
import { useStateValue } from '../Context/StateProvider'
import Navbar from './Navbar'
import {getBasketTotal} from './reducer'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'


function Payment() {

    const [{ address, basket}] = useStateValue(); //context 

    const element = useElements();
    const stripe = useStripe();

  return (
    <Container>
      <Navbar />

      <Main>

        <ReviewContainer>
            <h2>Review Your Order</h2>
            <AddressContainer>
                <h5>Shipping Address</h5>

                <div>
                    <p>{address.fullName}</p>
                    <p>{address.flat}</p>
                    <p>{address.area}</p>
                    <p>{address.landmark}</p>
                    <p>
                        {address.city} {address.state}
                    </p>
                    <p>Phone: {address.phone}</p>
                </div>
            </AddressContainer>

                <PaymentContainer>
                    <h5>Payment Method</h5>

                    <div>
                        <p>Card Details</p>

                        {/** Stripe Card Elements */}
                        <CardElement />
                    </div>
                </PaymentContainer>

                <OrderContainer>
                    <h5>Your Order</h5>

                    <div>
                    {basket?.map((product) => (
                        <Product>
                        <Image>
                            <img src={product.image} alt="img" />
                        </Image>
                        <Description>
                            <h4>{product.title}</h4>

                            <p>${product.price}</p>
                        </Description>
                        </Product>
                    ))}
                    </div>
                </OrderContainer>

        </ReviewContainer>

        
        <Subtotal>
          <CurrencyFormat 
            renderText={value => (
              <>

                <p>
                  Subtotal ({basket.length} items ) : <strong>{value}</strong>
                </p>
                <small>
                  <input type='checkbox'/>
                  <span>
                    This order contains a gift.
                  </span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix={'$'}
          />

          <button>Place Order</button>

        </Subtotal>
        

      </Main>


    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 1707px;
    background-color: rgb(234,237,237);
`;

const Main = styled.div`
    padding: 15px;
    display: flex;

    @media only screen and (max-width: 1707px){
        flex-direction: column;
    }
`;

const ReviewContainer = styled.div`
    background-color: #fff;
    flex: 0.7;
    padding: 15px;

    h2{
        font-weight: 500;
        border-bottom: 1px solid lightgray;
        padding-bottom: 15px;
    }

`;

const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left:15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 1200px){
    flex: none;
    margin-top: 20px;
  }

  p{
    font-size: 20px;
  }

  small{
    display: flex;
    align-items: center;
    margin-top: 10px;

    span{
      margin-left: 10px;
    }
  }

  button{
    width: 65%;
    height: 40px;
    margin-top: 10px;
    background-color: #ffd814;
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const AddressContainer = styled.div`
    margin-top: 20px;

    div{
        margin-top: 10px;
        margin-left: 10px;

        p{
            font-size: 15px;
            margin-top: 4px;
        }
    }
`;

const OrderContainer = styled.div`
    margin-top: 30px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  img{
    margin-top: 10px;
    width: 100%;
  }
`;

const Description = styled.div`
  flex: 0.7;

  h4{
    font-weight: 600;
    font-size: 18px;
    margin-left: 10px;
  }

  p{
    font-weight: 600;
    margin-top: 10px;
    margin-left: 10px;
  }

  button{
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 10px;

    &:hover{
      text-decoration: underline;
    }
  }
`;

const PaymentContainer = styled.div`
    margin-top: 15px;

    div{
        margin-top: 10px;
        margin-left: 10px;

        p{
            font-size: 15px;
        }
    }
`;

export default Payment
