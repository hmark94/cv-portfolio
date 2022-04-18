import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>MARK HATALA</a>

      <ul className='permalinks'>
        <li><a href='#'>Főoldal</a></li>
        <li><a href='#about'>Rólam</a></li>
        <li><a href='#proficiency'>Portfolio</a></li>
        <li><a href='#contact'>Kapcsolat</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com/mark.hatala.18/' target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href='https://instagram.com/mark.hatala/' target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a href='https://github.com/hmark94/' target='_blank' rel="noopener noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Mark Hatala. All rights reserved.</small>
      </div>
    </footer>
  )
}
