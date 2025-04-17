import { useState, useEffect } from 'react';
import { data, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';


function Artiste() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
console.log(data);
  useEffect(() => {
    fetch(`http://localhost:8000/artists/${id}`)
      .then((res) => res.json())
      .then((d) => {  console.log(d);
        setData(d);
      })

      .catch((error) => console.error("erreur de chargement :", error));
  }, [id]);


  if (!data) return <p>Chargement...</p>;


  return (
    <div className='overflow-y-scroll h-screen'>
      <Navbar />
      <h1 className='mb-12 text-2xl'>{data.name}</h1>
      <img className='neumorph w-70 h-70 object-cover col-1/2 mt-6 ml-30 sm:col-1/4 mb-5 transform transition duration-200 hover:scale-125' src={data.photo} alt={data.name} />
      <p className='ml-13 mr-13 sm:ml-50 sm:mr-50 mt-12 mb-10'>{data.description}
        {data.bio}</p> 
    </div>
  );
}

export default Artiste;
