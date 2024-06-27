import React, {useState} from 'react'
import image from '../imgs/img2.png'
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Card() {
  const [bookmarked, setBookmarked] = useState(false);
  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  }
  return (
    <div className="main-card">
      <img
        className="img-card"
        src={
          "https://img.freepik.com/free-vector/global-earth-blue-technology-digital-background-design_1017-27075.jpg"
        }
        alt="alternate"
      ></img>
      <div className="bookmark-icon" onClick={handleBookmarkClick}>
        {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </div>
      <h3 className="title-card">The Amazing Spiderman spotted in Mysuru</h3>
      <p className="time-card">3 hours ago</p>
      <p className="summary-card">The Amazing Spiderman has been spotted recently in Mysuru. It was seen that
        the Spiderman was taking a walk through the Nie campus and eating a donut and a muffin at the canteen with a friend.
      </p>
    </div>
  );
}
