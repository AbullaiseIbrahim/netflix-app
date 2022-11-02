import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar-wrap'>
        <div className="logo-col">
            <img src="/images/netflix-logo.png" alt="Netflix Logo" />
        </div>
        <div className="profile-col">
            <img src="/images/avatar-icon.png" alt="Profile Avatar" />
        </div>
    </div>
  )
}

export default NavBar