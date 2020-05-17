import React from 'react';

import ReactTimeAgo from 'react-time-ago';


function ChatMessage({content, sender, createdAt}) {
  return (
    <div className={sender === 'user' ? "chat-message user-message" : "chat-message"}>
      <div className="chat-message-foto">
        <img src="" alt=""/>
      </div>
      <div className="chat-message-text">
        {content}
      </div>
      <div className="chat-message-time">
        {createdAt ? <ReactTimeAgo date={createdAt.toDate()} /> : '...'}
      </div>
    </div>
  );
}

export default ChatMessage;