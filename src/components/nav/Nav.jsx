import React from 'react'
import './nav.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsHouse } from 'react-icons/bs'
import { faUser, faMessage, faLightbulb } from '@fortawesome/free-regular-svg-icons'


export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BsHouse /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FontAwesomeIcon icon={faUser} /></a>
      <a href='#proficiency' onClick={() => setActiveNav('#proficiency')} className={activeNav === '#proficiency' ? 'active' : ''}><FontAwesomeIcon icon={faLightbulb} /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FontAwesomeIcon icon={faMessage} /></a>
    </nav>
  )
}
