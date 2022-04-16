import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../firebase.init'
import logo from '../images/logo2.png'
import Button from './Button'
export default function Navbar() {
    const [user, loading, error] = useAuthState(auth)

    loading ? toast('Plase Wait') : toast('Logged Out Successfully')

    return (
        <nav className="flex justify-between itmes-center p-4">
            <Link to='/'> <img className='ml-16 h-10' src={logo} alt="" /></Link>

            <div>
                <Link to='cart'><i className="cursor-pointer hover:bg-[#f91944] px-3 py-2 duration-500 hover:text-white rounded-full bi bi-cart"></i></Link>
                {user
                    ?
                    <Button btnText='Sign Out' onclick={() => signOut(auth)} />
                    :
                    <>
                        <Link to='/login'><Button classList='bg-transparent text-black mx-2 hover:bg-[#f91944] hover:text-white' btnText='Login' /></Link>
                        <Link to='/register'><Button btnText='Register' classList='hover:bg-transparent border border-transparent hover:border hover:border-[#f91944] hover:text-black' /></Link>
                    </>


                }
            </div>
        </nav>
    )
}
