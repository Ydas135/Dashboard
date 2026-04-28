import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/UseAuth';

export const LoginPage = () => {

    const { login } = useAuth()
    const navigate = useNavigate();

    const [ form, setForm ] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login( { username: form.username, password: form.password })
            navigate("/")
        }   catch{
            console.error("Credenciales incorrectas");
        }
    }

  return (
    <form 
        className='min-h-screen flex justify-center items-center'
        onSubmit={handleSubmit}
    >
        <div>
            <h2>Login</h2>
            <input 
            type="text" 
            className="w-full focus:outline-white/50 px-4 border border-slate-700 rounded-lg" placeholder='username'
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input 
            type="password" 
            className="w-full focus:outline-white/50 px-4 border border-slate-700 rounded-lg" placeholder='password'
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button type="submit">
                Submit
            </button>
        </div>
    </form>
  )
}
