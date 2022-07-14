import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ProfilPic from '../../pics/Profil_2-removebg-preview.png'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Üdvözöllek, az én nevem</h5>
        <h1>Hatala Márk</h1>
        <h5 className="text-light">Junior fejlesztő</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ProfilPic} alt='profile_picture' />
          <h5>2022-ben végeztem a Progmatic Junior Frontend képzésén. A HTML5, CSS3 és SASS megismerését követően a Javascript, Ecmascript 6 bebiztosítása következett. Ezután React környezetben mélyítettem el tudásomat.</h5>
        </div>

        <a href='#contact' className='scroll__down'><FontAwesomeIcon icon={faAngleDown} /></a>
      </div>
    </header>
  )
}
