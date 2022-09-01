import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Payment from "./Components/Payment";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import AddProduct from "./Components/AddProduct";

const promise = loadStripe(
  'pk_test_51LcVfmC6XiTjG1nLey4eZZ2aK3yjYUBqXwNtMKYpaepsojcZCw9tQi3CRgMMfA9WiiYbHcTfHW1GMoI4o1ufZsq1000PWxZCW1'
)

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/address" element={<Address />} />
          <Route 
            path="/payment" 
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            } 
          />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Container>
    </Router>
    
  );
}

const Container = styled.div`
  width: 100vw;
`

export default App;