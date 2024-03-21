import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Movie from './Movie'
import '../assets/StyleSheets/Movies.css'
const Movies = () =>
 {
  const [movie,setMovie]=useState([])
  const [movietype,setMovieType]=useState('animation');
  const navigate=useNavigate();
  const ChangeData=(e)=>
  {
        const s= e.target.value
        console.log(s)
        setMovieType(s)
        setMovie([])
  }
  useEffect(()=>
{ 
  axios.get(`https://api.sampleapis.com/movies/${movietype}`)
   .then((res)=>
   {   
     console.log(res.data)
     setMovie(res.data)
    } 
   )
   .catch((d)=>
   {
    console.log(d)
   })
}
,[movietype])

return(
    < div id='MainDiv'>
     <select id="MovieTypes" onChange={ChangeData}>
        <option value="animation">animation</option>
        <option value="classic">classic</option>
        <option value="comedy">comedy</option>
        <option value="drama">drama</option>
        <option value="horror">horror</option>
        <option value="family">family</option>
        <option value="mystery">mystery</option>
        <option value="western">western</option>
       </select>
      <div className='Div1'>
      {
        movie.map((data)=>(data &&
        <div className='SubDiv'>
          <img className='MoviesImg' src={data.posterURL} alt={data.title}/>
          <h2>{data.title}</h2>
          <button onClick={()=>{navigate(`/movie/${data.imdbId}`)}}> See More Details</button>
        </div>))
      }
      </div>
    </div>
  )
}

export default Movies
