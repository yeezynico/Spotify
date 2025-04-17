import { Link } from 'react-router-dom';
import Logout from '../pages/Utilisateurs/logout';
import axios from 'axios';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Navbar = () => {
  const [searchResults, setSearchResults] = useState({
    artists: [],
    albums: [],
    genres: []
  });
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('artist');

  const handleSearch = (query, type) => {
    setLoading(true);
    setSearchType(type);

    const url = `http://localhost:8000/search?query=${query}&type=${type}`;

    axios
      .get(url, {
        headers: {
          'accept': '*/*',
        },
      })
      .then((response) => {
        console.log(response.data);
        const results = response.data;

        if (type === 'artist') {
          setSearchResults({
            artists: results.artists ? results.artists : [],
            albums: [],
            genres: [],
          });
        } else if (type === 'album') {
          setSearchResults({
            artists: [],
            albums: results.albums ? results.albums : [],
            genres: [],
          });
        } else if (type === 'genre') {
          setSearchResults({
            artists: [],
            albums: [],
            genres: results.genres ? results.genres : [],
          });
        }
      })
      .catch((error) => {
        console.error('Erreur de recherche :', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <nav className='overflow-hidden w-full p-12'>
      <img src="/src/photo/logo.png" className='w-70 mb-5' alt="Logo" />
      <ul className='text-white text-xs flex justify-between items-center h-7 mb-15 lg:text-4xl lg:mt-12'>
        <li><Link to="/Accueil" className="text-white neumorph p-3 md:p-6">Home</Link></li>
        <li><Link to="/Albums" className="text-white neumorph p-3 md:p-6">Albums</Link></li>
        <li><Link to="/Artistes" className="text-white neumorph p-3 md:p-6">Artistes</Link></li>
        <li><Link to="/Genres" className="text-white neumorph p-3 md:p-6">Genres</Link></li>
        <li><Link to="/Profil" className="text-white neumorph p-3 md:p-6">Profil</Link></li>
      </ul>

      <SearchBar onSearch={handleSearch} searchType={searchType} />

      {loading && <p>Chargement...</p>}

      <div className='text-xl pl-12 pr-12 '>
        {searchResults.artists && searchResults.artists.length > 0 && (
          <div>
            <h3>Artistes</h3>
            <ul>
              {searchResults.artists.map((artist) => (
                <li className="border-t pt-6 pb-6" key={artist.id}>
                  <img src={artist.photo} alt={artist.name} width={50} height={50} />
                  {artist.name}
                </li>
              ))} 
            </ul>
          </div>
        )}

        {searchResults.albums && searchResults.albums.length > 0 && (
          <div className='text-xl pl-12 pr-12 '>
            <h3>Albums</h3>
            <ul>
              {searchResults.albums.map((album) => (
                <li className='border-t pt-6 pb-6' key={album.id}>
                  <img src={album.cover_small} alt={album.name}  />
                  {album.name}
                </li>
              ))}
            </ul>
          </div>
        )}
   {searchResults.genres && searchResults.genres.length > 0 && (
  <div>
    <h3>Genres</h3>
    <ul>
      {searchResults.genres.map((genre, index) => (
        <li className='border-t pt-6 pb-6' key={index}>
          {typeof genre === 'object' ? genre.name : genre}  
        </li>
      ))}
    </ul>
  </div>
)}
      </div>

      <Logout />
    </nav>
  );
};

export default Navbar;
