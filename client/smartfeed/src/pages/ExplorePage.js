import React from 'react'
import { useEffect, useState } from 'react';
import Newspost from '../component/Newspost';
import Card from '../component/Card';

export default function ExplorePage() {
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
    <div className='exploreContent'>
    {/* Displaying from mongo db */}
    {posts.length>0 && posts.map(post => (<Card {...post}/>))}
    {/* {posts.length>0 && posts.map(post => (<Card {...post}/>))}
    {posts.length>0 && posts.map(post => (<Card {...post}/>))} */}
    
    {/* <Newspost/>
    <Newspost/>
    <Newspost/> */}
    </div>
  );
}
