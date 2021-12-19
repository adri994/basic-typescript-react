import React from 'react'
import logo from '../logo.svg'

interface Props {
  title: string
}

const Navbar = ({ title }:Props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">  
        <a className="navbar-brand fw-bold text-uppercase" href="/">
          <img src={ logo } alt="Logo react" style={{ width: '4rem' }} />
          { title }
        </a>
      </div>
    </nav>
  )
}

export default Navbar
