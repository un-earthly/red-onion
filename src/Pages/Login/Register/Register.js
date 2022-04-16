import React, { useRef, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init'
import Button from '../../../Utils/Button'

export default function Register() {
    const [showpass, setShowpass] = useState(false)
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const [CreateUserWithEmailAndPassword, emailUser, emailUserLoading, emailUserError] = useCreateUserWithEmailAndPassword(auth)
    if (emailUserError) {
        toast(emailUserError.message)
    }
    if (emailUserLoading) {
        toast('Please Wait')
    }
    const handleRegister = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        if (email && password) {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8}$/.test(password) && password === confirmPassword) {
                CreateUserWithEmailAndPassword(email, password)
            } else {
                toast('please enter a password with Min 1 uppercase letter 1 special character 1 number and 8 charachters only.')
            }
        } else {
            toast('please fill out all the fields properly')
        }
    }
    return (



        <div className='max-w-sm mx-auto rounded-lg overflow-hidden p-6 pb-12 mb-4'>
            <h2 className="text-2xl font-bold text-center my-10">Register</h2>
            <form onSubmit={handleRegister} className=" space-y-10">
                <div className="relative">
                    <input ref={nameRef} id='name' required type="text" name="name" placeholder=" " className="block w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <label htmlFor="email" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Name</label>
                </div>
                <div className="relative">
                    <input ref={emailRef} id='email' required type="email" name="email" placeholder=" " className="block w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <label htmlFor="email" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Email</label>
                </div>
                <div className="relative ">
                    <input ref={passwordRef} type={showpass === false ? 'password' : 'text'} required id='password' name="password" placeholder=" " className="w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <i className={`absolute top-3 right-4 bi bi-${showpass ? 'eye-slash' : 'eye'}`} onClick={() => setShowpass(!showpass)}></i>
                    <label htmlFor="password" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Password</label>
                </div>


                <div className="relative ">
                    <input ref={confirmPasswordRef} type={showpass === false ? 'password' : 'text'} required id='confirmpass' name="confirmpass" placeholder=" " className="block w-full appearance-none focus:outline-none bg-gray-100 p-3 rounded-xl" />
                    <label htmlFor="confirmpass" className="absolute top-3 left-3 -z-1 duration-300 origin-0">Confirm Password</label>
                </div>
                <Button btnText='Register' classList={'w-full rounded-md border m-0 py-3 hover:border-[#f91944] hover:bg-transparent hover:text-[#f91944]'} />

            </form>
            <ToastContainer />
            <Link to='/login'><p className="text-[#f91944] m-3 text-center cursor-pointer">Already Have An Account? Login</p></Link>
        </div>
    )
}
