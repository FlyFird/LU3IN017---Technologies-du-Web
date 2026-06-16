// src/Chat/ChatSidebar.jsx
import React from 'react';

export default function ChatSidebar({ conversations, onSelect, selectedId }) {
  return (
    <div className="w-1/3 bg-gray-100 border-r overflow-y-auto">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          className={`p-4 cursor-pointer hover:bg-gray-200 ${
            selectedId === conv.id ? 'bg-gray-300' : ''
          }`}
        >
          <h3 className="font-bold">{conv.name}</h3>
          <p className="text-sm text-gray-600">{conv.lastMessage}</p>
        </div>
      ))}
    </div>
  );
}
