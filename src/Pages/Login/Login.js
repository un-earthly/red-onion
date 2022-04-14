import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()



        navigate(from, { replace: true })
    }
    return (
        <h2 onClick={handleLogin}>Login</h2>
    )
}
