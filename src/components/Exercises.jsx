import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utilityFunctions/fetchData'
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
  
  
  const paginate = (e, value) => {
    setCurrentPage(value);
    
    window.scrollTo({ top: 1800, behaviour: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);

      }
      setExercises(exercisesData);
    }
    fetchExercisesData(); 
  }, [bodyPart]);

  
  return (
    <Box id='exercises'
    sx={{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    
    >
      <Typography variant="h3" mb="46px">
       Rendering...
      </Typography>
      <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px'}}} flexWrap= 'wrap' justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color="standard" 
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate} // onChange={(e) => paginate(e, value)} pagination component immediately passes the event and it also passes the value of the current page that is clicked on and its done behind the scene by material ui.
          size="large"
          
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises