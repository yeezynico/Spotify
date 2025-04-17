import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Album() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.error("erreur de chargement :", error));
  }, [id]);

  if (!data) return <p>Chargement...</p>;

  return (
    <div className='overflow-y-scroll h-screen'>
      <Navbar />
      <h1 className='mb-12 text-2xl'>{data.album.name}</h1>
      <img className='neumorph w-70 h-70 col-1/2 mt-6 ml-30 sm:col-1/4 mb-5 transform transition duration-200 hover:scale-125' src={data.album.cover} alt={data.album.name} />
      <p className='ml-13 mr-13 sm:ml-50 sm:mr-50 mt-12'>{data.album.description}</p>

      <h2 className='mt-12 text-2xl'>Liste des morceaux</h2>

      <ul className='justify-items-center mt-12 text-2xl '>
        {data.tracks.map((track) => (
          <li className="mt-12" >
            {track.track_no}. {track.name}
            <br />
            {/* TODO ajouter le fais de lire que 1 song  et pas 356789 en même tempsy*/}
            <audio controls className='justify-items-center mt-6'>
              <source src={track.mp3} type="audio/mpeg" />
            </audio>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Album;
