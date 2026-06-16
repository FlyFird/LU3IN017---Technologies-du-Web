import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatGeneral = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'Vous' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* HEADER ajouté */}
      <header className="header px-4 py-2 flex gap-4 items-center shadow-md bg-white">
        <button onClick={() => navigate('/')} className="header-button">Dashboard</button>
        <button onClick={() => navigate('/chat/private')} className="header-button">Conversation Privée</button>
      </header>

      <div style={containerStyle}>
        <h2 style={headerStyle}>Conversation Publique</h2>

        <div style={boxStyle}>
          {messages.map((msg, idx) => (
            <div key={idx} style={messageStyle}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div style={inputStyle}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écris ton message ici..."
            style={inputFieldStyle}
          />
          <button onClick={handleSend} style={buttonStyle}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '20px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  fontFamily: 'sans-serif',
  alignItems: 'center',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '1rem'
};

const boxStyle = {
  height: '300px',
  overflowY: 'auto',
  border: '1px solid #ccc',
  padding: '30px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  marginBottom: '1rem'
};

const messageStyle = {
  marginBottom: '10px'
};

const inputStyle = {
  display: 'flex',
  gap: '10px'
};

const inputFieldStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '120px',
  height: '40px',
  fontSize: '1rem',
  backgroundColor: 'skyblue', 
  color: 'white',
  borderRadius: '6px',
  cursor: 'pointer',
  border: 'none'
};


export default ChatGeneral;
