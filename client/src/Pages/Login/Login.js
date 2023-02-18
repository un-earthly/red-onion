import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Utils/Button'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Social from '../../Utils/Social'
export default function Login() {
    const [showpass, setShowpass] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailUserLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true })
    }
    return (
        <div className='max-w-sm mx-auto rounded-lg overflow-hidden p-6 pb-12 mb-4'>
            <h2 className="text-2xl font-bold text-center my-10">Login</h2>
            <form onSubmit={handleLogin} className=" space-y-10">
                <div className="relative">
                    <input id='email' ref={emailRef} type="text" name="email" required placeholder=" " className="block w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <label htmlFor="email" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Email</label>
                </div>
                <div className="relative ">
                    <input type={showpass === false ? 'password' : 'text'} required id='password' name="password" placeholder=" " className="w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <i className={`absolute top-3 right-4 bi bi-${showpass ? 'eye-slash' : 'eye'}`} onClick={() => setShowpass(!showpass)}></i>
                    <label htmlFor="password" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Password</label>
                </div>
                <Button btnText='Login' classList={'w-full rounded-md border m-0 py-3 hover:border-[#f91944] hover:bg-transparent hover:text-[#f91944]'} />

            </form>
            <Link to='/register'><p className="text-[#f91944] m-3 text-center cursor-pointer">New Here? Sign Up</p></Link>


            <Social />
        </div>
    )
}
