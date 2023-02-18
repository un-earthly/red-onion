import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'
import logo from '../images/logo2.png'
import Button from './Button'
export default function Navbar() {
    const [user] = useAuthState(auth)
    const [navBG, setNavBG] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavBG(true)
        } else {
            setNavBG(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })


    return (
        <nav className={`z-10 flex justify-between itmes-center p-4 sticky top-0 ${navBG ? 'backdrop-blur-lg shadow-lg' : ''} `}>
            <Link to='/'> <img className='ml-16 h-10' src={logo} alt="" /></Link>

            <div>
                <Link to='cart'><i className="cursor-pointer hover:bg-[#f91944] px-3 py-2 duration-500 hover:text-white rounded-full bi bi-cart"></i></Link>
                {user
                    ?
                    <Button btnText='Sign Out' onclick={() => signOut(auth)} />
                    :
                    <>
                        <Link to='/login'><Button classList='bg-transparent text-black mx-2 hover:bg-[#f91944] hover:text-white' btnText='Login' /></Link>
                        <Link to='/register'><Button btnText='Register' classList='hover:bg-transparent bg-[#f91944] text-white border border-transparent hover:border hover:border-[#f91944] hover:text-black' /></Link>
                    </>


                }
            </div>
        </nav>
    )
}
