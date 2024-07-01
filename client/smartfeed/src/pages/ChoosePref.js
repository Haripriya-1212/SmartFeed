import React, { useContext, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { RegisterContext } from "../UserContext";
import { Navigate } from "react-router-dom";

const topicsList = [
  "Politics",
  "Business",
  "Science",
  "Technology",
  "Entertainment",
  "Sports",
  "World",
  "Lifestyle",
  "Health",
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
  const [redirect, setRedirect] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const { registerInfo } = useContext(RegisterContext);

  const [clicked, setClicked] = useState(
    topicsList.reduce((acc, topic) => {
      acc[topic] = false;
      return acc;
    }, {})
  );

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

  
  async function handleSubmit(ev) {
    ev.preventDefault();
    
    console.log("Register Info:", registerInfo);
    console.log("Selected Topics:", selectedTopics);
    
    const registrationData = { ...registerInfo, selectedTopics };
  
    try {
      console.log("Sending registration data:", registrationData);
      
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(registrationData),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Registration successful:", data);
      setRedirect(true);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="choosePrefPage">
      <br></br>
      <h2>Choose Your Preferences</h2>
      <Stack
        className="chips"
        direction="row"
        style={{ maxWidth: "600px", flexWrap: "wrap", gap: 10 }}
      >
        {topicsList.map((topic) => (
          <Chip
            label={topic}
            variant={clicked[topic] ? "filled" : "outlined"}
            onClick={() => handleClick(topic)}
            sx={{
              color: "white",
              borderColor: "white", // For outlined variant
              "&.MuiChip-filled": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Customize background for filled variant
              },
            }}
          />
        ))}
        {/* <Chip label="Clickable" onClick={() => handleClick} /> */}
        {/* <Chip label="Clickable" variant="outlined" onClick={handleClick}/> */}
      </Stack>
      <br></br>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}
