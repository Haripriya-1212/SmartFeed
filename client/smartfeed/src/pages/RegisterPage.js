import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { RegisterContext } from '../UserContext';


export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setRegisterInfo} = useContext(RegisterContext);

    async function register(ev) {
        ev.preventDefault();
        const registerData = { username, email, password };
        setRegisterInfo(registerData);
        console.log('Saved registration data');
        setRedirect(true);

        // try {
        //     const response = await fetch('http://localhost:4000/register', {
        //         method: 'POST',
        //         body: JSON.stringify({ username, email, password }),
        //         headers: { 'Content-Type': 'application/json' },
        //     });

            
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
            
        //     if(response.ok){
        //         const data = await response.json();
        //         console.log('Registration successful:', data);
        //         setRegisterInfo(data);
        //         console.log('Saved registration data');
        //         setRedirect(true);
        //     }
            

        // } catch (error) {
        //     console.error('Failed to fetch:', error);
        // }
    }

    if(redirect){
        return <Navigate to={'/choose'} />
      }

    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input
                type='text'
                placeholder='username'
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type='email'
                placeholder='email'
                value={email}
                onChange={ev => setEmail(ev.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            
            <button type='submit'>Register</button>
        </form>
    );
}
