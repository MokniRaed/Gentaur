import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Mail = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-1' >
        
        <FontAwesomeIcon color='#ffffff' width={20} icon={faEnvelope} />
        <p className='text-sm' >info@gentaur.com</p>
    </div>
  )
}

export default Mail