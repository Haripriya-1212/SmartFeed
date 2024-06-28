import React, { useEffect, useState, useContext } from 'react';
import Newspost from '../component/Newspost';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';
// import { response } from 'express';
import ContentSection from '../component/ContentSection';
import Benefits from './Benefits';
import Footer from '../component/Footer';

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
    <div className="index-page">
      {/* {username && (
        <>
        <h1 className='welcome-message'>Hi {username}!</h1>
        </>
      )} */}
      {!username &&(
        <>
        <h1 className='about-us'>About Us</h1>
        <p >Welcome to SmartFeed! your personalized news feed recommender system designed to enhance your news consumption experience. Engage with news through interactive features, save articles for later, and enjoy a seamless experience across all your devices. </p>
        <p>Stay informed with SmartFeed, where news is made personal.</p>
        </>
      )}
      <ContentSection/>
      <Benefits/>
      <Footer/>
    </div>
  );
}
