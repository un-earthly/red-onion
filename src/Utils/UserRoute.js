import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
export default function UserRoute({ children }) {
    const [user] = useAuthState(auth)
    const location = useLocation()
    if (user) {
        return children
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

}
