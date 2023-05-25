import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CarlWidget = () => {
  return (
    <div className='icono'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>10</span>
    </div>
  )
}

export default CarlWidget