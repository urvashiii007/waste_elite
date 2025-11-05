/*
import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import M from 'materialize-css'
import $ from 'jquery'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Navbar1 = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()
  const renderList = () => {
    if (state) {
      return [


        <NavItem>
          <NavLink className="text-white" href="/">Home</NavLink>
        </NavItem>,
        <NavItem>
          <NavLink className="text-white" href="/About">AboutUs</NavLink>
        </NavItem>,
        <NavItem>
          <NavLink className="text-white" href="/profile">Profile</NavLink>
        </NavItem>,
        <NavItem>
          <button style={{ color: "white", marginLeft: "20px" }} className="btn #c62828 red darken-3"
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push('/')
            }}
          >
            Logout
</button>
        </NavItem>
      ]
    } else {
      return [
        <NavItem>
          <NavLink className="text-white" href="/">Home</NavLink>
        </NavItem>,
        <NavItem>
          <NavLink className="text-white" href="/About">AboutUs</NavLink>
        </NavItem>,
        <NavItem >
          <NavLink className="text-white" href="/login" >Login</NavLink>
        </NavItem>,

        <NavItem>

          <NavLink className="text-white" href="/SignUp">SignUp</NavLink>

        </NavItem>

      ]
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });



  return (

    <Navbar color="#1b5e20 green darken-4" light expand="md" style={{ zIndex: "1", position: "fixed", opacity: "100%" }}>

      <NavbarBrand href="/"><img src={require("../logo4.png")} style={{ width: "45%" }} /></NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>

        <Nav className="mr-auto" navbar style={{ marginLeft: "500px" }} >

          {renderList()}
          <UncontrolledDropdown nav inNavbar style={{ marginLeft: "100px" }}>
            <DropdownToggle nav caret className="text-white" >
              Our Services
              </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <a className="text-success" href="/collection"> Collection</a>
              </DropdownItem>
              <DropdownItem>
                <a className="text-success" href="/transport"> Transportation</a>
              </DropdownItem>

              <DropdownItem>
                <a className="text-success" href="/biogas"> Biogas Set-Up</a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav caret className="text-white">
              Other
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <a className="text-success" href="/ewaste"> E-Waste</a>
              </DropdownItem>
              <DropdownItem>
                <a className="text-success" href="/donation"> Donation</a>
              </DropdownItem>
              <DropdownItem>
                <a className="text-success" href="/company"> Our Supporting Companies</a>
              </DropdownItem>
              <DropdownItem>
                <a className="text-success" href="/certificate">Tree Plantation</a>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <a className="text-success" href="/faqs"> FAQs</a>
              </DropdownItem>
              <DropdownItem>
                <a className="text-success" href="/contact"> Contact Us</a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

        </Nav>

      </Collapse>

    </Navbar>



  )

}
export default Navbar1

*/


import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import M from 'materialize-css'
import $ from 'jquery'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()

  const renderList = () => {
    if (state) {
      return [
        <NavItem key="home">
          <NavLink className="text-white" href="/">Home</NavLink>
        </NavItem>,
        <NavItem key="about">
          <NavLink className="text-white" href="/About">AboutUs</NavLink>
        </NavItem>,
        <NavItem key="profile">
          <NavLink className="text-white" href="/profile">Profile</NavLink>
        </NavItem>,
        <NavItem key="logout" className="mt-2 mt-md-0">
          <button
            className="btn #c62828 red darken-3"
            style={{ color: "white" }}
            onClick={() => {
              localStorage.clear()
              dispatch({ type: "CLEAR" })
              history.push('/')
            }}
          >
            Logout
          </button>
        </NavItem>
      ]
    } else {
      return [
        <NavItem key="home">
          <NavLink className="text-white" href="/">Home</NavLink>
        </NavItem>,
        <NavItem key="about">
          <NavLink className="text-white" href="/About">AboutUs</NavLink>
        </NavItem>,
        <NavItem key="login">
          <NavLink className="text-white" href="/login">Login</NavLink>
        </NavItem>,
        <NavItem key="signup">
          <NavLink className="text-white" href="/SignUp">SignUp</NavLink>
        </NavItem>
      ]
    }
  }

  // Keep Materialize init (no behavior change) in case you rely on it elsewhere
  document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  });

  return (
    <Navbar
      light
      expand="md"
      className="navbar-custom shadow-sm"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1030,
        opacity: "100%",
        backgroundColor: "#1b5e20" // same green tone, but via bg color not the 'color' prop
      }}
    >
      <div className="container-fluid px-3">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <img
            src={require("../logo4.png")}
            alt="logo"
            className="navbar-logo"
            style={{ display: 'block' }}
          />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="border-0" />

        <Collapse isOpen={isOpen} navbar>
          {/* Use flex gap & wrap instead of fixed margins */}
          <Nav navbar className="ms-auto d-flex align-items-center flex-wrap gap-2 gap-md-3">
            {renderList()}

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Our Services
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/collection">Collection</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/transport">Transportation</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/biogas">Biogas Set-Up</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Other
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/ewaste">E-Waste</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/donation">Donation</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/company">Our Supporting Companies</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/certificate">Tree Plantation</a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/faqs">FAQs</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="text-success d-block py-1" href="/contact">Contact Us</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navbar1
