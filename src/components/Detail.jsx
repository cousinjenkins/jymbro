import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import Back from '../assets/icons/back.png'
import Bench from '../assets/icons/bench.png'
import Pecs from '../assets/icons/pecs.png'


const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; // object destructure

    const extraDetail = [{
        icon: Back,
        name: bodyPart,
    }, 
    {
        icon: Pecs,
        name: target,
    },
    {
        icon: Bench,
        name: equipment,
    }
]


  return (
    <Stack gap="60px" sx={{flexDirection: { lg: 'row'}, p: '20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
            <Typography variant='h3' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h6' textTransform='capitalize'>
              {name} {` `} is one of the best exercises to target your {target}. Whenever you don't feel like going to the gym, JymBro suggests you go. Because no one asked how you feel.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                    <Button sx={{ background: "#fff2db", borderRadius: '50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                    </Button>
                    <Typography textTransform="capitalize" variant='h3'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail