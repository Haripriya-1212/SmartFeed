import React, { useEffect, useState, useContext } from 'react';
import Newspost from '../component/Newspost';
import { UserContext } from '../UserContext';
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

  
  return (
    <div className="page-container">
      {username && (
        <>
        <h1 className='welcome-message'>Hi {username}!</h1>
        </>
      )}
      {!username &&(
        <>
        <h1 className='about-us'>About Us</h1>
        <p className='additional-text'>Blah Blah</p>
        </>
      )}
    </div>
  );
}
