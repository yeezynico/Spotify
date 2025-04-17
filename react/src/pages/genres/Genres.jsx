import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

function Genres() {
  const [data, setData] = useState([])

  const fetchApi = () => {
    return fetch("http://localhost:8000/genres")
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className=' overflow-scroll h-screen '>
      <Navbar />

      <ul className='space-y-8 md:columns-2 lg:columns-4 mb-12'>
        {data.map((dataObj, index) => {
          return (
            <div key={dataObj.id} className='neumorph ml-11 mr-11  flex flex-col sm:col-4 sm:flex-row  lg:mb-20 justify-center h-20 '>

              {/* TODO root pour les ID */}
              <p className='mt-7'><a href={`/genre/${dataObj.id}`}>{dataObj.name}</a></p>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default Genres;