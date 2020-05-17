import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import firestore from '../firestore';

import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import './Chat.css';

function Chat({match}) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').where('chatId', '==', match.params.id).orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const allMessages = [];

        snapshot.forEach((doc) => allMessages.push({id: doc.id, ...doc.data()}));

        setMessages(allMessages);
      });

    return () => {
      unsubscribe()
    };
  }, [match.params.id]);

  const renderMessages = () => {
    if (!messages) {
      return (
        <div className="chat-empty">
          <p>Loading...</p>
        </div>
      )
    }
    if (!messages.length) {
      return (
        <div className="chat-empty">
          <p>There's no messages yet</p>
        </div>
      )
    }
    
    return messages.reverse().map((message) => (
      <ChatMessage key={message.id} {...message} />
    ))
  };

  return (
    <div className="chat-block">
      <div className="chat">
        {renderMessages()}
      </div>

      <ChatForm />
    </div>
  );
}

export default Chat;