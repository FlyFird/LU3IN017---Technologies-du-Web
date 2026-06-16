import React, { useEffect, useState } from 'react';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:5050/api/project');
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error('Erreur chargement projets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5050/api/project/${id}`, {
        method: 'DELETE'
      });
      fetchProjects();
    } catch (err) {
      console.error('Erreur suppression projet:', err);
    }
  };
  
  const togglePrivacy = async (id) => {
  try {
    await fetch(`http://localhost:5050/api/project/${id}/privacy`, { method: 'PATCH' });
    fetchProjects(); // refresh
  } catch (err) {
    console.error("Erreur privacy:", err);
  }
};

  const handleChatOpen = (projectId) => {
    window.location.href = `/chat/${projectId}`;
  };

  if (loading) return <p>Chargement des projets...</p>;

  return (
    <div className="project-list space-y-6">
      {projects.map((project) => (
        <div key={project._id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p><strong>Par :</strong> {project.firstName} {project.lastName}</p>
          <p><strong>Email :</strong> {project.email}</p>
          <p><strong>Description :</strong> {project.description}</p>

          {project.images && project.images.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-2">
              {project.images.map((imagePath, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:5050/${imagePath}`}
                  alt="image projet"
                  className="w-32 h-32 object-cover rounded"
                />
              ))}
            </div>
          )}

          <div className="mt-4 flex gap-4">
            <button onClick={() => handleDelete(project._id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Supprimer
            </button>
            <button onClick={() => handleChatOpen(project._id)} className="bg-blue-500 text-white px-3 py-1 rounded">
              Ouvrir chat
            </button>
            <button onClick={() => togglePrivacy(project._id)} className="bg-yellow-500 text-white px-3 py-1 rounded">
            {project.isPrivate ? "Rendre public" : "Rendre privé"}
              </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
