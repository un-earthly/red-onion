import React from 'react'
import logo from '../images/logo2.png'
import Button from './Button'
export default function Navbar() {
    return (
        <nav className="flex justify-between itmes-center p-4">
            <img className='ml-16 h-10' src={logo} alt="" />
            <div>
                <i className="cursor-pointer hover:bg-[#f91944] px-3 py-2 duration-500 hover:text-white rounded-full bi bi-cart"></i>
                <Button classList='bg-transparent text-black mx-2 hover:bg-[#f91944] hover:text-white' btnText='Login' />
                <Button btnText='Register' classList='hover:bg-transparent hover:border hover:border-[#f91944] hover:text-black' />
            </div>
        </nav>
    )
}
