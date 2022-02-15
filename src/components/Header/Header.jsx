
import { MenuIcon } from '@heroicons/react/solid'

const Header = (props) => {
   return (
       <div className='h-24 flex flex-row justify-start items-center p-10 bg-gray-400'>
        <MenuIcon className='w-7'/>
        <h2 className='font-bold text-2xl text-center ml-96 '>{props.text}</h2>
       </div>
   ) 
}

export default Header