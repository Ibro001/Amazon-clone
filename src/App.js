import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<h1>SignUp Page</h1>} />
        </Routes>
      </Container>
    </Router>
    
  );
}

const Container = styled.div`
  width: 100vw;
`

export default App;