import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/login');
    };

    return (
        <>
        <button onClick={handleLogout} className="btn-logout" >
            Déconnexion
        </button>
        </>
    );
}

export default Logout;
