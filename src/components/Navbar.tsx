import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import Button from '@/app/libraries/Button/Button'
export default function Navbar() {
    return (
        <nav className='w-full h-20 p-4 flex justify-between items-center bg-white shadow-gray-500 shadow-sm'>
            {/* navbar title */}
            <span className='font-bold text-2xl'>
                Where in the world ?
            </span>

            {/* darck mode section */}
            <Button variant='ghost' className='bg-gray-700 text-white hover:text-gray-700'>
                <div className='flex gap-4'>
                    <FontAwesomeIcon  icon={faMoon} size='sm' data-testid="icon" />
                    <div>Dark Mode</div>
                </div>
            </Button>
        </nav>
    )
}

