import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Login.css';
import './header.css';
import './popup.css';
import Login2 from "./Login2";
import { Redirect,Router, Route, Link} from 'react-router-dom';
import BackgroundHeader from "./logo5.png";

const navbar = {backgroundColor: '#E1C683'};


class Popup extends React.Component {
  render() {
    return (
     
      <div className='popup'>
        <div className='popup_inner'>
      
          SOMETHING
		 
        <button className='button' onClick={this.props.closePopup}>X</button>
		
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
	constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  login() {
    <a href="/account"></a>
   // <Redirect to={'/account'}/>
  }
     render() {
        return (
		<div>
           <Navbar fixed="top"  expand="lg">
  <Navbar.Brand href="/home"  ><img src={BackgroundHeader} width="60" height="40"/><b>Abbyfy</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
      <Nav.Link href="/card"><font color="#383838">PRODUCT</font></Nav.Link>
      <Nav.Link href="/scan" ><font color="#383838">PLANS & PRICING</font> </Nav.Link>
      <Nav.Link href="/scan" ><font color="#383838">SCAN</font></Nav.Link>
      <NavDropdown title="Something" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={this.togglePopup.bind(this)}>SIGN IN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SIGN UP</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button variant="dark" size="sm" href="/account">SIGN IN</Button>
  
  </Navbar.Collapse>
</Navbar>
{this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
  </div>
        );
    }
}

export default Header; 
