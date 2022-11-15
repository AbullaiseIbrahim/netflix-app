import React from 'react'
import {useState} from 'react'
import './NavBar.css'

function NavBar() {
  const [fix, setFix] = useState(false)

  function setFixed() {
    if(window.scrollY >= 300) {
        setFix(true)
    }
    else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <div className={fix ? 'navbar-wrap fixed' : 'navbar-wrap'}>
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