import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faFolder, faHandshake } from '@fortawesome/free-regular-svg-icons'
import AboutMePic from '../../pics/FB_IMG_1626450375773.jpg'

export default function About() {
  return (
    <section id='about'>
      <h5>Tudj meg többet</h5>
      <h2>rólam</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMePic} alt="profile_picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faCalendarCheck} />
              <h5>Tapasztalat</h5>
              <small>Kisebb projektmunkák</small>
            </article>

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faFolder} />
              <h5>Munkáim</h5>
              <small>Portfolio alatt megtalálható néhány munkám</small>
            </article>

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faHandshake} />
              <h5>Ügyfelek</h5>
              <small>Még nem volt komolyabb ügyfelem</small>
            </article>

          </div>

          <p>
            A képzés során több projektet is készítettem önállóan, melyet az utolsó hónapban, egy kis csoportokba bontott projektmunka követett. Agilis szoftverfejlesztés, SCRUM módszerével haladtunk előre a munkában 1 hetes sprintekben, míg elkészültünk a projektmunkánkkal.
          </p>

          <a href='#contact' className='btn btn-primary'>Írj üzenetet!</a>
        </div>
      </div>
    </section>
  )
}
