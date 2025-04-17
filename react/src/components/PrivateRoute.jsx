import { Navigate } from 'react-router-dom';

const Disconecte = ({ children }) => {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return children;
};

const Connecte = ({ children }) => {
  const token = localStorage.getItem('jwtToken');
  
  if (token) {
    return <Navigate to="/Accueil" />;
  }

  return children;
};

export {Disconecte, Connecte};
