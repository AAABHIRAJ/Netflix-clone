import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "../axios";
import requests from '../Requests';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n) {
        return (string?.length > n ? string.substring(0, n - 1) : string) + "...";
    }
    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
      >
          <h1 className='banner_title'>
              {movie?.name || movie?.title || movie?.original_name }
          </h1>
          <button onClick={() => navigate("/videoplayer")} className='banner__buttons'>Play</button>
          <button className='banner__buttons'>MyList</button>
          <p className='banner__description'>{truncate(movie?.overview, 150)}</p>     
          <div className='banner--fadeBottom' />
          
    </header>
  )
}

export default Banner
