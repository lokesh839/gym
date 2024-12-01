import React, { useState } from 'react';
import { Box } from '@mui/material';
import Herobanner from '../Compontes/Herobanner';
import SearchExercies from '../Compontes/SearchExercies';
import Exercises from '../Compontes/Exercises';


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (

    <Box>
      <Herobanner />
      <SearchExercies />
      <Exercises />
    </Box>
  )
}

export default Home