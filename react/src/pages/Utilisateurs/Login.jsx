import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const token = localStorage.getItem('jwtToken');
    // console.log("token dans localStorage : ", token);

    if (token) {
      alert("tu es déjà connecté");
      navigate('/Accueil');
    }

    // console.log('donnée:', { email, password });

    fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log("token :", data);

        if (data.message === 'connexion réussie') {
          localStorage.setItem('jwtToken', data.token);
          navigate('/Accueil');
        } else {
          setMessage(data.message);
        }
      })
      .catch(err => {
        console.error('Erreur lors de la connexion:', err);
      });
  };


  return (
    <div className='w-screen h-screen  overflow-hidden '>
      <img src="/src/photo/logo.png" className='w-70 ml-10 mb-5 '></img>

      <div className='neumorph p-12 mr-12 ml-12 h-150 space-y-10  '>
        <h1 className='text-3xl md:text-4xl 2xl:text-5xl'>Se Connecter</h1>

        <input className="w-60 text-3xl pl-20 h-20 neumorph sm:h-17 sm:w-90 sm:ml-15 sm:mr-15 sm:mb-6 md:ml-10 md:mr-10 md:text-4xl
         md:w-130 md:pl-50 lg:w-200 lg:pl-90 2xl:text-7xl 2xl:pl-80" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-60 text-3xl pl-8 h-20 neumorph  sm:h-17 sm:w-90 sm:ml-15 sm:mr-15 sm:mb-10  md:ml-10 md:mr-10 md:text-4xl md:w-130 md:pl-30 2xl:w-200 lg:pl-75  lg:w-200 2xl:text-7xl 2xl:pl-50" type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="text-3xl neumorph h-20 w-60 sm:ml-15 sm:w-90 sm:h-17 sm:mr-15 sm:mb-6 md:ml-10 md:mr-10 md:text-4xl md:w-130 2xl:w-200 2xl:text-7xl lg:w-200" onClick={handleRegister}>Connexion</button>
        <button className="text-3xl neumorph h-20 w-60  sm:ml-15 sm:w-90 sm:h-17 sm:mr-15 sm:mb-2  md:ml-10 md:mr-10 md:text-4xl md:w-130 2xl:w-200 2xl:text-7xl lg:w-200" onClick={handleRegister}>S'inscrire ? </button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
