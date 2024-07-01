import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        // console.log(id);
        fetch('http://localhost:4000/post/'+id).then(response =>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
            });
        });
    }, [])

    if(!postInfo) return '';

  return (
    <div className='post-page'>
        <div className='post-img'>
            <img src={postInfo.cover}></img>
        </div>
        <h1>{postInfo.title}</h1>
        <p className="post-info">
            <span className='source'>by {postInfo.source}</span>&nbsp;&nbsp; | &nbsp;&nbsp;
            {/* <time>{formatISO9075(new Date(postInfo.createdAt))}</time> */}
            <p>{postInfo.createdAt}</p>
          </p><br/>
        {/* <p>{postInfo.content}</p> */}
        <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}
