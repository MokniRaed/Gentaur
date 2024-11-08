import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Phone = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-1' >
        
        <FontAwesomeIcon color='#ffffff' width={20} icon={faPhone} />
        <p className='text-sm' >+1 (408)780-0908</p>
    </div>
  )
}

export default Phone