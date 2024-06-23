import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const topicsList = [
    "Politics", "Business", "Science", "Technology", "Entertainment",
    "Sports", "World", "Lifestyle", "Health"
    ];

    //  const topicsList = [
        // {id: 1, name :"Politics"},
        // {id : 2, name : "Business"}, 
        // {id : 3, name : "Science"}, 
        // {id: 4, name : "Technology"},
        // {id: 5, name : "Sports"},
        // {id: 6, name : "World"},
        // {id: 7, name : "Lifestyle"},
        // {id: 8, name : "Health"},
        // {id: 9, name : "Entertainment"} ];

export default function ChoosePref() {
  const [selectedTopics, setSelectedTopics] = useState([]);

    const [clicked, setClicked] = useState(topicsList.reduce((acc, topic) => {
        acc[topic] = false;
        return acc;
      }, {}));

    const handleClick = (topic) => {
        // setClicked((prevState) => ({
        //   ...prevState,
        //   [topic]: !prevState[topic],
        // }));
        setClicked((prevState) => ({
          ...prevState,
          [topic]: !prevState[topic],
        }));
        // Toggle selected topics list
        if (!clicked[topic]) {
          setSelectedTopics((prevSelected) => [...prevSelected, topic]);
        } else {
          setSelectedTopics((prevSelected) =>
              prevSelected.filter((selectedTopic) => selectedTopic !== topic)
          );
        }
    };

    function handleSubmit (){
      console.log("Selected Topics:", selectedTopics);
    }


  return (
    <div>
      <h2>Choose Your Preferences</h2>
      <Stack className='chips' direction="row" style={{maxWidth: '600px', flexWrap: 'wrap', gap: 10}}>
        {topicsList.map((topic) => <Chip label={topic} variant={clicked[topic] ? 'filled' : 'outlined'} onClick={() => handleClick(topic)} />)}
        {/* <Chip label="Clickable" onClick={() => handleClick} /> */}
        {/* <Chip label="Clickable" variant="outlined" onClick={handleClick}/> */}
      </Stack><br></br>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}


