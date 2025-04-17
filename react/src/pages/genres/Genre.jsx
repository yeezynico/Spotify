import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Genre() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/genres/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Données reçues :", data);
        setGenre(data);

        return Promise.all(
          data.albums.map((albumId) =>
            fetch(`http://localhost:8000/albums/${albumId}`)
              .then((res) => res.json())
              .then((albumData) => albumData.album)
          )
        );
      })
      .then(setAlbums)
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [id]);

  if (!genre) return <p>Chargement...</p>;

  return (
    <div className="overflow-scroll h-screen">
      <Navbar />
      <h1 className="text-center text-2xl font-bold mt-6">{genre.genre.name}</h1>

      <ul className="space-y-8  h-screen lg:mr-40 lg:ml-40">
        {albums.map((album) => (
          <li key={album.id}>
            <div className="neumorph ml-11 mr-11 flex flex-col sm:col-4 sm:flex-row justify-center h-20">
              <p>
                <Link to={`/album/${album.id}`} className="hover:underline">
                  {album.name}
                </Link>
              </p>
              <img src={album.cover_small} alt={album.name} className="w-12 h-12 ml-4"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;