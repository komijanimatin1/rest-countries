import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
export default function Navbar() {
    return (
        <nav className='w-full h-20 p-4 flex justify-between items-center shadow-gray-500 shadow-sm'>
            <span className='font-bold text-2xl'>
                Where in the wold ?
            </span>

            {/* darck mode section */}
            <span className='w-25 h-full p-2 flex items-center gap-2'>
                <FontAwesomeIcon icon={faMoon}/>
                <span>Dark Mode</span>
            </span>
        </nav>
    )
}

