import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/signup" element={<h1>SignUp Page</h1>} />
        </Routes>
      </Container>
    </Router>
    
  );
}

const Container = styled.div``

export default App;