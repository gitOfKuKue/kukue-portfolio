import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ContactIcons = ({contact}) => {
  return (
    <>
    <a href={contact.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={contact.icon} className='text-4xl'/>
    </a>
    </>
  )
}

export default ContactIcons