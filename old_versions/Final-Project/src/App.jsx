import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { createProject } from './components/api';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HandleSubmitProject from './components/handleSubmitProject';
import Pattern from './components/Pattern';
import Loader from './components/Loader';
import ChatScreen from './components/Chat/ChatScreen';
import ChatGeneral from './components/Chat/ChatGeneral';
import MainContent from './components/MainContent';
import PrivateChat from './components/PrivateChat';
import Signin from './components/Signin.jsx'
import Login from './components/Login.jsx'
import Profil from './components/Profil.jsx'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentPage('form');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage("login");
  };

  const handleSignup = () => setCurrentPage('form');
  const switchToSignup = () => setCurrentPage('signup');
  const switchToLogin = () => setCurrentPage('login');

  if (isLoading) return <Loader />;

  if (currentPage === 'login') {
    return (
      <Pattern>
        <div className="flex flex-col justify-center items-center p-4">
          <LoginForm onSuccess={handleLogin} />
          <p className="text-center mt-4">
            Pas encore de compte ? <span onClick={switchToSignup} style={{ color: 'blue', cursor: 'pointer' }}>Inscris-toi</span>
          </p>
        </div>
      </Pattern>
    );
  }

  if (currentPage === 'signup') {
    return (
      <Pattern>
        <div className="flex flex-col justify-center items-center p-4">
          <SignupForm onSuccess={handleSignup} />
          <p className="text-center mt-4">
            Déjà un compte ? <span onClick={switchToLogin} style={{ color: 'blue', cursor: 'pointer' }}>Connecte-toi</span>
          </p>
        </div>
      </Pattern>
    );
  }

  return (
    <Pattern>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent handleLogout={handleLogout} />} />
          <Route path="/chat/:projectId" element={<ChatScreen />} />
          <Route path="/chat/general" element={<ChatGeneral />} />
          <Route path="/chat/private" element={<PrivateChat />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="*" element={<div>Page non trouvée</div>} />
        </Routes>
      </Router>
    </Pattern>
  );
}

export default App;
