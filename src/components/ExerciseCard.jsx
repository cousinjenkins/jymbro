import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ( { exercise }) => {
  return (
    <Link  className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" /> 
        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#fff', background: 'black', fontSize: '14px', borderRadius: '20px', textTransform:'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: 'black', fontSize: '14px', borderRadius: '20px', textTransform:'capitalize'}}>
                {exercise.target}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: 'black', fontSize: '14px', borderRadius: '20px', textTransform:'capitalize'}}>
                {exercise.equipment}
            </Button>

        </Stack>
        <Typography ml='50px' mr='50px' color="#000" fontweight='bold' mt='11px' pb="10px" textTransform='capitalize' fontSize='24px'>
            {exercise.name} 
        </Typography>
    </Link>
  )
}

export default ExerciseCard
// laoding lazy means the gif wont load immediately