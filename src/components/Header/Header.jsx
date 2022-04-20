
// import { MenuIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
import { CommonButton } from '../commonUI'

const Header = (props) => {
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const signout = () => {
        signOut(auth).then(() =>{
            console.log("logout")
            
            navigate('/')
        }).catch((error) => {
            console.log("Error")
        })
    }
    return (
       <header className='p-10 bg-gray-400 flex flex-row justify-around'>
        <h2 className='font-bold text-2xl bg-teal-500' >Auto Planner</h2>
        <nav>
            
            { user !== null ?  
            <ul>
                <li>
                    <CommonButton text="ログアウト" onClick= {signout}/>
                </li>
            </ul> :
            <ul className='flex flex-row'>
                <li className='mr-3'>このサイトについて</li>
                <li>利用方法</li>
            </ul>
            }
        </nav>
       </header>
    ) 
}

export default Header