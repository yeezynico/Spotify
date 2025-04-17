import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Paginate from '../../components/Paginate';

function Albums() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchApi = () => {
    return fetch("http://localhost:8000/albums")
    .then((res) => res.json())
    .then((d) => {
      setData(d)
      setTotalItems(d.length);
    });
}

useEffect(() => {
  fetchApi()
}, [page, itemsPerPage]);

useEffect(() => {
  setTotalPages(Math.ceil(totalItems / itemsPerPage));
  const beginIndex = (page - 1 ) * itemsPerPage + 1 ;
  // console.log(beginIndex)
  const endIndex = beginIndex + itemsPerPage ;
  // console.log(endIndex)
  setFilteredData(data.slice(beginIndex, endIndex))
}, [totalItems, page]);


const truncateDescription = (description, wordLimit = 50) => {
  const words = description.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
};

  return (
    <div className='overflow-scroll h-screen'>
      <Navbar />
      <h1>Liste des albums</h1>
      <ul className='space-y-8'>
      <Paginate 
        page={page} 
        totalPages={totalPages} 
        setPage={setPage} 
        setItemsPerPage={setItemsPerPage} 
      />
        
        {filteredData.map((dataObj) => (
          <li className='neumorph m-11 flex flex-col sm:col-4 sm:flex-row lg:ml-40 lg:mr-40 xl:mr-60 xl:ml-60  justify-center ' key={dataObj.id}>
            <img className='neumorph w-70 h-70 col-1/2 mt-6 ml-15 sm:col-1/4 mb-5 transform transition duration-200 hover:scale-125'  src={dataObj.cover} alt={dataObj.name} />
            <p className='col-1/2 w-70 mt-6 ml-15 mb-6 sm:mr-3 '> 
              <a href={`/album/${dataObj.id}`}>
              {truncateDescription(dataObj.description, 50)}</a>
            </p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;