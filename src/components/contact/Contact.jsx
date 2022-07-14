import React, { useState, useEffect } from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { RiMessengerLine } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

/*=========== FIREBASE ============*/
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

export default function Contact() {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const messagesCollectionRef = collection(db, "messages")


  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(messagesCollectionRef, {
      name: newName,
      email: newEmail,
      message: newMessage,
    })
      .then(() => {
        alert('Üzenet elküldve📨')
      })
      .catch((error) => {
        alert(error.message);
      });

    setNewName('');
    setNewEmail('');
    setNewMessage('');
  }




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

        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Teljes Név' value={newName} onChange={(e) => setNewName(e.target.value)} required />
          <input type="email" name='email' placeholder='E-mail cím' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required />
          <textarea name="message" rows="7" placeholder='Üzenet írása' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} required></textarea>
          <button type='submit' className='btn btn-primary'>Üzenet küldése</button>
        </form>

      </div>
    </section>
  )
}
