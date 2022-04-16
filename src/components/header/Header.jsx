import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

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
          <img src='http://placehold.jp/150x250.png' alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Lap aljára</a>
      </div>
    </header>
  )
}
