import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=> {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results)
            setMovie(response.data.results[6])
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className='banner-wrap'>
            <div className="banner-content">
                <div className="title-col">
                    <h1> {movie? movie.title : ""} </h1>
                </div>
                <div className="button-col">
                    <button className='button'><i class="fa-solid fa-play"></i> Play</button>
                    <button className='button'><i class="fa-solid fa-plus"></i> My List</button>
                </div>
                <div className="desc-col">
                    <p> {movie? movie.overview : ""} </p>
                </div>
            </div>
        </div>
    )
}

export default Banner