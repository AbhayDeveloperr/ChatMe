import React, { useState } from 'react'
import axiosInstance from '../../utils/axios'

const SearchBar = ({setSelectedChat , fetchConversations}) => {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (value) => {
    try {
      const response = await axiosInstance.get(
        `/users/search?username=${value}`
      );

      console.log(response.data.users);

      setUsers(response.data.users);

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleCreateConversation = async (userId) => {
    try {
      const response = await axiosInstance.post("/conversations", {
        receiverId: userId,
      });

      console.log(response.data);

      setSelectedChat(response.data.conversation.otherUser);

      fetchConversations();

      setSearch("");
      setUsers([]);

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className='p-4'>
        <input type="text" placeholder='Search user..' value={search} onChange={(e) => {
          setSearch(e.target.value)
          handleSearch(e.target.value)
        }} className='w-full px-4 py-2 bg-gray-100 rounded-lg outline-none' />

        {users.length > 0 && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow">
            {users.map((chat) => (
              <div key={chat._id} onClick={() => handleCreateConversation(chat._id)} className="px-4 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
                <h3 className="font-medium">{chat.username}</h3>
                <p className="text-sm text-gray-500">{chat.email}</p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default SearchBar
