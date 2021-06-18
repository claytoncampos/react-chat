import React from 'react';
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';
import { auth } from 'firebase';

const Chats = () => {
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">React Chat</div>
        <div className="logout-tab">Sair</div>
      </div>
      <ChatEngine height="calc(100vh -66px)" projectID=""></ChatEngine>
    </div>
  );
};

export default Chats;
