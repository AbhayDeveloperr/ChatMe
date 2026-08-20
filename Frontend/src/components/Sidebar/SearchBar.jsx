import React, { useState } from 'react'
import axiosInstance from '../../utils/axios'

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div className='p-4'>
        <input type="text" placeholder='Search user..' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full px-4 py-2 bg-gray-100 rounded-lg outline-none' />
    </div>
  )
}

export default SearchBar
