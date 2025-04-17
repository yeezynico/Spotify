import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';


function Accueil() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/albums?limit=10&page=1')
      .then((res) => res.json())
      // .then((da) => setData(da))
      .then((da) => {
        const ramdom = [...da].sort(() => Math.random() - 0.5);
        setData(ramdom)
      })
      .catch((error) => console.error("erreur de chargement :", error));
  },[])

  const truncateDescription = (description, wordLimit = 50) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
  };

  return (
    <div className='overflow-scroll h-screen'>
    <Navbar />
    <h1>Album à découvrir</h1>
    <ul className='space-y-8'>
      
      {data.map((dataAlbum) => (
        <li className='neumorph m-11 flex flex-col sm:col-4 sm:flex-row lg:ml-40 lg:mr-40 xl:mr-60 xl:ml-60  justify-center ' key={dataAlbum.id}>
          <img className='neumorph w-70 h-70 col-1/2 mt-6 ml-15 sm:col-1/4 mb-5 transform transition duration-200 hover:scale-125'  src={dataAlbum.cover} alt={dataAlbum.name} />
          <p className='col-1/2 w-70 mt-6 ml-15 mb-6 sm:mr-3 '> 
          <a className="" href={`/album/${dataAlbum.id}`}>
                {truncateDescription(dataAlbum.description, 50)}
              </a>
          </p>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Accueil;