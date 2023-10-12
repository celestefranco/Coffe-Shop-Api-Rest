import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const url= 'http://localhost:5000/api/auth/register';

  const handleRegister = async () => {
    try {
      const response = await axios.post(url, {
        username,
        email,
        password,
        
      });

      if (response.status === 201) {
        // Registro exitoso, ahora puedes iniciar sesión
        setMessage('Registro exitoso. Inicia sesión.');
        // Aquí podrías redirigir al usuario a la página de inicio de sesión
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage('Hubo un error al procesar la solicitud.');
      }
    }
  };


  return (
    <div className='container'>
      <h2 className='text-center my-4'>Registro de Usuario</h2>
      <div className='regisform'>
        <input
          type='text'
          placeholder='Nombre de usuario'
          value={username}
          name='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          placeholder='Correo electrónico'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister} className='btn-cart'>
          Registrarse
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}