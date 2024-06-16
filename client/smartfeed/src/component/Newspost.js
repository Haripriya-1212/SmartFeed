import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom';
import React from 'react'

// export default function Newspost({_id, title, summary, content, cover, createdAt, author}) {
//   return (
//     <div className="post">
//         <div className="image">
//             <img src={'https://imgs.search.brave.com/a_ttvksQkl1aXxXZztaDubVn6YOjCAziqFUlb-A0QdA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/Mi8wMS8yMC8yOC9m/b3Jlc3QtMTA3Mjgy/OF82NDAuanBn'} alt=""/>
//         </div>
//         <div className="text">
//             <h2>News Article</h2>
//           <p className="info">
//             <a className="author">Haripriya</a> &nbsp;|
//             <date>16th June 2024</date>
//           </p>
//           <p className="summary">lorem20</p>
//         </div>
//       </div>
//   )
// }

export default function Newspost({_id, title, summary, content, cover, source, createdAt}) {
  return (
    <div className="post">
        <div className="image">
          <Link to={'/post/'+_id}>
            <img src={cover} alt=""/>
          </Link>
        </div>
        <div className="text">
          <Link to={'/post/'+_id}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="source">{source}</a> &nbsp;|
            <date>{formatISO9075(createdAt)}</date>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
  )
}
