import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const topicsList = [
    "Politics", "Business", "Science", "Technology", "Entertainment",
    "Sports", "World", "Lifestyle", "Health"
    ];

export default function ChoosePref() {

    const [clicked, setClicked] = useState(topicsList.reduce((acc, topic) => {
        acc[topic] = false;
        return acc;
      }, {}));

    const handleClick = (topic) => {
        setClicked((prevState) => ({
          ...prevState,
          [topic]: !prevState[topic],
        }));
    };


  return (
    <div>
      <h2>Choose Your Preferences</h2>
      <Stack className='chips' direction="row" style={{maxWidth: '600px', flexWrap: 'wrap', gap: 10}}>
        {topicsList.map((topic) => <Chip label={topic} variant={clicked[topic] ? 'filled' : 'outlined'} onClick={() => handleClick(topic)} />)}
        {/* <Chip label="Clickable" onClick={() => handleClick} /> */}
        {/* <Chip label="Clickable" variant="outlined" onClick={handleClick}/> */}
      </Stack><br></br>
      <button>Continue</button>
    </div>
  );
}


