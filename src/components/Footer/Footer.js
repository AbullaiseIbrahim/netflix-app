import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-wrap'>
        <div className="footer-content">
            <div className="footer-logo">
                <img className="footer-netflix-logo" src="/images/netflix-logo.png" alt="Netflix Clone React made by Abuu"/>
            </div>
            <div className="footer-copyright">
                <p>Netflix Clone React made by <a href="https://github.com/AbullaiseIbrahim" rel="noreferrer" target="_blank">Abuu</a></p>
                <p className="footer-copyright">Copyrights @ Abuu 2022</p>
            </div>
            <div className="footer-social-logos">
                <a href="https://github.com/AbullaiseIbrahim" rel="noreferrer" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/abou_eel_leith/" rel="noreferrer" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:aboueelleith12@gmail.com">
                    <i className="fa-regular fa-envelope"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer