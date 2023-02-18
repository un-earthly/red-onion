import { useState } from 'react'

export default function useUserCredential() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    return { userName, setUserName, password, setPassword, email, setEmail, confPassword, setConfPassword }
}
