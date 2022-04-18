import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/markhatala/' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/hmark94' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
}
