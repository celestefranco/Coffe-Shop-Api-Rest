import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Inicializa navigate

    const url = 'http://localhost:5000/api/auth/login';

    const handleLogin = async () => {
        try {
            const response = await axios.post(url, { username, password });

      
          if (response.data.accessToken) {
            // Almacena el token en el almacenamiento local o en las cookies
            navigate('/profile');
      
            // Redirige al usuario o realiza otras acciones
          } else {
            // Maneja errores de inicio de sesión
          }
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      };
  
    return (
      <div className='container'>
        <h2 className='text-center my-4'>Iniciar Sesion</h2>
            <div className='loginform'>
                <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className='btn-cart'>Iniciar sesión</button>
                <br></br>
                <p className='text-center'>¿No tienes cuenta? <Link to="/register"><strong>Registrate</strong></Link></p>
            </div>
            
      </div>
    );
}
    
