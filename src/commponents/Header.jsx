import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux/es';
import { Link } from 'react-router-dom';

const Head = () => {


  const cont = useSelector((State) => State.counter.counter);

  var stylhead={textDecorationLine:'none',fontSize:"20px"}

  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand  className='mx-5'>M o v i e s</Navbar.Brand>
          <Nav className="me-auto">
         
            <Link  style={stylhead}  className='mx-5' to="/">Home</Link>
            <Link    style={stylhead}className='mx-5' to="/favorit">favorit</Link>    
              <i className="fa-solid fa-bell fa-xl" style={{color:"white",marginTop:"10px"}}>{cont} </i>

            <Link   style={stylhead} className='mx-5' to="/regist">Regist</Link>
            <Link   style={stylhead} className='mx-5' to="/login">login</Link>

          </Nav>
        </Container>
      </Navbar> 
    </>
  )
}

export default Head
