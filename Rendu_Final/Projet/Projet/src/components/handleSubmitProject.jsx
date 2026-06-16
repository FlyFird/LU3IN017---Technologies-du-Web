import { useNavigate } from 'react-router-dom';
import { createProject } from './api';
import ChatsBare from './Chat/ChatsBare';
import ProjectList from './ProjectList';
import TextAreaField from './TextAreaField';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';

function HandleSubmitProject({ 
  userData, 
  setUserData, 
  submittedImages, 
  setSubmittedImages, 
  setShowDashboard, 
  showDashboard, 
  setShowForm 
}) {
  const navigate = useNavigate();

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
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <ChatsBare />

        <div className="flex-grow bg-gray-100 p-4 relative overflow-auto">
          {showDashboard && userData.images[0] && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <img
                src={userData.images[0].url}
                alt="image projet"
                className="w-32 h-32 object-cover rounded shadow"
              />
            </div>
          )}

          <form onSubmit={handleSubmitProject} className="form-container mt-8">
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

          <ProjectList />
        </div>
      </div>
    </div>
  );
}

export default HandleSubmitProject;
