import React, { useContext, useEffect, useState } from 'react';
import { UserContext, RegisterContext } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  // const [username, setUsername] = useState(null);
  const {setUserInfo, userInfo} = useContext(UserContext);
  const { registerInfo } = useContext(RegisterContext);
  const navigate = useNavigate();

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
    navigate('/');
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
