import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import logo from './logo192.png'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height={30}
                width={30}
                className='d-inline-block align-top'
                alt='Logo'

              />
            </Navbar.Brand>
            <NavbarToggle aria-controls='responsive-navbar-nav' />

            <NavbarCollapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                
                <Form inline>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button variant='outline-info'>
                  Search
                </Button>
              </Form>
              </Nav>


            </NavbarCollapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      </>
    )
  }
}
