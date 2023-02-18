import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import Button from './Button'

export default function Social() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    if (user) {
        navigate(from || '/')
    }


    if (loading) {
        return <progress className="progress w-56 mx-auto block"></progress>
    }
    return (
        <div>
            <div className='flex items-center justify-center flex-row'>
                <div className="border border-[#f91944] w-full mr-2"></div>
                <p className="text-[#f91944] font-semibold">OR</p>
                <div className="border border-[#f91944] w-full ml-2"></div>
            </div>
            <Button onclick={() => signInWithGoogle()} btnText='CONTINUE WITH GOOGLE' classList={'w-full rounded-md border m-0 py-3 hover:border-[#f91944] hover:bg-transparent hover:text-[#f91944]'} />
            <small className='text-red-500 text-center block mt-4'>{error && error.message}</small>
        </div >
    )
}
