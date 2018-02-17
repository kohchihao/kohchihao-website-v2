import React from 'react'
import Link from 'gatsby-link'
import {
  Navbar,
  NavItem
} from 'react-materialize'

const Header = () => (
  <div className='blue-blue' >
    <div className='container'>
      <Navbar brand='Koh Chi Hao' className='blue-blue' right options={{ closeOnClick: true }}>
        <NavItem href='#'>Home</NavItem>
        <NavItem href='#appeared'>Appeared</NavItem>
        <NavItem href='#technology'>Technology</NavItem>
        <NavItem href='#projects'>Projects</NavItem>
      </Navbar>
    </div>
  </div>
)

export default Header
