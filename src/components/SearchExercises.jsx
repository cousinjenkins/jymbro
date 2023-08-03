import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, } from '@mui/material';
import { exerciseOptions, fetchData } from '../utilityFunctions/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts ] = useState([])


    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
            
        }
        fetchExercisesData();
    }, []
    ) //to fetch catergories as the page loads 

    const handleSearch = async () => {
        if(search) { // if someone is using the search bar
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); //exerciseOptions because added my own API key 

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search) // different ways of searching for a particular workout, more efficient and accurate search engine.
            );

            console.log(exerciseData);

            setSearch('');
            setExercises(searchedExercises);
        }
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Box position="relative" mb=" 72px">
            <TextField
            sx={{
                input: { 
                    fontWeight: '700', 
                    border: 'none', 
                    borderRadius: '4px'
                }, 
                width: { lg: '800px', xs: '350px'},
                backgroundColor: 'white',
                borderRadius: '4px'
                
            }}
            
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())} // callback function to handle input
            placeholder="Search Exercises..."
            type="text"/>
            <Button className="search-btn"
            sx={{
                bgcolor: 'black',
                color: 'white',
                textTransform:'none',
                width: { lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'},
                height: '56px',
                position: "absolute",
                right: '0', // due to absolute property, need to apply right to make it appear centered.
                fontWeight: "bold"
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width:'100%', p: '20px'}}> 
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
        </Box>

    </Stack>
  )
}
// horizontalscrollbar data is passed as props into the horizontalscrollbar.jsx component
export default SearchExercises