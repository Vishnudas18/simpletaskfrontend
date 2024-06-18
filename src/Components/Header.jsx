import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
 import './Header.css'

function Header() {
  return (
    <div>
         <MDBNavbar className='Navbar' light>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' style={{color:'whitesmoke'}}>
          <i class="fa fa-users m-2 fs-3" aria-hidden="true"></i>
            
            Simple Task Management
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
    
  )
}

export default Header