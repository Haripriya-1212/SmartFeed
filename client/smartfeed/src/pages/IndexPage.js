import React, { useEffect, useState, useContext } from 'react';
import Newspost from '../component/Newspost';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';
// import { response } from 'express';
import './IndexPage.css';

export default function IndexPage() {

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include'
    } ).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;

  if(username != null){
    return <Navigate to={'/yourfeed'} />
  }

  

  
  return (
<<<<<<< HEAD
    <div className="page-container">
      {username && (
        <>
        <h1 className='welcome-message'>Hi {username}!</h1>
        </>
      )}
=======
    <div className='indexpage'>
>>>>>>> 173cea014c9835cc188b7e37ca01307b9c73bedd
      {!username &&(
        <>
        <h1 className='about-us'>About Us</h1>
        <p className='additional-text'>Blah Blah</p>
        </>
      )}
    </div>
  );
}
