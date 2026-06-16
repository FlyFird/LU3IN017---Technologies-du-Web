import { useEffect, useRef } from 'react';

export default function ChatWindow({ messages }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="w-2/3 p-4 overflow-y-auto">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          <span className="font-semibold">{msg.sender}:</span> {msg.text}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
