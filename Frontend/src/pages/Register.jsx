import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {

    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:3000/api/auth/register",
            {
                username,
                email,
                password
            },
            {
                withCredentials: true
            }
        );

        // console.log(response)
        setMessage(response.data.message);

        navigate("/login");

    } catch (error) {
        console.log(error)
    }
};


  return (
    <div className='h-screen bg-[#E3F2FD] flex justify-center items-center'>
            <div className='w-md bg-gray-100 border border-gray-100 p-8 rounded-md shadow'>
                <h2 className="text-xl font-semibold text-black underline mb-4">Register your ChatMe Account</h2>
                <form onSubmit={handleRegister} className='space-y-2'>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                        </label>
                        <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    
                    {message && (
                        <p className="text-lg text-center text-green-600">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded cursor-pointer"
                    >
                        Register
                    </button>
                    <div>
                        <p className="text-sm text-gray-600">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline cursor-pointer">Login</a>
                        </p>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Register
