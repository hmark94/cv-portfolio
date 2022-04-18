import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faFolder, faHandshake } from '@fortawesome/free-regular-svg-icons'

export default function About() {
  return (
    <section id='about'>
      <h5>Tudj meg többet</h5>
      <h2>rólam</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="http://placehold.jp/500x500.png" alt="profile_picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faCalendarCheck} />
              <h5>Tapasztalat</h5>
              <small>Lorem ipsum, dolor sit.</small>
            </article>

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faFolder} />
              <h5>Munkáim</h5>
              <small>Lorem ipsum, dolor sit.</small>
            </article>

            <article className='about__card'>
              <FontAwesomeIcon className='about__icon' icon={faHandshake} />
              <h5>Ügyfelek</h5>
              <small>Lorem ipsum, dolor sit.</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quidem possimus obcaecati harum! Quos soluta eius similique sunt perferendis eos labore nostrum nisi, harum fugiat, itaque laboriosam necessitatibus alias.
          </p>

          <a href='#contact' className='btn btn-primary'>Írj üzenetet!</a>
        </div>
      </div>
    </section>
  )
}
