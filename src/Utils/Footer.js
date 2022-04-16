import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
export default function Footer() {
    return (

        <footer className="pt-12 bg-[#110f0f] text-white sm:p-6text-white">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to='/' className="flex items-center">
                        <img src={Logo} className="h-8 pl-12" alt="Red Onion Logo" />
                    </Link>
                </div>
                <div className="flex">
                    <ul className='text-sm  mr-48'>
                        <li className="my-2">
                            <a href="" className="hover:underline duration-500">About Online food</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline duration-500">Read our blog</a>
                        </li>
                        <li className="my-2">
                            <a href="" className="hover:underline duration-500">Sign Up To Deliver</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline duration-500">Add Your Restaurent</a>
                        </li>
                    </ul>
                    <ul className='text-sm mr-24'>
                        <li className="my-2">
                            <a href="#" className="hover:underline duration-500">Get Help</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline duration-500">Read FAQs</a>
                        </li>
                        <li className="my-2">
                            <a href="" className="hover:underline duration-500">View All Cities</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline duration-500">Restaurents Near Me</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between pb-12 px-12">
                <span className="text-sm sm:text-center dark:text-gray-400">© 2022 <a target={"_blank"} href="https://github.com/un-earthly" className="hover:underline">Alamin</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a>Privecy Policy</a>
                    <a>Terms Of Use</a>
                    <a>Pricing</a>
                </div>
            </div>
        </footer>

    )
}
