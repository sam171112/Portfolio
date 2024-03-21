import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import '../assets/StyleSheets/Movie.css'
import { Link } from 'react-router-dom';
const Movie =() => 
{
   const {id}=useParams();
  console.log(id)
  const [movieData,setMovieData]=useState({})
   useEffect(()=>{
       axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a37676f3&`)
       .then((res)=>
       {
        console.log(res.data)
        setMovieData(res.data)
       })
       .catch(()=>
       {
        console.log("No Data Found")
       })

  },[])
  return (
    <div className='movieDiv'>
      <img className='movieImg' src={movieData.Poster} alt={movieData.Title}/>
      <div className='subDiv1'>
      <h3 className='heading'>Title :{movieData.Title}</h3>
      <h3 className='heading'>Year: {movieData.Year}</h3>
      <h3 className='heading'>Awards:{movieData.Awards}</h3>
      <h3 className='heading'>Plot:  {movieData.Plot}</h3>
      <button className='btn'><Link className='LinkMovie' to={`https://www.imdb.com/title/${movieData.imdbID}`} target='_blank'>See More</Link></button>
      </div>
    </div>
  )
}

export default Movie
