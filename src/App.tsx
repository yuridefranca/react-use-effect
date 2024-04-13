import { useState } from 'react';
import { ChatRoom } from './ChatRoom';

export default function App() {
  const [ chatRoomId, setChatRoomId  ] = useState('')
  const [ isChatVisible, setIsChatVisible ] = useState(false)

  const toggleChatVisibilityHandler = () => {
    if (!chatRoomId) {
      alert('You must select a chat room before open it!')
      return
    }

    setIsChatVisible(!isChatVisible)
  }

  return (
    <main>
      <form action="">
        <label htmlFor="select_chat_room">Chose the chat Room: </label>
        <select name="chat_room" id="select_chat_room" value={chatRoomId} onChange={e => e.target.value && setChatRoomId(e.target.value)}>
          <option value="">Choose a room</option>
          <option value="General">General</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Information Technology">Information Technology</option>
        </select>
        <button type="button" onClick={toggleChatVisibilityHandler}>{ isChatVisible ? 'Close chat' : 'Open chat' }</button>
      </form>

      { isChatVisible && <ChatRoom chatRoomId={chatRoomId} /> }
    </main>
  )
}
