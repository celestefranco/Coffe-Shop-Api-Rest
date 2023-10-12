import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Elimina el token de autenticación (por ejemplo, desde las cookies o el almacenamiento local)
    // En este ejemplo, utilizaremos el almacenamiento local:
    localStorage.removeItem('accessToken');

    // Redirige al usuario a la página de inicio de sesión (o cualquier otra página)
    navigate('/login');
  };

  return (
    <div className='container'>
        <h2 className='text-center my-4'>Cerrar sesión</h2>
            <div className='loginform'>
                <button onClick={handleLogout} className='btn-cart'>Cerrar sesión</button>
            </div>
    </div>
  );
}
