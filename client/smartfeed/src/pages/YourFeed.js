import React, { useEffect, useState } from 'react';
import Newspost from '../component/Newspost';
import Card from '../component/Card';

export default function YourFeed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => {
      // default method is get
      fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
          console.log(posts);
          setPosts(posts);
        });
      });
    }, [])
  return (
    <div className='yourfeed-page'>
    {/* Displaying from mongo db */}
    {posts.length>0 && posts.map(post => (<Newspost {...post}/>))}
    <br/>
    <h2>Wtever</h2><br/>
    <div className='cards'>
      {posts.length>0 && posts.map(post => (<Card {...post}/>))}
      {posts.length>0 && posts.map(post => (<Card {...post}/>))}
    </div>
    
    {/* <Newspost/>
    <Newspost/>
    <Newspost/> */}
    </div>
  );
}
