import React, { useEffect, useState } from 'react';
import Newspost from '../component/Newspost';
// import { response } from 'express';

export default function IndexPage() {
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
    {posts.length>0 && posts.map(post => (<Newspost {...post}/>))}
    {/* <Newspost/>
    <Newspost/>
    <Newspost/> */}
    </>
  );
}
