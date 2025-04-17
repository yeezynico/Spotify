import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { jwtDecode } from "jwt-decode";


const Profil = () => {
    const [email, setEmail] = useState();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token);

        fetch(`http://localhost:8081/api/user/${decodedToken.email}`)
            .then((response) => response.json()) 
            .then((data) => {setEmail(data[0].email)}) 
            .catch((error) => {
                console.error('Erreur lors de l info utilisateur:', error);
            });
    }, []); 

    return (
        <div>
            <Navbar />
            <h1 className='text-2xl'>Informations personnels</h1>
            <ul>
                
                    <li className='text-6xl mt-12'>
                        Email: {email} 
                    </li>
                
            </ul>
        </div>
    );
};

export default Profil;