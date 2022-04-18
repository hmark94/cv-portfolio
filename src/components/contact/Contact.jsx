import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { RiMessengerLine } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact'>
      <h5>Kapcsolat</h5>
      <h2>Írj üzenetet</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <FontAwesomeIcon icon={faEnvelope} className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hatala.mark@gmail.com</h5>
            <a href='mailto:hatala.mark@gmail.com' target='_blank' rel="noopener noreferrer">Írj E-mailt</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Mark Hatala</h5>
            <a href='https://m.me/mark.hatala.18/' target='_blank' rel="noopener noreferrer">Írj üzenetet</a>
          </article>

          <article className="contact__option">
            <FaViber className='contact__option-icon' />
            <h4>Viber</h4>

            <a href='https://chatapi.viber.com/pa/send_message' target='_blank' rel="noopener noreferrer">Írj Viberen</a>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Teljes Név' required />
          <input type="email" name='email' placeholder='E-mail cím' required />
          <textarea name="message" rows="7" placeholder='Üzenet írása' required></textarea>
          <button type='submit' className='btn btn-primary'>Üzenet küldése</button>
        </form>
      </div>
    </section>
  )
}
