import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Üdvözöllek, az én nevem</h5>
        <h1>Hatala Márk</h1>
        <h5 className="text-light">Front-end tanuló</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src='http://placehold.jp/150x250.png' alt='profile_picture' />
        </div>

        <a href='#contact' className='scroll__down'><FontAwesomeIcon icon={faAngleDown} /></a>
      </div>
    </header>
  )
}
