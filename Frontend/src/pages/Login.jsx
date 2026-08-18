import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [loginInput, setLoginInput] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
                username: loginInput,
                email: loginInput,
                password: password
            },
            {
                withCredentials: true
            }
        );
        console.log(response.data);

    } catch (error) {
        console.log(error);
        console.log(error.response?.data);
    }
};



  return (
    <div>
       <div className='h-screen bg-[#FFF7EB] flex justify-center items-center'>
            <div className='w-md bg-[#D0E7E6] border border-gray-100 p-8 rounded-md shadow'>
                <h2 className="text-xl font-semibold text-black underline mb-4">Login your ChatMe Account</h2>
                <form onSubmit={handleLogin} className='space-y-2'>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username or email
                        </label>
                        <input
                        type="text"
                        id="email"
                        name="email"
                        value={loginInput}
                        onChange={(e)=> setLoginInput(e.target.value)}
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
                    

                    <button
                        type="submit"
                        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded cursor-pointer"
                    >
                        Login
                    </button>
                    <div>
                        <p className="text-sm text-gray-600">
                        Already have an account? <a href="/register" className="text-blue-500 hover:underline cursor-pointer">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
