import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ChatScreen() {
  const { projectId } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5050/api/chat/${projectId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Erreur chargement messages:', err));
  }, [projectId]);

  const handleSend = async () => {
    if (!text.trim()) return;

    const res = await fetch('http://localhost:5050/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversationId: projectId,
        sender: 'Sara',
        text,
      }),
    });

    const newMsg = await res.json();
    setMessages((prev) => [...prev, newMsg]);
    setText('');
  };

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Chat here : {projectId}</h2>

      <div className="border rounded h-64 overflow-y-auto bg-white p-2 mb-4 shadow-inner">
        {messages.length === 0 ? (
          <p className="text-gray-500">Aucun message pour l'instant.</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index}><strong>{msg.sender}</strong> : {msg.text}</p>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
          placeholder="Écris un message..."
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
