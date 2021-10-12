import React, { useState } from 'react'
import { Link } from 'gatsby'
import Contact from '../pages/Contact'
import About from '../pages/About'
import logo from '../Assets/images/logo.svg'
import { FiAlignJustify } from 'react-icons/fi'





function Nav() {
  const [show, setShow] = useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt="simply recipe" />
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link to='/' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>home</Link>
          <Link to='/Recipes' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>recipe</Link>
          <Link to='/Tags' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>tags</Link>
          <Link to='/About' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>about</Link>
          <div className='nav-link contact-link'>
            <Link to='/Contact' className='btn'>Contact</Link>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Nav
