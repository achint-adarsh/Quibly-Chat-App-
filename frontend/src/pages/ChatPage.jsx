import React from 'react';
import {useAuthStore } from "../store/useAuthStore";

function ChatPage() {
  const {logout} = useAuthStore();

  return (
    <div className='text-red-300 flex flex-col items-center justify-center p-4  z-10' >
      ChatPage
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default ChatPage
