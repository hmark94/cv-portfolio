import React from 'react'
import CV from '../../pics/Hatala Márk_CV_hun.pdf'

export default function CTA() {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>CV Letöltése</a>
            <a href='#contact' className='btn btn-primary'>Írj üzenetet!</a>
        </div>
    )
}
