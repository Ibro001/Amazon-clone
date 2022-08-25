import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </Router>
    
  );
}

const Container = styled.div`
  width: 100vw;
`

export default App;