import React, { useEffect, useState } from 'react';
import Newspost from '../component/Newspost';

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
    <>
    {/* Displaying from mongo db */}
    {posts.length>0 && posts.map(post => (<Newspost {...post}/>))}
    
    {/* <Newspost/>
    <Newspost/>
    <Newspost/> */}
    </>
  );
}
