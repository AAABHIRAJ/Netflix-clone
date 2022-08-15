import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import "./Row.css";
import { useNavigate } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow }) {
    
    const base_Url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState();
    const navigate = useNavigate();

    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    // console.log(movies);
  return (
      <div className='row'>
          <h2 className='row__title'>{title}</h2>          
          <div className="row_posters">
              {movies?.map((movie) => {
                  return (
                      
                      ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) )&& (

                          <img
                                onClick={() => {navigate("/videoplayer")}}
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                                src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                          />

)
                      
                  )
})}
        </div>
         
    </div>
  )
}

export default Row;
