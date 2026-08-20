import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import ChatWindow from './ChatWindow/ChatWindow'
import axiosInstance from '../utils/axios'

const Index = () => {

    const [selectedChat, setSelectedChat] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [conversations, setConversations] = useState([]);

    async function fetchCurrentUser() {
      try{
        const response = await axiosInstance.get("/auth/me")
        console.log(response.data.user)

        setCurrentUser(response.data.user)
      }catch(error){
        console.log(error.response?.data)
      }
    }

    async function fetchConversations() {
      try {
        const response = await axiosInstance.get("/conversations");
        console.log(response.data);

        setConversations(response.data.conversations);
      } catch (error) {
        console.log(error.response?.data);
      }
    }

    useEffect(()=>{
      fetchCurrentUser()
      fetchConversations()
    },[])


  return (
    <div className='flex h-screen'>
      <Sidebar  setSelectedChat = {setSelectedChat} conversations = {conversations} />
      <ChatWindow selectedChat = {selectedChat} />
    </div>
    
  )
}

export default Index
