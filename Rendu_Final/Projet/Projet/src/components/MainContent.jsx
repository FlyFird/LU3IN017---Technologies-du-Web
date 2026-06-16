import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ChatsBare from './Chat/ChatsBare';
import ProjectList from './ProjectList';
import TextAreaField from './TextAreaField';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import { createProject } from './api';

function MainContent({ handleLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const hideHeader = location.pathname === '/chat/private';

  const [showDashboard, setShowDashboard] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
    description: '',
    images: []
  });

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map(file => ({ file, url: URL.createObjectURL(file) }));
    setUserData((prev) => ({ ...prev, images }));
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'images') {
        value.forEach(img => formData.append('images', img.file));
      } else {
        formData.append(key, value);
      }
    });

    formData.append('isPrivate', 'true');

    try {
      const response = await createProject(formData);
      const projectId = response._id;
      navigate(`/chat/${projectId}`);
    } catch (err) {
      alert("Erreur lors de la soumission.");
      console.error(err);
    }

    setSubmittedImages((prev) => [
      ...prev,
      {
        images: userData.images.map(img => img.url),
        uploader: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: userData.phone
        }
      }
    ]);

    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
      description: '',
      images: []
    });

    setShowForm(false);
    setShowDashboard(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto">
      {!hideHeader && (
        <header className="header">
          <button onClick={handleLogout} className="header-button">Se déconnecter</button>

          {userData.images[0] && (
            <div className="header-image-container">
              <img src={userData.images[0].url} alt="Image uploadée" className="header-image" />
            </div>
          )}

          <div className="flex gap-5">
            <button onClick={() => { setShowDashboard(true); setShowForm(false); }} className="header-button">
              Dashboard
            </button>
            <button onClick={() => { setShowForm(true); setShowDashboard(false); }} className="header-button">
              Create Project
            </button>
            <button onClick={() => navigate('/chat/general')} className="header-button">
              Discussion Publique
            </button>
            <button onClick={() => navigate('/chat/private')} className="header-button">
              Conversation Privée
            </button>
          </div>
        </header>
      )}

      <div className="flex flex-1">
        <ChatsBare />
        <div className="flex-grow bg-gray-100 pt-32 px-4 relative overflow-auto">
          {showDashboard && submittedImages.length > 0 && (
            <div className="gallery">
              {submittedImages.map((item, index) => (
                <div key={index} className="image-wrapper">
                  <img src={item.images[0]} alt={`submission-${index}`} />
                  <div className="uploader-centered">
                    <p>{item.uploader.firstName} {item.uploader.lastName}</p>
                    <p className="email">Mail: {item.uploader.email}</p>
                    <p className="contact">Contact: {item.uploader.phone}</p>
                  </div>
                </div>
              ))}
            </div>

          )}

          {showForm && (
            <form onSubmit={handleSubmitProject} className="form-container mt-24">
              <h1 className="text-2xl mb-4">Start creating now</h1>
              <input id="firstName" type="text" placeholder="Prénom" value={userData.firstName} onChange={handleInputChange} />
              <input id="lastName" type="text" placeholder="Nom" value={userData.lastName} onChange={handleInputChange} />
              <input id="email" type="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
              <input id="phone" type="tel" placeholder="Téléphone" value={userData.phone} onChange={handleInputChange} />
              <TextAreaField id="title" label="Project title" value={userData.title} onChange={handleInputChange} />
              <TextAreaField id="description" label="Description" value={userData.description} onChange={handleInputChange} />
              <ImageUpload onChange={handleImageChange} />
              <ImagePreview images={userData.images} submitted={false} />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded mt-4">Submit</button>
            </form>
          )}

          <ProjectList />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
