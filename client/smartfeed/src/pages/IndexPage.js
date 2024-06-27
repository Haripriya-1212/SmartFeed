import React, { useEffect, useState, useContext } from 'react';
import Newspost from '../component/Newspost';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';
// import { response } from 'express';

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
    <div>
      {!username &&(
        <h1>About Us</h1>
      )}
    </div>
  );
}
