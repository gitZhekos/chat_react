import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import firebase from 'firebase/app';
import firestore from '../firestore';

function ChatForm() {
  const initialItemValues = {
    content: ''
  };
  const [item, setItem] = useState(initialItemValues);
  const { id: chatId } = useParams();


  const handleKeyDown = (event) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      if (item.content.length) {
        let createdAt = firebase.firestore.FieldValue.serverTimestamp();
        firestore.collection('messages').doc().set({...item, chatId, sender: 'user', createdAt})
          .then(() => setItem(initialItemValues));
      }
    }
  }

  const handleChange = ({ target }) => {
    setItem({ content: target.value });
  }

  return (
    <div className="chat-form">
      <form>
        <div className="textarea-wrap">
          <textarea onKeyDown={handleKeyDown} onChange={handleChange} value={item.content} name="message" placeholder="Text"></textarea>
        </div>
        <div className="textarea-count-wrap">
          <div className="checkbox-wrap">
            <label>Press Enter to send</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatForm;