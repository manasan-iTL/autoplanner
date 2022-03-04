
import { MenuIcon } from '@heroicons/react/solid'

const Header = (props) => {
   return (
       <div className='h-24 flex flex-row justify-center items-center p-10 bg-gray-400'>
        <MenuIcon className='w-7 -ml-96'/>
        <h2 className='font-bold text-2xl text-center'>{props.text}</h2>
       </div>
   ) 
}

export default Header