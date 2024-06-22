import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ChoosePref() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div>
      <h2>Choose Your Preferences</h2>
      <Stack direction="row" spacing={1}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
    </div>
  );
}


