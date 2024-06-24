import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, RegisterContext } from '../UserContext';
import { Navigate } from 'react-router-dom';

export default function Header() {
  // const [username, setUsername] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo, userInfo} = useContext(UserContext);
  const { registerInfo } = useContext(RegisterContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include'
    } ).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials:'include',
      method: 'POST'
    });
    setUserInfo(null);
    setRedirect(true);
  }

  const username = userInfo?.username;
  const register = registerInfo?.username;


  // if(redirect){
  //   return <Navigate to={'/'} />
  // }

  return (

    <header>
        <Link to="/" className="logo">SmartFeed</Link>
        <nav>
          {username && (
            <>
              <Link to="/yourFeed">Your Feed</Link>
              <Link to="/explore">Explore</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login" >Login</Link>
              <Link to="/register" >Register</Link>
            </>
          )}
        </nav>
      </header>
  )
}
