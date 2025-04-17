import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscription from './pages/Utilisateurs/Subscription';
import Recherche from './pages/recherche/Recherche';
import Accueil from './pages/accueil/Accueil';
import User from './pages/Utilisateurs/User';
import Login from './pages/Utilisateurs/Login';
import Albums from './pages/albums/Albums';
import Album from './pages/albums/Album';
import Artistes from './pages/artistes/Artistes';
import Artiste from './pages/artistes/Artiste';
import Genres from './pages/genres/Genres';
import Genre from './pages/genres/Genre';
import Navbar from './components/Navbar';
import Paginate from './components/Paginate';
import Profil from './pages/Utilisateurs/Profil';


import { Disconecte, Connecte } from './components/PrivateRoute';



export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}

          <Route path='/' element={<Accueil />} />
          <Route path="/Subscription" element={<Connecte><Subscription /></ Connecte>} />
          <Route path='/Login' element={<Connecte><Login /></ Connecte>} />
          <Route path='/Profil' element={<Disconecte><Profil /></ Disconecte>} />

          <Route path='/Accueil' element={<Disconecte><Accueil /></ Disconecte>} />

          <Route path='/Navbar' element={<Disconecte><Navbar /></ Disconecte>} />
          <Route path='/Recherche' element={<Disconecte><Recherche /></ Disconecte>} />
          <Route path='/Paginate' element={<Disconecte><Paginate /></ Disconecte>} />

          <Route path='/User' element={<Disconecte><User /></ Disconecte>} />
          <Route path='/Login' element={<Disconecte><Login /></ Disconecte>} />

          <Route path='/Albums' element={<Disconecte><Albums /></ Disconecte>} />
          <Route path='/Album/:id' element={<Disconecte><Album /></ Disconecte>} />

          <Route path='/Artistes' element={<Disconecte><Artistes /></ Disconecte>} />
          <Route path='/Artiste/:id' element={<Disconecte><Artiste /></ Disconecte>} />

          <Route path='/Genres' element={<Disconecte><Genres /></ Disconecte>} />
          <Route path='/Genre/:id' element={<Disconecte><Genre /></ Disconecte>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}