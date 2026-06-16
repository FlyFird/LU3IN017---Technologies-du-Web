import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatsBare() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:5050/api/project');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Erreur chargement projets:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="w-64 h-full bg-gray-900 text-white p-4 shadow-lg overflow-y-auto">
      {projects.map(project => (
        <div
          key={project._id}
          onClick={() => navigate(`/chat/${project._id}`)}
          className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded mb-2 transition"
        >
          <div className="font-bold text-sm truncate">{project.title}</div>
          <div className="text-xs text-gray-400 truncate">{project.description?.slice(0, 50)}...</div>
        </div>
      ))}
    </div>
  );
}

export default ChatsBare;
