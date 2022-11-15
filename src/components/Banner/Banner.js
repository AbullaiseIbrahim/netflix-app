import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { getSelectedMovieId, setSelectedMovieId } from '../../utils/localStorage'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(()=> {

        const getMovieInfo = async() => {
            const movieInfo = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => res.data?.results) || [];
            // console.log(movieInfo)
            let movieId = movieInfo?.length
            let selectedMovieId = getSelectedMovieId()

            if(selectedMovieId < movieId)
                selectedMovieId = selectedMovieId+1
            else
                selectedMovieId = 0

            // console.log(selectedMovieId, 'sel')

            setMovie((movieInfo || [])[selectedMovieId] || {})
            setSelectedMovieId(selectedMovieId)
        }
        getMovieInfo()

    }, [])

    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className='banner-wrap'>
            <div className="banner-content">
                <div className="title-col">
                    <h1> {movie? movie.title : ""} </h1>
                </div>
                <div className="button-col">
                    <button className='button'><i className="fa-solid fa-play"></i> Play</button>
                    <button className='button'><i className="fa-solid fa-plus"></i> My List</button>
                </div>
                <div className="desc-col">
                    <p> {movie? movie.overview : ""} </p>
                </div>
            </div>
        </div>
    )
}

export default Banner