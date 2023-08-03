import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //used to determine the id of exercise currently on to fetch additional data bout that exercise.
import { Box } from '@mui/material'
import { exerciseOptions, fetchData } from '../utilityFunctions/fetchData';
import Detail from '../components/Detail';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams(); // gives access to the number in the url that i am currently on.
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();

  }, [id]); //dependancy array with id to recall function whenever id changes

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
    </Box>
  )
}

export default ExerciseDetail